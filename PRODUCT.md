# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: plain static HTML, CSS and JavaScript, with no framework and no build step. A barbershop's public website is a small, mostly static, content-led site. With plain files it loads fast on mobile data, can be hosted on any static host, and needs no toolchain to maintain. If a real need appears later, such as many pages or a CMS, the stack can be reconsidered then.

This is a standalone build. It must not reuse, copy or depend on the earlier Lovable/TanStack project in `../estacaobarbabeer` (owner's instruction, 2026-10-19).

## Users

Open: the owner will describe the primary audience later. Do not assume demographics, neighborhood or customer profile until confirmed.

## Product Purpose

The public website of **Estação Barbabeer**, a barbershop. The hero's main button ("Agendar horário") opens online booking on BarberCode (https://app.barbercode.com.br/client/estacao-barbabeer/new), set by the owner on 2026-10-19. Every other booking button (top bar, services, closing, floating button) stays on WhatsApp, by the owner's explicit choice: change only what the owner selects. What success means is not yet decided.

## Positioning

Open: the owner will describe what makes Estação Barbabeer different from other barbershops. The name points to barbering plus beer ("Barba" + "beer"), but no claim about the offer is confirmed.

## Capabilities and Constraints

- Site language: Brazilian Portuguese.
- Confirmed: the business name is "Estação Barbabeer".
- Opening hours (owner, 2026-10-19): Tuesday to Friday 10:00–20:00, Saturday 09:00–18:00, closed Sunday and Monday.
- Services and prices (owner, 2026-10-19): Corte R$ 40, Barba R$ 40, Corte + barba R$ 70, Corte infantil R$ 40. Pezinho R$ 20 (owner, 2026-10-21).
- Service durations (owner, 2026-10-20): Corte 30 min, Barba 30 min, Corte + barba 60 min, Corte infantil 30 min, Pezinho 10 min.
- Address (owner, 2026-10-19): Estrada dos Menezes, 850 - Loja 114, Mutondo, São Gonçalo - RJ.
- Phone and WhatsApp (owner, 2026-10-19): (21) 96704-7027. Instagram: @estacaobarbabeer.
- Booking (owner, 2026-10-19): BarberCode on the hero button, WhatsApp everywhere else. The closing section also keeps a secondary text link to BarberCode, "ou escolha o horário online" (owner, 2026-10-22). Phone calls are not a booking path: the phone stays in Contato only (owner, 2026-10-22). The BarberCode page lists Barba, Corte e Barba, Corte de Cabelo Masculino and Corte de Cabelo Infantil.
- Google reviews (owner's listing, read 2026-10-20): average 4,9 from 96 reviews (89×5★, 5×4★, 1×3★, 0×2★, 1×1★). The site quotes 4 five-star reviews verbatim, with names as first name plus first-surname initial (owner's rule): Jacielle S., Daniel P., Fernando S., Arthur F. A fifth 5★ review was left out because it includes a complaint, and quoting only its positive half would misrepresent it. Listing: https://www.google.com/maps?cid=16479059746991049617
- Facade photo (owner, 2026-10-20): the lit shop sign on the blue storefront, used darkened behind the hero (`assets/fachada.webp`, 1280×720).
- Gallery media (owner, 2026-10-20): 4 photos of cuts in the shop and 2 vertical videos (one of barbers at work in the salon, one of the drinks fridge and the shop sign), in `assets/galeria/` (photos and video stills as WebP; the videos re-encoded from the owner's 17 MB MP4s to 540×960 H.264 without audio, about 1.7 MB each, 2026-10-21).
- Barbers (owner, 2026-10-21): Wanderson, Danillo and Pedro, in that order on the site, each with a photo in `assets/equipe/`.
- Drinks (owner, 2026-10-22): the drink is free for every client who gets a cut. This backs the barbers headline "Decida quem vai pagar a sua bebida!" and the services line "Cortou com a gente, a bebida é por nossa conta." Which drinks are offered is still not supplied.
- Pezinho (owner, 2026-10-22): not offered on BarberCode; it is booked by WhatsApp only.
- Still not supplied, and not to be invented: the story of the shop.
- Site data lives in `CONFIG` at the top of `js/main.js`: booking link, WhatsApp, phone, Instagram, address (which also generates the map), and hours. Gallery photos and videos are listed directly in `index.html`. Prices and service names are edited in `index.html`. Missing data shows as dashed "a preencher" placeholders. Since 2026-10-22 the same real values are also written into `index.html`: links, address, phone, Instagram, barber names and photos, and a plain-text line of hours. The site therefore works before the script loads, and without it. When a fact changes, update it in `CONFIG` (or the data attributes) and in the HTML.

## Brand Commitments

- Name: Estação Barbabeer.
- Logo (supplied by the owner, 2026-10-19): the site uses `assets/logo-hd.webp` (plus `assets/logo-hd.png` for the favicon and share image), 1032×651 with a transparent background. It is made from the owner's second file, `assets/logo-hd-original.webp`, whose background removal had also erased the white interior; the white was filled back in. The first, smaller file is kept as `assets/logo-original.png`. It is a red seal with a navy ribbon reading "ESTAÇÃO BARBABEER", plus clippers, a mustache, scissors, stars and "BARBER SHOP". The site palette comes from it: navy #2a2061, red #b0130f, white.
- Binding reference (owner's request): https://barbeariagallo.com.br/. Follow its structure and energy (drenched brand-color fields, a giant display headline, a services band, contact, a big WhatsApp call to action), translated into the logo's colors. Do not copy its content or claims.
- Second binding reference (owner, 2026-10-20): https://www.barbeariaabanca.com.br/ for simplicity (single dark ground, colour as accent, thin lines) and its way of showing reviews (flat numbered cards with a quote mark). The owner kept only the split-flap hours board from the earlier decorative set; pole stripes, red fields, the ribbon plate and the scissors line were removed.
- No typeface or voice supplied. Do not take brand assets from the earlier project folder.

## Evidence on Hand

The logo, the Google reviews and the gallery photos and videos above. Do not invent testimonials, review scores, client counts, years in business, photos or prices. Use clearly marked placeholders until the owner provides real material.

## Product Principles

1. Real facts only: every price, schedule, address and review on the site comes from the owner.
2. Independent and maintainable: plain files the owner can host and edit without a vendor platform.
3. Fast on a phone: most visitors to a local business site arrive on mobile, so first load stays light.
