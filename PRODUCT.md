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
- Services and prices (owner, 2026-10-19): Corte R$ 40, Barba R$ 40, Corte + barba R$ 70, Corte infantil R$ 40.
- Address (owner, 2026-10-19): Estrada dos Menezes, 850 - Loja 114, Mutondo, São Gonçalo - RJ.
- Phone and WhatsApp (owner, 2026-10-19): (21) 96704-7027. Instagram: @estacaobarbabeer.
- Booking (owner, 2026-10-19): BarberCode on the hero button, WhatsApp everywhere else. The BarberCode page lists Barba, Corte e Barba, Corte de Cabelo Masculino and Corte de Cabelo Infantil.
- Still not supplied, and not to be invented: photos, ratings, the story of the shop.
- Site data lives in `CONFIG` at the top of `js/main.js`: booking link, WhatsApp, phone, Instagram, address (which also generates the map), hours, and photos. Prices and service names are edited in `index.html`. Missing data shows as dashed "a preencher" placeholders.

## Brand Commitments

- Name: Estação Barbabeer.
- Logo (supplied by the owner, 2026-10-19): the site uses `assets/logo-hd.webp` (plus `assets/logo-hd.png` for the favicon and share image), 1032×651 with a transparent background. It is made from the owner's second file, `assets/logo-hd-original.webp`, whose background removal had also erased the white interior; the white was filled back in. The first, smaller file is kept as `assets/logo-original.png`. It is a red seal with a navy ribbon reading "ESTAÇÃO BARBABEER", plus clippers, a mustache, scissors, stars and "BARBER SHOP". The site palette comes from it: navy #2a2061, red #b0130f, white.
- Binding reference (owner's request): https://barbeariagallo.com.br/. Follow its structure and energy (drenched brand-color fields, a giant display headline, a services band, contact, a big WhatsApp call to action), translated into the logo's colors. Do not copy its content or claims.
- No typeface or voice supplied. Do not take brand assets from the earlier project folder.

## Evidence on Hand

Only the logo has been supplied. Do not invent testimonials, review scores, client counts, years in business, photos or prices. Use clearly marked placeholders until the owner provides real material.

## Product Principles

1. Real facts only: every price, schedule, address and review on the site comes from the owner.
2. Independent and maintainable: plain files the owner can host and edit without a vendor platform.
3. Fast on a phone: most visitors to a local business site arrive on mobile, so first load stays light.
