/*
 * ============================================================
 *  DADOS DA BARBEARIA: preencha aqui e o site se atualiza.
 *  Campo vazio ("") ou null = o site mostra o espaço tracejado
 *  "a preencher" no lugar.
 * ============================================================
 */
const CONFIG = {
  // Página de agendamento online (botão principal do topo)
  agendamento: "https://app.barbercode.com.br/client/estacao-barbabeer/new",
  // Só números, com DDI 55 + DDD. Ex.: "5521999998888"
  whatsapp: "5521967047027",
  // Mensagem que já chega escrita no WhatsApp
  mensagem: "Olá! Quero agendar um horário na Estação Barbabeer.",
  // Ex.: "(21) 99999-8888"
  telefone: "(21) 96704-7027",
  // Sem @. Ex.: "estacaobarbabeer"
  instagram: "estacaobarbabeer",
  // Endereço completo. Também gera o mapa. Ex.: "Rua X, 100 - Centro, Cidade - UF"
  endereco: "Estrada dos Menezes, 850 - Loja 114, Mutondo, São Gonçalo - RJ",
  // Fotos (coloque os arquivos na pasta assets/). Ordem: corte, fachada, barba, salão.
  // Ex.: { src: "assets/fachada.jpg", alt: "Fachada da Estação Barbabeer" }
  fotos: [null, null, null, null],
  // Horários: abre/fecha no formato "09:00". Dia fechado: { fechado: true }.
  // null = ainda não informado.
  horarios: [
    { dia: "Domingo", h: { fechado: true } },
    { dia: "Segunda", h: { fechado: true } },
    { dia: "Terça", h: { abre: "10:00", fecha: "20:00" } },
    { dia: "Quarta", h: { abre: "10:00", fecha: "20:00" } },
    { dia: "Quinta", h: { abre: "10:00", fecha: "20:00" } },
    { dia: "Sexta", h: { abre: "10:00", fecha: "20:00" } },
    { dia: "Sábado", h: { abre: "09:00", fecha: "18:00" } },
  ],
};

/* ------------------------------------------------------------ */

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// "(21) 99999-8888" -> "+5521999998888"
function toIntl(phone) {
  const d = phone.replace(/\D/g, "");
  return "+" + (d.startsWith("55") && d.length > 11 ? d : "55" + d);
}

function fill(el, text) {
  el.textContent = text;
  el.classList.remove("tbd");
}

/* Agendamento online: botões com data-book */
if (CONFIG.agendamento) {
  document.querySelectorAll("[data-book]").forEach((a) => {
    a.href = CONFIG.agendamento;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

/* WhatsApp: os demais botões de agendar */
if (CONFIG.whatsapp) {
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

/* Contato */
if (CONFIG.telefone) {
  document.querySelectorAll("[data-phone]").forEach((el) => {
    const link = document.createElement("a");
    link.href = `tel:${toIntl(CONFIG.telefone)}`;
    link.textContent = CONFIG.telefone;
    el.replaceWith(link);
  });
}
if (CONFIG.instagram) {
  const url = `https://www.instagram.com/${CONFIG.instagram}`;
  document.querySelectorAll("[data-instagram]").forEach((a) => {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  });
  document
    .querySelectorAll("[data-instagram-label]")
    .forEach((el) => (el.textContent = `@${CONFIG.instagram}`));
  document.querySelectorAll("[data-instagram-handle]").forEach((el) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = `@${CONFIG.instagram}`;
    el.replaceWith(link);
  });
}
if (CONFIG.endereco) {
  document
    .querySelectorAll("[data-address]")
    .forEach((el) => fill(el, CONFIG.endereco));
  const map = document.querySelector("[data-map]");
  if (map) {
    const q = encodeURIComponent(CONFIG.endereco);
    map.innerHTML = `<iframe title="Mapa: ${CONFIG.endereco}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${q}&output=embed"></iframe>`;
  }
}

/* Fotos */
CONFIG.fotos.forEach((foto, i) => {
  const frame = document.querySelector(`[data-photo="${i}"]`);
  if (!foto || !frame) return;
  const img = document.createElement("img");
  img.src = foto.src;
  img.alt = foto.alt || "";
  img.loading = "lazy";
  frame.replaceChildren(img);
  frame.classList.add("frame--filled");
});

/* Quadro de horários (split-flap) */
const board = document.querySelector("[data-board]");
const body = document.querySelector("[data-board-body]");
const today = new Date().getDay();
let rowIdx = 0;
let colIdx = 0;
// Cascata: cada linha começa um pouco depois da anterior, cada plaquinha logo após a vizinha
const delay = () => `${rowIdx * 70 + colIdx++ * 35}ms`;

function flaps(text, extraClass = "") {
  const wrap = document.createElement("span");
  wrap.className = "flaps";
  if (extraClass) {
    const f = document.createElement("span");
    f.className = `flap ${extraClass}`;
    f.style.setProperty("--d", delay());
    f.textContent = text;
    wrap.append(f);
    return wrap;
  }
  for (const ch of text) {
    const f = document.createElement("span");
    f.className = ch === ":" ? "flap flap--sep" : "flap";
    f.style.setProperty("--d", delay());
    f.textContent = ch;
    wrap.append(f);
  }
  return wrap;
}

// Começa na segunda-feira, como um quadro de semana
const order = [1, 2, 3, 4, 5, 6, 0];
order.forEach((i, r) => {
  rowIdx = r;
  colIdx = 0;
  const { dia, h } = CONFIG.horarios[i];
  const row = document.createElement("div");
  row.className = "board__row" + (i === today ? " is-today" : "");
  row.setAttribute("role", "row");

  const day = document.createElement("span");
  day.className = "board__day";
  day.setAttribute("role", "rowheader");
  day.textContent = dia;
  if (i === today) {
    const tag = document.createElement("small");
    tag.textContent = "Hoje";
    day.append(tag);
  }
  row.append(day);

  const open = document.createElement("span");
  const close = document.createElement("span");
  open.setAttribute("role", "cell");
  close.setAttribute("role", "cell");
  if (h && h.fechado) {
    open.append(flaps("FECHADO", "flap--closed"));
    open.setAttribute("aria-label", "Fechado");
    open.className = "board__closed";
  } else {
    const a = h ? h.abre : "--:--";
    const f = h ? h.fecha : "--:--";
    open.append(flaps(a));
    close.append(flaps(f));
    open.setAttribute("aria-label", h ? `Abre ${a}` : "Horário a informar");
    close.setAttribute("aria-label", h ? `Fecha ${f}` : "Horário a informar");
  }
  row.append(open);
  if (!(h && h.fechado)) row.append(close);
  body.append(row);
});

/* Movimento ao rolar: blocos sobem, titulos entram com zoom, fotos se revelam,
   e o quadro vira as plaquinhas quando entra na tela */
if ("IntersectionObserver" in window && !reduceMotion) {
  const riseSelectors = [
    ".field .display",
    ".closing .display",
    ".svc",
    ".services__head p",
    ".services__cta",
    ".board",
    ".work__head .link",
    ".frame",
    ".visit__info",
    ".visit__map",
    ".closing__inner > :not(h2)",
  ];
  document.querySelectorAll(riseSelectors.join(",")).forEach((el) => el.setAttribute("data-rise", ""));
  // Cartões e fotos entram em cascata
  document.querySelectorAll(".svc, .frame").forEach((el) => {
    const i = [...el.parentElement.children].indexOf(el);
    el.style.setProperty("--d", `${i * 110}ms`);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        if (e.target === board) board.classList.add("is-flipping");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
  );
  document.querySelectorAll("[data-rise]").forEach((el) => io.observe(el));
} else {
  document.documentElement.classList.remove("js");
}

/* Topo: esconde ao descer, volta ao subir. Botão flutuante some perto do fim. */
const topbar = document.querySelector("[data-topbar]");
const floatBtn = document.querySelector(".float-whats");
const closing = document.querySelector(".closing");
let lastY = window.scrollY;
let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const menuOpen = toggle.getAttribute("aria-expanded") === "true";
      topbar.classList.toggle("is-hidden", !menuOpen && y > lastY && y > 120);
      const closingTop = closing.getBoundingClientRect().top;
      floatBtn.classList.toggle(
        "is-away",
        y < 300 || closingTop < window.innerHeight,
      );
      lastY = y;
      ticking = false;
    });
  },
  { passive: true },
);

/* Menu do celular */
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.getElementById("menu");
function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.querySelector(".sr").textContent = open ? "Fechar menu" : "Abrir menu";
  menu.classList.toggle("is-open", open);
}
toggle.addEventListener("click", () =>
  setMenu(toggle.getAttribute("aria-expanded") !== "true"),
);
menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    toggle.focus();
  }
});

document
  .querySelectorAll("[data-year]")
  .forEach((el) => (el.textContent = new Date().getFullYear()));
