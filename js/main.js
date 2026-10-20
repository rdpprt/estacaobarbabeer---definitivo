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

/* Cartões de serviço: abrem o WhatsApp com o serviço já escrito */
if (CONFIG.whatsapp) {
  document.querySelectorAll("[data-service]").forEach((a) => {
    const msg = `Olá! Quero agendar: ${a.dataset.service}, na Estação Barbabeer.`;
    a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

/* Bilhete usado: ao tocar para agendar, o canhoto se solta (o WhatsApp abre em nova aba) */
document.querySelectorAll("[data-service]").forEach((a) => {
  a.addEventListener("click", () => a.closest(".ticket")?.classList.add("is-used"));
});

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

/* Galeria: os vídeos só carregam e tocam (mudos, em loop) enquanto estão na tela.
   Para quem prefere menos movimento, ficam parados com os controles visíveis. */
const galleryVideos = document.querySelectorAll(".frame--video video");
if (reduceMotion || !("IntersectionObserver" in window)) {
  galleryVideos.forEach((v) => (v.controls = true));
} else {
  const vio = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target: v, isIntersecting }) => {
        // se o navegador bloquear o autoplay, mostra os controles para a pessoa tocar
        if (isIntersecting) v.play().catch((err) => { if (err.name === "NotAllowedError") v.controls = true; });
        else v.pause();
      });
    },
    { threshold: 0.35 },
  );
  galleryVideos.forEach((v) => vio.observe(v));
}

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
    ".ticket",
    ".rating",
    ".reviews__actions",
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
  document.querySelectorAll(".ticket, .frame").forEach((el) => {
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

/* Avaliações: como na referência, a seção fica presa na tela e os cartões
   aparecem um por um conforme a rolagem. No celular os cartões ficam empilhados
   no mesmo lugar, como um baralho: cada novo cobre o anterior, que encolhe atrás.
   Só prende quando tudo cabe na tela; senão cada cartão aparece ao entrar. */
const reviewsSec = document.querySelector(".reviews");
const reviewCards = [...document.querySelectorAll(".review")];
if (reviewsSec && reviewCards.length && !reduceMotion && document.documentElement.classList.contains("js")) {
  const wrap = reviewsSec.querySelector(".reviews__pin > .wrap");
  const grid = reviewsSec.querySelector(".review-grid");
  const phoneQuery = matchMedia("(max-width: 760px)");
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const show = (el, t) => {
    const e = ease(Math.min(1, Math.max(0, t)));
    el.style.opacity = e;
    el.style.transform = `translateY(${(1 - e) * 34}px) scale(${0.97 + 0.03 * e})`;
  };
  let pinned = false;
  let queued = false;
  const update = () => {
    queued = false;
    if (!pinned && phoneQuery.matches) {
      // celular: o carrossel inteiro sobe junto; cada cartão fica por conta do carrossel
      show(grid, (innerHeight * 0.95 - grid.getBoundingClientRect().top) / (innerHeight * 0.3));
      return;
    }
    grid.style.opacity = grid.style.transform = "";
    if (pinned) {
      const span = reviewsSec.offsetHeight - innerHeight;
      const p = Math.min(1, Math.max(0, -reviewsSec.getBoundingClientRect().top / span));
      // cada cartão ocupa uma fatia da rolagem; o último termina antes de soltar a seção
      const step = (i) => p * (reviewCards.length + 0.6) - i;
      reviewCards.forEach((c, i) => show(c, step(i)));
    } else {
      reviewCards.forEach((c) => {
        const top = c.getBoundingClientRect().top;
        show(c, (innerHeight * 0.95 - top) / (innerHeight * 0.3));
      });
    }
  };
  const layout = () => {
    reviewsSec.classList.add("is-pinned");
    // no celular a seção nunca trava: as avaliações viram um carrossel
    const fits = innerWidth > 760 && wrap.offsetHeight + 40 <= innerHeight;
    reviewsSec.classList.toggle("is-pinned", fits);
    pinned = fits;
    update();
  };
  addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", layout);
  document.fonts.ready.then(layout);
  layout();
}

/* Avaliações no celular: carrossel de deslizar com o dedo, bolinhas e troca automática */
const carTrack = document.querySelector(".review-grid");
const carNav = document.querySelector(".carousel-nav");
if (carTrack && carNav) {
  const phone = matchMedia("(max-width: 760px)");
  const slides = [...carTrack.children];
  const dotsBox = carNav.querySelector(".carousel-nav__dots");
  const dots = slides.map((_, i) => {
    const d = document.createElement("button");
    d.type = "button";
    d.className = "carousel-nav__dot";
    d.setAttribute("aria-label", `Avaliação ${i + 1} de ${slides.length}`);
    d.addEventListener("click", () => { stopAuto(); go(i); });
    dotsBox.append(d);
    return d;
  });
  // distância entre um cartão e o próximo (largura + espaço entre eles)
  const pitch = () => (slides[1] ? slides[1].offsetLeft - slides[0].offsetLeft : carTrack.clientWidth);
  const current = () => Math.round(carTrack.scrollLeft / pitch());
  const go = (i) => {
    const n = (i + slides.length) % slides.length;
    carTrack.scrollTo({ left: n * pitch(), behavior: reduceMotion ? "auto" : "smooth" });
  };
  const mark = () => {
    const c = current();
    dots.forEach((d, i) => d.setAttribute("aria-current", i === c ? "true" : "false"));
    // o cartão do centro fica nítido; os dos lados ficam menores, apagados e desfocados
    if (!phone.matches) { slides.forEach((s) => { s.style.filter = ""; }); return; }
    const pos = carTrack.scrollLeft / pitch();
    slides.forEach((s, i) => {
      const d = Math.min(1, Math.abs(pos - i));
      s.style.opacity = 1 - 0.4 * d;
      s.style.transform = `scale(${1 - 0.06 * d})`;
      s.style.filter = d > 0.01 ? `blur(${(3 * d).toFixed(2)}px)` : "";
    });
  };
  // passa sozinho a cada 5s enquanto está na tela; para de vez quando a pessoa mexe
  let timer = null;
  let touched = false;
  let onScreen = false;
  const stopAuto = () => { touched = true; clearInterval(timer); timer = null; };
  const syncAuto = () => {
    const run = phone.matches && onScreen && !touched && !reduceMotion;
    if (run && !timer) timer = setInterval(() => go(current() + 1), 5000);
    if (!run && timer) { clearInterval(timer); timer = null; }
  };
  carTrack.addEventListener("pointerdown", stopAuto);
  carTrack.addEventListener("scroll", mark, { passive: true });
  new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; syncAuto(); }, { threshold: 0.6 }).observe(carTrack);
  const setup = () => {
    carNav.hidden = !phone.matches;
    mark();
    syncAuto();
  };
  phone.addEventListener("change", setup);
  setup();
}

/* Topo: esconde ao descer, volta ao subir. Botão flutuante some perto do fim. */
const topbar = document.querySelector("[data-topbar]");
const floatBtn = document.querySelector(".float-whats");
const closing = document.querySelector(".closing");
let lastY = window.scrollY;
let ticking = false;
// A logo da barra só aparece depois que a logo grande do início sai de baixo da barra
const heroLogo = document.querySelector(".hero__logo");
const syncBrand = () => {
  const hidden = heroLogo && heroLogo.getBoundingClientRect().bottom > topbar.offsetHeight;
  topbar.classList.toggle("logo-hidden", Boolean(hidden));
};
syncBrand();
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      syncBrand();
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
