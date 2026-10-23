/*
 * Monta a pasta "para-hostinger/" só com o que o site usa, pronta para subir
 * no Gerenciador de Arquivos da Hostinger (dentro de public_html).
 *
 * Uso (na pasta do projeto):
 *   node scripts/preparar-hostinger.js https://www.seudominio.com.br
 *
 * O endereço é usado na prévia do link (WhatsApp, Instagram, Facebook).
 */
const fs = require("fs");
const path = require("path");

const raiz = path.join(__dirname, "..");
const destino = path.join(raiz, "para-hostinger");
const dominio = (process.argv[2] || "").replace(/\/+$/, "");

if (!/^https:\/\/[^/]+$/.test(dominio)) {
  console.error("Informe o domínio com https, por exemplo:\n  node scripts/preparar-hostinger.js https://www.estacaobarbabeer.com.br");
  process.exit(1);
}

// Começa do zero para não sobrar arquivo antigo
fs.rmSync(destino, { recursive: true, force: true });
fs.mkdirSync(destino, { recursive: true });

const copiar = (rel) => {
  const de = path.join(raiz, rel);
  const para = path.join(destino, rel);
  fs.mkdirSync(path.dirname(para), { recursive: true });
  fs.copyFileSync(de, para);
};

// Páginas: troca o endereço antigo (GitHub Pages) pelo domínio novo
const antigo = "https://rdpprt.github.io/estacaobarbabeer---definitivo";
for (const pagina of ["index.html", "politica-de-privacidade.html"]) {
  const html = fs.readFileSync(path.join(raiz, pagina), "utf8").split(antigo).join(dominio);
  fs.writeFileSync(path.join(destino, pagina), html);
}

// CSS e JS
for (const rel of ["css/style.css", "js/main.js", "js/consent.js"]) copiar(rel);

// robots.txt e sitemap.xml, com o domínio certo
for (const f of ["robots.txt", "sitemap.xml"]) {
  const t = fs.readFileSync(path.join(raiz, f), "utf8").split("https://estacaobarbabeer.com").join(dominio);
  fs.writeFileSync(path.join(destino, f), t);
}

// Fontes (servidas pelo próprio site)
for (const f of fs.readdirSync(path.join(raiz, "assets/fonts"))) copiar(`assets/fonts/${f}`);

// Só as imagens e vídeos que as páginas e o CSS realmente usam
const usados = new Set();
for (const f of ["index.html", "politica-de-privacidade.html", "css/style.css", "js/main.js"]) {
  const texto = fs.readFileSync(path.join(raiz, f), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  for (const m of texto.matchAll(/assets\/[\w./-]+\.(?:webp|png|jpg|jpeg|svg|mp4|ico)/g)) usados.add(m[0]);
}
for (const rel of usados) copiar(rel);

// .htaccess: força HTTPS e deixa o navegador guardar as imagens e vídeos
fs.writeFileSync(
  path.join(destino, ".htaccess"),
  `# Gerado por scripts/preparar-hostinger.js
RewriteEngine On
# www -> sem www (um endereco so para o Google)
RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]
# http -> https
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 30 days"
  ExpiresByType image/png "access plus 30 days"
  ExpiresByType image/jpeg "access plus 30 days"
  ExpiresByType video/mp4 "access plus 30 days"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/css "access plus 1 day"
  ExpiresByType application/javascript "access plus 1 day"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>
`
);

const total = [...usados].filter((u) => !u.startsWith("assets/fonts/")).length + 8 + fs.readdirSync(path.join(raiz, "assets/fonts")).length;
// Zip com barras normais nos caminhos (o extrator da Hostinger roda em Linux)
const zip = path.join(raiz, "estacaobarbabeer-hostinger.zip");
fs.rmSync(zip, { force: true });
// no Windows usa o tar do sistema (o do Git Bash entende "C:" como endereço de rede)
const tar = process.platform === "win32" ? path.join(process.env.SystemRoot || "C:\\Windows", "System32", "tar.exe") : "tar";
require("child_process").execFileSync(
  tar,
  ["-a", "-c", "-f", path.relative(destino, zip), ".htaccess", "index.html", "politica-de-privacidade.html", "robots.txt", "sitemap.xml", "css", "js", "assets"],
  { cwd: destino },
);
console.log(`Pronto: ${total} arquivos em para-hostinger/ (domínio ${dominio}) e estacaobarbabeer-hostinger.zip.`);
