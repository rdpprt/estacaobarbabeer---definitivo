---
name: Estação Barbabeer
description: A night-time station hall. One blue-black ground in two depths split by hairlines, logo red only as a signal, Teko headlines over a wide Archivo, station-ticket services, stitched review cards, a pinned review scroll, and a split-flap hours board.
colors:
  navy: "#0a0f22"
  navy-deep: "#070b19"
  navy-ink: "#04060f"
  red: "#b0130f"
  red-hover: "#c41a15"
  star: "#ef4136"
  white: "#ffffff"
  on-navy-soft: "#c3cbe6"
  on-red-soft: "#ffd8d4"
  board-amber: "#f0b429"
  ticket-body: "#121b3d"
  flap-top: "#18203f"
  flap-bottom: "#131a35"
  flap-closed-top: "#5a1220"
  flap-closed-bottom: "#4f0f1b"
typography:
  display-hero:
    fontFamily: "Teko, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "0.01em"
  display-lead:
    fontFamily: "Teko, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 0.95
  display:
    fontFamily: "Teko, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
  rating:
    fontFamily: "Teko, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.85
  title:
    fontFamily: "Teko, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1
  price:
    fontFamily: "Teko, Arial Narrow, sans-serif"
    fontSize: "2.4rem"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "\"tnum\""
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "\"wdth\" 112"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "\"wdth\" 112"
  quote:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "\"wdth\" 112"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.14em"
    fontVariation: "\"wdth\" 112"
  nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 650
    letterSpacing: "0.08em"
    fontVariation: "\"wdth\" 125"
  button:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 750
    letterSpacing: "0.04em"
    fontVariation: "\"wdth\" 125"
  button-mobile:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 750
    letterSpacing: "0.03em"
    fontVariation: "\"wdth\" 100"
  flap:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 3vw, 1.7rem)"
    fontWeight: 750
    fontVariation: "\"wdth\" 70"
    fontFeature: "\"tnum\""
rounded:
  tag: "3px"
  tick: "4px"
  control: "6px"
  row: "8px"
  stitch-inner: "9px"
  frame: "10px"
  ticket: "12px"
  stitch-card: "11px"
  board: "14px"
  card: "16px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
  head-gap: "clamp(2rem, 4.5vw, 3rem)"
  wrap: "72rem"
  hero-wrap: "60rem"
  topbar: "4.25rem"
  touch: "44px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.red-hover}"
  button-ghost:
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "3.25rem"
  button-sm:
    padding: "0.5rem 1.1rem"
    height: "2.6rem"
  button-lg:
    padding: "1rem 2rem"
    height: "3.75rem"
  field-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "{spacing.section} 0"
  field-deep:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.white}"
    padding: "{spacing.section} 0"
  ticket-body:
    backgroundColor: "{colors.ticket-body}"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    rounded: "{rounded.ticket}"
    padding: "1.25rem 1.5rem"
  ticket-stub:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.price}"
    width: "9.5rem"
  ticket-stub-hover:
    backgroundColor: "{colors.red-hover}"
  review-card:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.white}"
    typography: "{typography.quote}"
    rounded: "{rounded.card}"
    padding: "1.75rem 1.75rem 1.5rem"
  board:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.board}"
    padding: "clamp(0.75rem, 2vw, 1.5rem)"
  flap:
    backgroundColor: "{colors.flap-top}"
    textColor: "{colors.white}"
    typography: "{typography.flap}"
    rounded: "{rounded.tick}"
    width: "clamp(1.35rem, 3.6vw, 2.15rem)"
    height: "clamp(1.9rem, 5vw, 2.9rem)"
  flap-closed:
    backgroundColor: "{colors.flap-closed-top}"
    textColor: "{colors.on-red-soft}"
  placeholder-tbd:
    rounded: "{rounded.tick}"
    padding: "0 0.35em"
  frame-placeholder:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.on-navy-soft}"
    rounded: "{rounded.frame}"
    padding: "1rem"
---

# Design System: Estação Barbabeer

## Overview

**Creative North Star: "The Night Station"**

The page is a station hall after dark. It has one blue-black ground in two depths, edged with hairlines, and the logo's red used only where a signal is needed. The structure and restraint follow the owner's current reference, barbeariaabanca.com.br: a single dark ground, colour only as an accent, thin lines, and a pinned scroll that reveals the reviews one by one. The name's "Estação" (station) survives in the departure board, where each opening-hours character sits on its own split-flap tile.

Density is low and the tone is calm and confident. Sections alternate between Night Navy and Navy Deep, and each one opens on a 1px white hairline at 7%. Headlines are set large in Teko 600, in uppercase, and each section headline carries a faint outlined copy of itself behind it. Body copy is a wide grotesk in muted tints of the ground. Red marks what to act on or notice: the booking buttons, the ticket stubs, the stars, the hero's lead line, and the board's "today" and "closed" states. Depth is quiet. Tickets, review cards, the board, and the map sit on long, soft drops.

Motion is light. The logo spins in and then floats, headlines rise with a slight zoom while their echoes breathe, blocks and tickets rise as they scroll into view, a used ticket tears its stub loose, the reviews hold still while their cards appear one by one, and the hours board flips. Only the logo float and the echo breathe loop forever; everything else plays and stops. All entrance motion is opt-in through JavaScript, and every animation stops under reduced motion.

The system is honest about missing data. Any fact the owner has not supplied yet is shown inside a dashed outline, and only placeholders are dashed.

**Key Characteristics:**
- One dark ground in two depths (navy and navy-deep) alternating by section, separated by 1px hairlines at 7% white.
- Red is a signal, never a field: buttons, ticket stubs, stars, the hero lead line, and board states.
- Teko 600 for display text, always uppercase. Archivo widened for body (wdth 112), nav, and buttons (wdth 125), and narrowed only for flaps (wdth 70).
- Section headlines carry an outlined echo of themselves, set up and to the right.
- Services as station tickets: a navy body and a red price stub, split by a dotted perforation with two semicircular bites.
- Review cards in navy-deep with an inner dotted stitch and a soft drop, revealed one by one as the pinned section scrolls.
- Split-flap tiles for times, which flip in once when the board scrolls into view.
- Dashed lines mean a placeholder, which is data.

## Colors

A blue-black ladder with white ink, soft tints for secondary text, and the logo's red held back for signals.

### Primary
- **Night Navy** (navy): The default ground. It fills the body and the hero, reviews, work, and closing sections, and it is the theme colour. White sits on it as ink.

**The Photo Atmosphere Rule.** Four sections carry an owner photo behind their content (see the table in Layout), always as photo (z 0), Navy Ink veil (z 1), content (z 2), with the image scaled slightly to hide the blurred edge. The hero and reviews share the strong treatment (`--photo-blur: 7px`, `--photo-veil` at 86%): their photos are pure atmosphere, and the blur also hides low-resolution sources. The barbers and closing photos are blurred less (5px and 4px, veils at 78% and 75%) because their subject is part of the message: the drinks behind "quem vai pagar a sua bebida" and the empty chairs behind "Sua cadeira está esperando."
- **Hero:** the owner's facade photo (`assets/fachada.webp`, object-fit cover, positioned 48% 45%), under the shared blur and veil (`.hero::before`), plus a gradient that fades the bottom 45% into Night Navy. The logo seal in the hero is the one logo the visitor reads.
- **Reviews:** the owner's Instagram photo of a client drinking a beer during his cut (`assets/avaliacoes-fundo.webp`, 1200² WebP from the 1080² Instagram source; lazy-loaded, empty alt), placed as `.reviews__bg` inside `.reviews__pin`: object-fit cover, positioned 50% 40%, under the shared blur and a flat shared veil (`.reviews__pin::before`); the section ends on straight edges like every other section, with no fades (the owner rejected them). Replace the photo with the owner's original file when it arrives. Because the photo lives inside the sticky pin, it stays still while the cards reveal.

**The One Logo Rule.** Only one logo is visible at a time. While the hero logo is below the topbar, the topbar brand is hidden (`.topbar.logo-hidden`, opacity 0 and visibility hidden, 0.35s); it fades in once the hero logo scrolls under the bar.
- **Barber Red** (red): Sampled from the logo. It fills every booking button, the ticket stubs, the floating WhatsApp button, the contact icon discs, and the "Hoje" tag, tints the "today" row (22%), and draws the nav underline, the mobile menu's bottom edge, and the selection highlight.

### Secondary
- **Signal Red** (star): The logo red lightened so small marks stay legible on navy. It colours the hero's lead line, the rating and review stars, and the ticket icons.
- **Pressed Red** (red-hover): The hover fill of the primary button and the ticket stub.

### Tertiary
- **Departure Amber** (board-amber): Station-board convention. It appears only on the hours board's column heads.

### Neutral
- **Navy Deep** (navy-deep): The second ground. It fills the services, hours, and contact sections, the review cards, the map panel, the empty and filled photo frames, the frosted topbar (at 92%), and the mobile menu.
- **Navy Ink** (navy-ink): The deepest step. It fills the departure board and the footer.
- **White** (white): Ink everywhere. At low alpha it draws the hairlines (7–8%), the dotted stitches and the ticket perforation, and the dashed frame borders.
- **Ticket Navy** (ticket-body): The body of each station ticket, a step lighter than Night Navy so the tickets read as objects on the Navy Deep ground.
- **Navy Mist** (on-navy-soft): Secondary text, such as ticket labels and meta, the lede, nav links at rest, labels, review dates, and notes.
- **Blush** (on-red-soft): The text on a closed flap.
- **Flap Navy** (flap-top / flap-bottom): A two-tone fill, split hard at the 50% line, for split-flap tiles. Closed tiles use the wine pair (flap-closed-top / flap-closed-bottom).

### Named Rules
**The One Ground Rule.** Every section is a navy depth, alternating Night Navy and Navy Deep, with a 1px hairline (rgb(255 255 255 / 0.07)) on its top edge. No section is filled with red or any light colour.

**The Red Is Signal Rule.** Red marks only what to act on or notice: buttons, ticket stubs, stars, ticket icons, the hero lead line, contact discs, and board states. Use Barber Red for fills and Signal Red for small marks and type on navy.

**The Amber Is Signage Rule.** Departure Amber belongs to the departure board alone, on its column heads. It is never a general accent.

## Typography

**Display Font:** Teko, weight 600 (with Arial Narrow, sans-serif), from Google Fonts
**Body Font:** Archivo, variable width and weight (with system-ui, sans-serif), from the same Google Fonts request

**Character:** Teko is a tall, condensed, squared-off sans, licensed under the SIL Open Font License, and the owner's choice of display face. Their first pick, Schluber, was dropped because it lacks Portuguese accents and the "$" sign and is licensed for personal use only. Archivo, widened on its width axis, stands in for the reference's extended grotesk. The result is a tall, compact headline over a wide, steady sans.

### Hierarchy
- **Display hero** (600, clamp(3rem, 9vw, 6rem), 0.95, 0.01em, uppercase, white): The giant second line of the hero h1.
- **Display lead** (600, clamp(1.5rem, 3.4vw, 2.6rem), uppercase, Signal Red): The first clause of the same h1 ("Próxima parada:"), sitting directly above the giant line. It is part of the headline sentence, not a separate label.
- **Display** (600, clamp(2.4rem, 6vw, 4.5rem), 1, uppercase, balanced wrap): Section headlines, each with its echo. The closing headline widens to clamp(2.4rem, 7vw, 5.5rem) at 14ch.
- **Rating** (600, clamp(3.25rem, 8vw, 4.75rem), 0.85): The Google average in the reviews head.
- **Title** (600, clamp(1.9rem, 3vw, 2.5rem), 1, uppercase): Ticket service names. The same face sets review author names (1.35rem, 0.02em, white), and board day names (clamp(1rem, 2.6vw, 1.45rem)).
- **Price** (600, 2.4rem, 1, tabular; 2rem on phones): Ticket stub prices.
- **Body** (400, 1.0625rem, 1.6, wdth 112): Running copy. The hero lede uses clamp(1.05rem, 1.6vw, 1.25rem) at 36rem max width. Review text runs at 1.1rem / 1.55, as written, with no added quote marks.
- **Label** (650–750, 0.72–0.85rem, 0.06–0.16em tracking, uppercase, wdth 112): Board column heads, fact labels, the ticket number ("BILHETE Nº 0X", 0.75rem, 700, 0.14em) and ticket meta ("DURAÇÃO 30 MIN", 0.78rem, 650, 0.12em, value in white 750), and the stub action ("AGENDAR →", 0.72rem, 750, 0.14em).
- **Button / Nav** (750 / 650, 1rem / 0.9rem, 0.04em / 0.08em, uppercase, wdth 125): Controls. At 760px and below, buttons drop to wdth 100 and 0.03em so labels stay on one line, and the large button drops to 1rem.
- **Flap** (750, clamp(1.05rem, 3vw, 1.7rem), wdth 70, tabular figures): Hours characters.

### Named Rules
**The Teko Uppercase Rule.** Every display use is Teko at weight 600: headlines, the hero lead line, ticket names, prices, the rating, review author names, and day names. Words in Teko are set uppercase. Teko is never used for running text; that is Archivo's job.

**The Wide Text Rule.** Archivo runs wide: wdth 112 for text, 125 for nav and buttons. Only the flaps go narrow (wdth 70), and only phone buttons step back to 100.

**The Tabular Time Rule.** Prices and times use tabular figures so columns hold still.

## Layout

The page is a vertical stack of full-width sections on the dark ground. Each section pads its block by the section rhythm (clamp(4.5rem, 10vw, 8rem)) and opens on a 1px hairline. Every section head sits one `--head-gap` (clamp(2rem, 4.5vw, 3rem): 32px on phones, 48px on desktop) above its content: the tickets, reviews, board, barbers, and gallery. The phone review track subtracts its own 0.5rem top padding so the visible gap matches. Content sits in a centred wrap of up to 72rem, with a fluid gutter of clamp(1rem, 4vw, 2.5rem) on each side, fixed at 1.5rem at 760px and below so phone content keeps clear of the screen edge (owner, 2026-10-20). The order is hero (navy), services (deep), reviews (navy), hours (deep), barbers (deep), work (navy), visit (deep), closing (navy), and footer (navy-ink). Four sections carry an owner photo behind them, each with its own blur and dark veil:

| Section | Photo | Blur | Veil (Navy Ink) | Other |
| --- | --- | --- | --- | --- |
| Hero | Facade (`fachada.webp`) | 7px | 86% | |
| Reviews | `avaliacoes-fundo.webp` | 7px | 86% | |
| Barbers | Drinks fridge, horizontal shelf shot (`geladeira-fundo.webp`), tying in with "Decida quem vai pagar a sua bebida!" | 5px | 78% | Saturate 0.5 |
| Closing | Empty chairs in the salon (`cadeiras-fundo.webp`), tying in with "Sua cadeira está esperando." | 4px | 75% | |

The barbers and closing photos are blurred less than the hero and reviews so their subject stays recognisable (owner, 2026-10-21).

The hero is a single centred column, at most 60rem wide and up to min(100svh, 60rem) tall. It stacks the logo (min(22rem, 70vw)), the two-line h1 (red lead line over the giant white line), the lede (at most 36rem), the centred actions, a one-line note, and a proof line. The note (Navy Mist, 0.9rem; 0.85rem on phones) reads "Veja os horários livres e confirme pelo site, de terça a sábado." It says what the online (BarberCode) button does and which days the shop opens. The proof line puts the strongest real facts in the first viewport (critique 2026-10-22): "★ 4,9 · 96 avaliações no Google" (Signal Red star, value in white 750, links to #avaliacoes) and "Corte R$ 40" (links to #servicos). It is Navy Mist at 0.95rem, with the two links split by a 4px dot, and each link is 44px tall. At 761px and up the two links sit in one row split by the dot. From 480px down they still share one row: " no Google" is clipped from view (kept for screen readers) and the line ends at about 732px on a 390×844 phone, above the fold. Between 481 and 760px they stack. Below 360px they wrap and the dot hides. It rises in last (0.75s). Keep both facts in sync with the reviews and ticket data.

The services section has a centred head: the headline, then the house perk "Cortou com a gente, a bebida é por nossa conta." (white, 700, 1.25rem; the drink is free for anyone who gets a cut, owner, 2026-10-22), then the Navy Mist intro over a two-column grid of tickets (gap clamp(1rem, 2vw, 1.5rem), one --head-gap above). There is no separate CTA under the grid: every ticket already opens WhatsApp with its service, and the topbar and floating buttons stay available (removed in distill, 2026-10-22, owner's choice). The reviews section puts its head (headline and rating) in the middle with the reviews around it: at 1100px and wider, `.reviews__stage` is a 3-column grid (1fr, minmax(15rem, 19rem), 1fr) with areas "a head b" / "c head d". Reviews 1 and 3 sit on the left, 2 and 4 on the right, and the rating stacks vertically under the headline. The list keeps `role="list"` while it uses `display: contents`. Below 1100px the head sits on top of a two-column grid (one column at ≤760px). A centred row with a red button and a white link follows. The section itself has no block padding; the section rhythm lives on `.reviews__pin`, which also holds the background photo. When it pins (see Pinned Review Scroll), the section becomes 185vh tall, its content is centred in a sticky full-viewport pin with 1.25rem of block padding, and the actions get a 2rem top margin. The visit section runs 1fr / 1.1fr. The work gallery is a 3-column grid of six portrait tiles (aspect 2 / 3, object-fit cover) in the order video, photo, photo / photo, video, photo; 2 columns at ≤760px.

The topbar is fixed at 4.25rem (3.75rem on phones). It hides on scroll down and returns on scroll up, and anchor offsets use scroll-padding. Every tap target (brand, nav links, links, footer links, contact values) is at least 44px tall without changing how it looks.

**Breakpoints:**
- **≤1280px:** The nav collapses into a clip-path drop-down panel behind a menu toggle. The booking CTA stays visible in the bar. The logo, five links, and the CTA need about 1240px in one row; below that the CTA would run off screen (raised from 1100px when "Barbeiros" was added, 2026-10-21). The topbar logo is `flex: none` so the row can never squeeze it.
- **≤960px:** The visit grid stacks.
- **≤760px:** The topbar CTA hides. The floating round WhatsApp button shows past the first 300px and hides near the closing section. Hero buttons go full width, button text narrows to wdth 100, and the large button drops to 1rem with 1.25rem side padding. Review cards become a swipe carousel with dots, and the section does not pin. Tickets stack to one column, drop their minimum height from 9rem to 7.25rem (the content needs about 6.5rem), the stub narrows to 7rem, the body padding tightens to 1.1rem 1.15rem, and the price drops to 2rem. The gallery goes to 2 columns. Flaps shrink to 1.05 × 1.6rem.

## Elevation & Depth

Depth comes from the two ground depths, hairlines, and a few long, soft drop shadows. Nothing uses a hard offset shadow or a glow, and surfaces do not stack or overlap.

### Shadow Vocabulary
- **Board drop** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.6)`, 0.7 on the departure board): The departure board and the map panel.
- **Card drop** (`box-shadow: 0 24px 50px -28px rgb(0 0 0 / 0.75)`): Review cards.
- **Ticket drop** (`filter: drop-shadow(0 16px 22px rgb(0 0 0 / 0.45))` on the ticket wrapper): A filter rather than a box-shadow, so the shadow follows the masked bites.
- **Button lift** (`box-shadow: 0 10px 24px -12px rgb(0 0 0 / 0.6)`, deepening on hover to `0 16px 30px -14px rgb(0 0 0 / 0.7)`): Red buttons.
- **Flap tick** (`box-shadow: 0 2px 3px rgb(0 0 0 / 0.4)`): Each split-flap tile.
- **Logo drop** (`filter: drop-shadow(0 20px 34px rgb(0 0 0 / 0.5))`): The hero logo only.

### Named Rules
**The Tone Before Shadow Rule.** Separate surfaces by a ground step or a hairline first. Shadows lift only the tickets, the review cards, the board, the map, and the red buttons.

## Shapes

Thin lines and soft corners, with one circle motif.

- **Hairlines.** 1px white lines at low alpha: 7% on section tops and 8% under the topbar.
- **Inset dotted stitch.** A 2px dotted white line inside rounded panels: 0.55rem in, at 18%, inside review cards (11px radius in 16px), and 0.6rem in, at 28%, inside the empty map (9px in 14px).
- **Ticket.** Two masked pieces that meet at the perforation: a body rounded 12px on its left corners, with half-bites (13px radius) cut into its right edge, and a stub rounded 12px on its right corners, with matching half-bites on its left edge. Together they read as one ticket with two semicircular bites. The perforation is a 3px dotted line at 55% white on the stub's left edge, stopping short of the bites.

Corners step by role: pill (999px) for buttons, 16px for review cards, 12px for tickets, 14px for the board and the map, 10px for photo frames, 8px for the "today" row highlight, 6px for small controls, 4px for flaps, placeholders, and the focus ring, and 3px for the "Hoje" tag. Contact icon discs are full circles.

**The Night Map Rule.** The Google map embed cannot be styled, so it runs in night mode through a CSS filter on the iframe: `invert(0.9) hue-rotate(180deg) saturate(0.85) brightness(0.95) contrast(0.95)`. The light map turns dark, and the hue rotation brings the red pin and coloured icons back near their own colours. A page-blue tint was tried and dropped by the owner, because it muted the red pin.

**The Dashed Is Placeholder Rule.** Dashed borders are reserved for missing owner data: the `.tbd` inline outline and the empty photo frame. When data arrives, the dash is removed (the script drops `.tbd`; a filled frame loses its border). Dotted lines are decoration only: the inset stitches and the ticket perforation.

## Components

### Buttons
Bold, uppercase, wide, and pill-shaped. They lift on hover.
- **Shape:** Fully rounded pill (999px), with a 2px border slot. Default height is 3.25rem (2.6rem small, 3.75rem large).
- **Primary (red):** Every call to action on the page. Barber Red fill with white text and the button-lift shadow. Hover moves to Pressed Red, rises 2px, and deepens the shadow. Active snaps back in 0.08s.
- **Ghost:** Transparent, with a 55% white border and white text. Used for the hero's secondary action. Hover makes the border solid white, adds an 8% white wash, and slides the arrow icon 4px right.
- **Icons:** Inline SVG at stroke 1.8, 1.3em, leading (WhatsApp, calendar, star) or trailing (arrow).
- **Focus:** 3px solid white outline, offset 3px.

### Station Ticket (signature)
Each service is a station ticket ("bilhete"), approved by the owner as a shaped redesign of the services section.
- **Wrapper:** `li.ticket` carries the ticket drop as a filter and a 12px radius. It lifts 4px on hover (0.45s), and on keyboard focus-within it gets a 3px white outline, offset 4px.
- **Card:** a grid of 1fr and the stub width (9.5rem, 7rem on phones), at least 9rem tall. The card itself neither masks nor clips. The body (Ticket Navy, radius 12px 0 0 12px) and the stub (radius 0 12px 12px 0) are masked separately, each with half-bites (13px) at the shared perforation line, so the stub can come loose.
- **Body:** padding 1.25rem 1.5rem. From top to bottom:
  - the ticket's serial line, "BILHETE Nº 0X" in Navy Mist, led by a Signal Red line icon (1.15rem);
  - the service name in Teko 600 uppercase at clamp(1.9rem, 3vw, 2.5rem);
  - the meta line, "DURAÇÃO **30 MIN**", with the value in white.
  The durations were confirmed by the owner: 30 min for Corte, Barba, and Corte infantil, and 60 min for Corte + barba.
- **Stub:** a Barber Red fill, centred, turning Pressed Red on hover (0.3s). It holds the price in Teko 600 (2.4rem, tabular) over "AGENDAR →". The dotted perforation runs down its left edge. It pivots from its bottom-left corner (`transform-origin: 0 100%`), and its transform transitions over 0.7s with a springy cubic-bezier(0.34, 1.56, 0.64, 1).
- **Used ticket ("bilhete usado"):** tapping a ticket link adds `.is-used`. The ticket lifts 6px, the body gets an inset 2px Signal Red ring, the stub tears loose (`translate(10px, 4px) rotate(7deg)`), and "AGENDAR →" becomes "BILHETE USADO". The label deliberately avoids "agendado", because opening WhatsApp is not a confirmed booking. The state lasts until the page reloads.
- **Link:** the service name is a stretched link (`::after` inset 0), so the whole ticket opens WhatsApp with the service pre-filled.
- **Grid:** two columns (one at ≤760px). With an odd count, the last ticket is centred on its own row at one column wide. Tickets rise in with the 110ms stagger. There are five: Corte, Barba, Corte + barba, Corte infantil, and Pezinho (clippers icon, 10 min, R$ 20, owner, 2026-10-21). Pezinho is not on BarberCode, so its body carries a third line, "Só pelo WhatsApp" (`.ticket__only`, Navy Mist, 0.8rem; owner kept this wording over "Fora do agendamento online", 2026-10-22).

### Review Card and Rating
The reviews section ("O que dizem os clientes.") sits on Night Navy between services and hours. At the top is the rating: the Google average in large Teko, five stars filled to `--fill` (98% for 4,9) in Signal Red over a 20% white base, and the review count in Navy Mist.

The cards are Navy Deep, with a 16px radius, the card drop at rest (`0 24px 50px -28px rgb(0 0 0 / 0.75)`), and an inner dotted stitch (inset 0.55rem, 2px at 18% white, 11px radius). They sit in a 2-column grid (4 columns when pinned at ≥1100px, a swipe carousel at ≤760px), and each one is a column (gap 1rem):
- **Stars:** five Signal Red stars at 1.2rem.
- **Text:** the review exactly as written on Google, at 1.1rem / 1.55, with no added quote marks.
- **Author:** pushed to the bottom on desktop, so a row of cards aligns. On phones it sits right under the text (1rem gap), the name stacks over "há X · Google" so the date never wraps, and each card is only as tall as its own text (the track aligns to start), with no hollow cards. The name, as first name plus surname initial, is in Teko 600 uppercase at 1.35rem in white, followed by "há X · Google" in Navy Mist at 0.95rem.

Two actions close the section: a red "Avaliar no Google" button and a white "Ver todas as N avaliações" link, both opening Google Maps in a new tab. The data is static (copied 20/10/2026) and updated by hand in index.html.

### Pinned Review Scroll (signature)
The mechanic is copied from barbeariaabanca.com.br. The section's content is wrapped in `.reviews__pin`, and the script decides on load, on resize, and once fonts are ready whether it fits.
- **Pinned:** When the viewport is wider than 760px and the content's height + 40px fits in the viewport, the section gets `.is-pinned`. It becomes 185vh tall with no block padding (down from 250vh, about 680px of extra scroll at 800px tall instead of 1,200, layout 2026-10-22), and the pin is `position: sticky; top: 0`, at least 100vh tall, with the content centred and 1.25rem of block padding. Scroll progress p (0→1 across the section height minus the viewport) drives each card i with t = p × (n + 0.6) − i. The cards appear one by one, and all are fully visible before the section unpins.
- **Phone carousel (≤760px):** The section never locks, so the page always scrolls normally for people who are not used to scroll effects (owner, 2026-10-20). The cards become a swipe carousel, one at a time: a full-bleed horizontal scroll-snap track moved by swiping (cards 72vw wide, 0.75rem apart, 14vw side padding, snapped to the centre one at a time with `scroll-snap-stop: always`; scrollbar hidden). The centred card is sharp. The others are scrubbed by their distance d (0–1, in card steps) from the centre: opacity 1 − 0.4d, scale 1 − 0.06d and blur 3d px. The blurred neighbours peek in at both edges as the swipe cue, and the whole track rises in as one block when it scrolls into view. There are no arrows (owner, 2026-10-20). Under it is one dot per card (44px tap area, current dot in star red, scaled 1.35). It advances by itself every 5s while at least 60% of it is on screen, wraps from last to first, and stops auto-advancing for good once the visitor touches the track or a dot. There is no auto-advance under reduced motion.
- **Not pinned:** On phones and on screens too short for the content, each card is scrubbed by its own position, with t = (0.95 × viewport − card top) / (0.3 × viewport).
- **Easing:** In both modes, t is clamped to 0–1 and eased with a cubic ease-out (1 − (1 − t)³). It maps to opacity 0→1, translateY 34px→0, and scale 0.97→1, and it follows the scroll in both directions.
- **Gate:** Cards start hidden only under `.js`. They are not part of the `data-rise` stagger. Under reduced motion the script does not run and the cards are fully visible.

### Barber Crew (signature)
Three barber photos side by side that grow when tapped (owner, 2026-10-21), placed before the gallery under "Escolha seu barbeiro." / "Decida quem vai pagar a sua bebida!" (owner, 2026-10-21)

- **Layout:** A flex row, clamp(20rem, 62vh, 36rem) tall (the 20rem floor fits a phone held sideways, 844×390). Each item is a 16px-radius tile with the card drop and its photo covering the tile.
- **Open item:** It grows to flex-grow 3.2 (0.7s ease-out) while the others stay at 1. Its photo goes to full colour at scale 1.03. Its bottom panel fades and slides in after 0.3s: "Barbeiro nº 0X", the name in Teko at clamp(2.6rem, 5vw, 4rem), and a red WhatsApp button.
- **Closed items:** Desaturated (grayscale 0.7, brightness 0.6), easing back on hover. At the bottom they show only the name in Teko (clamp(1.3rem, 2.2vw, 1.8rem); 1.7rem on phones), so the visitor knows who is who without tapping (no number above it, owner, 2026-10-21). Before a name is set, the number shows alone in large Teko.
- **Gradient:** A Navy Ink gradient over the bottom 55% keeps text legible.
- **Booking:** The button reads "Agendar com {nome}"; at 480px and below the " com {nome}" part is hidden, leaving "Agendar", because the name is already set large right above and the full label wrapped to two lines (81px). Screen readers still get the full label. ("Agendar horário" until a name is set). It opens WhatsApp with "Olá! Quero agendar um horário com {nome} na Estação Barbabeer."
- **Accessibility:** A full-tile button toggles each item, with `aria-expanded` and `aria-controls`.
- **Data:** `data-nome` and `data-foto` on each `.crew__item` in `index.html`. Until filled, the tiles show the hatch placeholder and the name is a dashed `.tbd` chip.
- **≤760px:** The tiles stack as 5.5rem strips, with the name on the left and the photo centred at 30% from the top. The open one grows to 27rem (flex-basis, 0.7s), and the button goes full width.

### Title Echo (signature)
Each section h2 repeats its own text in a `data-echo` attribute. A pseudo-element draws that text behind the headline as a hollow outline (transparent fill, 1.5px stroke at 32% white). It is offset 0.09em right and 0.11em up (0.13em and 0.15em at 760px and below, about 5px on a phone headline, so it reads as an intentional shadow and not a misregistered print), at z-index -1 inside an isolated stacking context. The echo breathes continuously (scale 1.045 and back, 5s, infinite). Its content is given empty alt text (`content: attr(data-echo) / ""`), so assistive tech does not read it twice.

### Split-Flap Hours Board (signature)
**Status pill:** it sits beside the board's headline (it wraps under it on phones) and is computed from CONFIG.horarios with the visitor's clock.
- Open: "Aberto agora · fecha às 20:00", in white with an amber dot (#f0b429, with a 4px soft ring).
- Closed: "Fechado · abre hoje / amanhã / {dia} às HH:MM", in Navy Mist with a Signal Red dot.
- Style: 999px radius, 1px border at 15% white, 0.85rem uppercase, 750 weight; 0.74rem on phones.
- It stays hidden without the script.
A Navy Ink board (14px radius, deepest drop shadow) of rows with three columns: day, opens, closes. Column heads are amber labels. Each time character is its own flap tile, a two-tone navy split hard at 50% with a 1px dark hinge line. Colons are bare separators. A closed day is one wide wine flap reading "FECHADO", spanning both time columns. Today's row takes a 22% red wash and a small red "Hoje" tag.
- **Motion:** When the board scrolls into view (20% visible), it rises in, and every flap flips down once from -90° with a slight overshoot (0.6s, ease-out-expo), starting bright. The flaps cascade at 70ms per row plus 35ms per tile.

### Contact
Facts sit in a list, each with a 3rem red disc holding a white line icon, an uppercase Navy Mist label, and the value at 1.15rem / 600. The order is Endereço, Horário, Telefone e WhatsApp, and Instagram (adapt, 2026-10-22).

- **Endereço:** under the address sits a "Como chegar" pill. It is a 44px ghost pill with a 1.5px border at 45% white and an arrow, and it opens Google Maps directions (`/maps/dir/?api=1&destination=`) in a new tab.
- **Horário:** it repeats the board as two lines ("Terça a sexta, 10:00 às 20:00" / "Sábado, 09:00 às 18:00"), with each time range kept on one line (`.nowrap`). Someone who lands on Contato never has to scroll back to the board.
- **Map:** the iframe is written into the HTML (lazy), so it works without the script. The map panel is Navy Deep (14px radius, board drop). It shows the night-mode embed or, before an address exists, a dotted inset with a red pin icon and a note.

### Placeholders
- **Inline (tbd):** A 1.5px dashed outline in the current colour, 4px radius, 0.35em side padding, at 70% opacity.
- **Photo frame:** A portrait tile (aspect 2 / 3, 10px radius, Navy Deep behind) filled edge to edge by the owner's photo (WebP, lazy-loaded) or video. Videos are muted, looped and inline, with `preload="none"` and a still-frame poster; an IntersectionObserver (35% visible) plays them only while on screen and pauses them off screen, so their download starts only when the gallery is reached. Under reduced motion they never autoplay and show native controls. Every tile is a link to the Instagram profile (new tab, owner, 2026-10-20), labelled "Ver no Instagram: …" with the media description. A 2.1rem round Instagram badge sits in the bottom-right corner (Navy Ink at 60%, red on hover), and on hover the media zooms to 1.04 over 0.6s. An empty frame (no media) keeps the placeholder look: a faint 45° hatch and a 2px dashed white border at 30%.

### Booking Copy (two channels)
The owner routes the hero button to BarberCode and every other booking action to WhatsApp. Each channel says what it does, once, where the visitor decides (clarify, 2026-10-22):
- **Online (BarberCode):** the hero note reads "Veja os horários livres e confirme pelo site, de terça a sábado." (it replaced "na hora", which could read as walk-in), and the closing's secondary link reads "ou escolha o horário online".
- **WhatsApp:** the services intro reads "Escolha um serviço: o WhatsApp abre com a mensagem pronta." ("Escolha" instead of "Toque" so the verb fits mouse and touch), and the closing reads "Mande uma mensagem no WhatsApp e combine seu horário. Atendemos de terça a sábado."
- **Closed days:** "terça a sábado" is derived from CONFIG.horarios, so change it there and in this copy together.

### Navigation
Links, in page order: Serviços, Horários, Barbeiros, Nosso trabalho, Contato (the footer repeats them). A fixed, frosted Navy Deep bar (92% opacity, saturate 1.4, blur 10px) with a hairline bottom edge. Links are uppercase, wide (wdth 125), and set in Navy Mist. On hover they turn white and a 2px red underline wipes in from the left. At 1280px and below, links stack full width in a Navy Deep panel with a 4px red bottom edge, revealed by a clip-path wipe. Escape and link taps close it.

### Floating WhatsApp
A 3.75rem red circle with a 3px white ring, fixed at the bottom right: 1rem from the corner on phones, 1.5rem from 761px. On phones it hides near the top (first 300px). On the computer (critique, 2026-10-22) it shows only once the end of the services section is on screen, and only while the topbar, which carries the same booking button, is hidden. Hidden that way, it fills the stretch between the tickets and the barbers that had no booking action. On every size it hides once the closing section is on screen, and whenever it would sit on a small tap target or a section's lead text: any link or button in the page, a ticket's price stub, a section headline, the services or barbers intro, or the board status, within 8px of its resting area (adapt, 2026-10-22). Large tap areas (crew tiles, gallery tiles, the map) do not count, so it stays available over photos. The first time it shows, it pulses four times (scale 1.08, 2.2s) and sends out a red ripple ring each time (to 1.9× scale while fading). After that it stays still (`.did-pulse`), so stepping aside and returning does not flash. While hidden it is `inert`, so keyboard focus and screen readers skip it.

### Motion
The motion grammar is the reference site's, adopted by the owner's request. The shared easing is cubic-bezier(0.16, 1, 0.3, 1).
- **Gate:** An inline script in the head adds `class="js"` to `<html>`, and only then are entrance animations armed. Without IntersectionObserver or under reduced motion, the script removes the class and all content shows at rest.
- **Hero on load:** The logo spins in (scale 0.8 and -25° to rest, 1.1s), then floats continuously (8px, 6s, infinite). The h1 enters with title-in (40px down and 1.08 scale to rest, 1s, 0.15s delay). The lede rises at 0.45s and the actions at 0.6s.
- **On scroll:** An IntersectionObserver (20% visible, bottom margin -8%) tags blocks with `data-rise` and marks each one `is-in` once. Blocks rise 36px and fade in over 0.9s. The rise uses `animation-fill-mode: backwards` and `.is-in` sets opacity 1, so the animation releases its transform once it plays, and hover lifts and the used-ticket lift still work. Section headlines use title-in instead. Photo frames reveal with a left-to-right clip-path wipe (1.1s). Tickets and frames stagger by 110ms each, and contact icons pop in at 0, 120, and 240ms.
- **Pinned reviews:** The review cards are driven by scroll position, not by time (see Pinned Review Scroll).
- **Loops:** Two signatures loop forever: the hero logo float (6s) and the title-echo breathe (5s). The floating button pulses and ripples four times (2.2s ×4). Nothing else repeats.
- **Interaction:** Buttons lift (0.35s), tickets lift 4px and their stub darkens (0.45s / 0.3s), a used ticket lifts 6px and its stub tears loose with a springy 0.7s overshoot, the topbar hides (0.45s), and the menu panel wipes open (0.45s).
- **Reduced motion:** Under `prefers-reduced-motion: reduce`, every animation and pseudo-element animation is set to none, transitions collapse to 0.01ms, smooth scrolling is off, and `data-rise` blocks and review cards are forced visible.

## Asset Budget

Most visitors arrive on a phone, so every shipped asset is sized for how it is shown (2026-10-21):
- **Blurred backgrounds** (facade, fridge, chairs) are 1280px wide WebP at quality 68–72, about 70–80 KB each, and the reviews photo is 1200²; the blur hides the difference. Only the hero photo loads eagerly (`fetchpriority="high"`); the rest are lazy.
- **Logo:** `logo-hd.webp` at 720×454 (shown at up to 22rem), 46 KB. The tab icon is a 64px `favicon.png`, plus a 180px `apple-touch-icon.png` on Night Navy. The 1032px `logo-hd.png` stays only as the source for the share image.
- **Gallery videos:** 540×960 H.264 (CRF 27, capped at 1.5 Mbps), no audio track, `+faststart`, about 1.7 MB each (from 17 MB). They keep `preload="none"` and play only while on screen. Posters are 540×960 WebP.
- **Photos:** gallery and barber portraits are WebP at up to 900px wide, 40–80 KB.

The first view (HTML, CSS, JS, two font files, facade and logo) is about 300 KB. The whole page with everything loaded is about 1 MB, plus the videos only if the visitor reaches the gallery.

## Resilience

The page works without its script (harden, 2026-10-22).

**What the HTML carries itself:**
- Every booking link already holds its real `wa.me` (with the per-service or per-barber message) or BarberCode URL.
- The Instagram links, address, phone (`tel:`), barber names and photos are written in.
- The hours board holds a plain-text line, `.board__fallback` in Navy Mist, which the script removes before it builds the flaps.

**Safety net:** the inline `js` gate in the head removes itself after 4s unless `main.js` has set `window.__siteReady`. So a script that never arrives cannot leave the reveal-gated content (such as review cards) hidden.

**Carousel autoplay:** it stops for good on pointer down and on any focus inside the reviews section (WCAG 2.2.2).

**Long names:** barber names, open or closed, clip with an ellipsis inside their tile instead of overflowing.

## Do's and Don'ts

### Do:
- **Do** alternate sections between Night Navy and Navy Deep, and open each one on the 1px hairline at 7% white.
- **Do** keep any background photo behind a Navy Ink veil and the content layer, blurred enough that the section text and cards always win (see The Photo Atmosphere Rule).
- **Do** keep red to signals: buttons, ticket stubs, stars, contact discs, and board states. Use Signal Red for small marks and type on navy.
- **Do** use the red pill for every booking action, and the ghost pill only for a secondary action beside it.
- **Do** set every display use in Teko 600, with words in uppercase.
- **Do** echo each section h2 with `data-echo`, keeping the echo text identical and hidden from assistive tech.
- **Do** pin the reviews only when the whole section fits the viewport, and make sure every card is fully shown before the section unpins.
- **Do** mark any fact the owner has not supplied with the dashed placeholder, and remove the dash when the real value lands.
- **Do** present services as station tickets: the name and duration on the navy body, the price and booking cue on the red stub, and the whole ticket as one link. A used ticket says "BILHETE USADO", never "agendado".
- **Do** set times and prices in tabular figures. Times go on split-flap tiles.
- **Do** keep tap targets at least 44px tall.
- **Do** keep entrance motion behind the `js` gate, loop only the logo float and the echo breathe, and stop all animation under reduced motion.

### Don't:
- **Don't** fill a section with red or any light colour.
- **Don't** use dashed borders for anything except missing data.
- **Don't** use Departure Amber outside the hours board.
- **Don't** set Teko in lowercase, at another weight, or for running text, and don't add a faux-bold stroke.
- **Don't** put small labels or kickers above section headlines. The red lead line exists only as the first clause of the hero h1, and the ticket number exists only as the ticket's own serial line.
- **Don't** add hard offset shadows or glows. Depth is a ground step, a hairline, or a long, soft drop; the only rings are the floating button's white ring and the used ticket's inset Signal Red ring.
