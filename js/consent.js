/*
 * ============================================================
 *  COOKIES E GOOGLE TAG MANAGER (LGPD)
 *
 *  >>> CONTÊINERES DO GTM: um ID por linha, entre aspas, com vírgula no fim. <<<
 *  Formato "GTM-XXXXXXX". Linha vazia ("") é ignorada.
 *  Todos respeitam o aviso de cookies: nada é gravado antes de a pessoa aceitar.
 * ============================================================
 */
const GTM_IDS = [
  "", // contêiner 1: cole o ID aqui, ex. "GTM-ABC1234"
  "", // contêiner 2 (opcional)
];
/* ============================================================ */

/* Consent Mode v2: tudo começa NEGADO. Nada de medição ou anúncio grava cookie
   antes de a pessoa aceitar no aviso. */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "granted", // necessário para o site funcionar
  security_storage: "granted",
  wait_for_update: 500,
});

const CONSENT_KEY = "barbabeer-cookies"; // "aceito" | "recusado"
const readChoice = () => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};
const applyChoice = (choice) => {
  const v = choice === "aceito" ? "granted" : "denied";
  gtag("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
};
if (readChoice()) applyChoice(readChoice());

/* Carrega cada contêiner preenchido (todos respeitam o consentimento acima) */
const gtmValidos = GTM_IDS.map((id) => id.trim()).filter((id) => /^GTM-[A-Z0-9]+$/.test(id));
if (gtmValidos.length) dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
gtmValidos.forEach((id) => {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.append(s);
});

/* Aviso de cookies: aparece até a pessoa escolher; o rodapé reabre */
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector("[data-cookies]");
  if (!banner) return;
  const show = () => {
    banner.hidden = false;
    document.documentElement.classList.add("cookies-open");
  };
  const hide = () => {
    banner.hidden = true;
    document.documentElement.classList.remove("cookies-open");
  };
  banner.querySelectorAll("[data-cookies-choice]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const choice = btn.dataset.cookiesChoice;
      try {
        localStorage.setItem(CONSENT_KEY, choice);
      } catch {}
      applyChoice(choice);
      hide();
    }),
  );
  document.querySelectorAll("[data-cookies-open]").forEach((b) => b.addEventListener("click", show));
  if (!readChoice()) show();
});
