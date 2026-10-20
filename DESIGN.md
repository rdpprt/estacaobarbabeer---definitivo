---
name: Estação Barbabeer
description: A barbershop sign blown up to page scale. Blue-black and logo red in alternating curved fields, a vintage poster face, ribbon plates, dotted stitching, badge cards, pole stripes, a split-flap hours board, and the reference site's moving type.
colors:
  navy: "#0a0f22"
  navy-deep: "#070b19"
  navy-ink: "#04060f"
  logo-navy: "#2a2061"
  red: "#b0130f"
  red-deep: "#8a0e0b"
  red-hover: "#c41a15"
  white: "#ffffff"
  paper: "#f3f2f8"
  on-navy-soft: "#c3cbe6"
  on-red-soft: "#ffd8d4"
  board-amber: "#f0b429"
  flap-top: "#18203f"
  flap-bottom: "#131a35"
  flap-closed-top: "#5a1220"
  flap-closed-bottom: "#4f0f1b"
typography:
  display-hero:
    fontFamily: "Kingthings Petrock, Georgia, serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  display:
    fontFamily: "Kingthings Petrock, Georgia, serif"
    fontSize: "clamp(2.4rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  plate-hero:
    fontFamily: "Kingthings Petrock, Georgia, serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Kingthings Petrock, Georgia, serif"
    fontSize: "clamp(1.45rem, 2.4vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.05
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
  stitch-card: "11px"
  board: "14px"
  card: "16px"
  curve: "clamp(2.5rem, 7vw, 6rem)"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
  curve: "clamp(2.5rem, 7vw, 6rem)"
  wrap: "72rem"
  hero-wrap: "60rem"
  topbar: "4.25rem"
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
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.red}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.5rem"
    height: "3.25rem"
  button-light-hover:
    backgroundColor: "{colors.paper}"
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
  plate:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    padding: "0.28em 1.25em 0.22em"
  field-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "{spacing.section} 0"
  field-navy-deep:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.white}"
    padding: "{spacing.section} 0"
  field-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    padding: "{spacing.section} 0"
  field-red-curved:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.curve}"
  service-card:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "3.4rem 1.25rem 1.75rem"
  service-badge:
    backgroundColor: "{colors.white}"
    textColor: "{colors.red}"
    rounded: "{rounded.pill}"
    size: "4.75rem"
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
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.on-red-soft}"
    rounded: "{rounded.frame}"
    padding: "1rem"
---

# Design System: Estação Barbabeer

## Overview

**Creative North Star: "The Station Sign"**

The page is the shop's sign, enlarged until it becomes the layout. Its red, ribbon, and barber pole come from the owner's logo. Its type, centred hero, badge cards, and motion follow the reference site (barbeariagallo.com.br). A blue-black ground and the logo's red fill whole bands of the page from edge to edge, alternating dark and red. The red bands rise over the band above with one large rounded corner. The ribbon becomes a red plate with notched ends. Dotted stitching edges the plates and cards and draws a cut line under the hero headline. The barber pole becomes a striped divider. The "Estação" (station) in the name becomes a departure board for the opening hours, where each character sits on its own split-flap tile.

Density is low and the page is loud. Each section is one solid colour field. Headlines are set at poster size in a vintage display face, in uppercase. Each section headline carries a faint outlined copy of itself behind it. Body copy is a wide grotesk in muted tints of the field colour. Depth is soft and used sparingly: cards, the board, and the map sit on long, diffuse drop shadows. There are no hard offsets and no layered card stacks.

The page moves, by the owner's request and in the reference's manner. The logo spins in and floats, headlines rise in with a slight zoom, the scissors snip, blocks rise as they scroll into view, badges pop, and the main buttons shine. All entrance motion is opt-in through JavaScript, so content is visible without it, and every animation stops under reduced motion.

The system is honest about missing data. Any fact the owner has not supplied yet is shown inside a dashed outline. Only placeholders are dashed, so the dashed outline always means "to be filled in".

**Key Characteristics:**
- Full-width solid colour fields alternate between a blue-black depth and red, with white ink. Red fields rise over the band above with a large top-right curve.
- Kingthings Petrock for display text, always uppercase and self-hosted. Archivo widened for body (wdth 112), nav, and buttons (wdth 125), and narrowed only for flaps (wdth 70).
- Section headlines carry an outlined echo of themselves, set up and to the right, that slowly breathes.
- A centred hero: logo, red notched plate, giant title, an animated cut line, the lede, and the actions.
- Service cards on navy-deep with a white icon badge that overlaps the card's top edge.
- Dotted lines mean stitching, which is decoration. Dashed lines mean a placeholder, which is data.
- Red, white, and logo-navy pole stripes divide the hero and the closing band.
- Split-flap tiles for times, which flip in once when the board scrolls into view.

## Colors

A blue-black ladder and the logo's red, with white ink and soft tints for secondary text.

### Primary
- **Night Navy** (navy): The default page ground, a near-black blue taken toward the reference site's black. It fills the body, the hero, and the navy fields, and it is the theme colour. White sits on it as ink.
- **Barber Red** (red): Sampled from the logo. It is both the action colour and the second field colour. It fills the primary buttons, the ribbon plates, and the services, work, and closing fields. It is also the badge ring and badge icon, the cut-line scissors, the board's "today" row, the contact icon discs, the nav underline, and the selection highlight.

### Secondary
- **Logo Navy** (logo-navy): The logo's own ribbon blue. It is used only for the navy band of the pole stripe, which keeps the pole true to the logo.
- **Pressed Red** (red-hover): The primary button's hover fill, slightly brighter than Barber Red.
- **Deep Red** (red-deep): The fill of an empty photo frame on the red work field.

### Tertiary
- **Departure Amber** (board-amber): Station-board convention. It appears only on the hours board's column heads.

### Neutral
- **Navy Deep** (navy-deep): The second depth. It fills the service cards, the hours field, the map panel, the frosted topbar (at 92%), the mobile menu, and a filled photo frame.
- **Navy Ink** (navy-ink): The deepest ground. It fills the departure board, the ribbon band, and the footer, and it is the selection colour on red fields.
- **White** (white): Ink on navy and red. It fills the light button and the service badges, and it is one of the pole-stripe colours and the scissors' pivot dot.
- **Station Paper** (paper): Used only as the light button's hover fill.
- **Navy Mist** (on-navy-soft): Secondary text on navy, such as the lede, nav links at rest, labels, card notes, and board notes.
- **Blush** (on-red-soft): Secondary text on red fields, frame labels, and the text on a closed flap.
- **Flap Navy** (flap-top / flap-bottom): A two-tone fill, split hard at the 50% line, for split-flap tiles. The closed tiles use the wine pair (flap-closed-top / flap-closed-bottom).

### Named Rules
**The Logo Sample Rule.** Barber Red and Logo Navy are the logo's own colours, sampled from the logo artwork. Never shift them. The page grounds are a separate blue-black ladder (navy, navy-deep, navy-ink), and Logo Navy only appears inside the pole stripe.

**The Dark-Red Alternation Rule.** Fields alternate between a navy depth and red. There is no light field on the page.

**The Amber Is Signage Rule.** Departure Amber belongs to the departure board alone, on its column heads. It is never a general accent.

## Typography

**Display Font:** Kingthings Petrock (with Georgia, serif), self-hosted from `assets/fonts/kingthings-petrock.ttf`
**Body Font:** Archivo, variable width and weight (with system-ui, sans-serif), from Google Fonts

**Character:** Kingthings Petrock is a vintage poster face supplied by the user. It carries enough weight on its own, so it is set at its single weight with no added stroke. It is Kevin King's freeware, and its EULA (`assets/fonts/kingthings-EULA.txt`) forbids modifying the font file, so the TTF is served as supplied, never subset or converted. Archivo, widened on its width axis, stands in for the reference site's Trade Gothic Extended. The result is a tall, characterful headline over a wide, steady sans.

### Hierarchy
- **Display hero** (400, clamp(3rem, 9vw, 6rem), 0.95, 0.01em, uppercase): The single giant line under the hero plate.
- **Display** (400, clamp(2.4rem, 6vw, 4.5rem), 1, uppercase, balanced wrap): Section headlines, each with its echo. The closing headline widens to clamp(2.4rem, 7vw, 5.5rem) at 14ch.
- **Plate** (400, clamp(1.5rem, 3.4vw, 2.6rem), 1.05, uppercase): The text on the hero's ribbon plate. It is part of the h1.
- **Title** (400, clamp(1.45rem, 2.4vw, 1.9rem), 1.05, uppercase): Service card names. The same face sets card prices (1.6rem, tabular), ribbon items (clamp(1.1rem, 2.2vw, 1.5rem)), and board day names (clamp(1rem, 2.6vw, 1.45rem)).
- **Body** (400, 1.0625rem, 1.6, wdth 112): Running copy. The hero lede uses clamp(1.05rem, 1.6vw, 1.25rem) at 36rem max width, and intro copy runs at about 1.15–1.2rem.
- **Label** (700, 0.78–0.85rem, 0.06–0.16em tracking, uppercase, wdth 112): Board column heads, fact labels, and frame labels.
- **Button / Nav** (750 / 650, 1rem / 0.9rem, 0.04em / 0.08em, uppercase, wdth 125): Controls. At 760px and below, buttons drop to wdth 100 and 0.03em so labels stay on one line.
- **Flap** (750, clamp(1.05rem, 3vw, 1.7rem), wdth 70, tabular figures): Hours characters.

### Named Rules
**The Unmodified Font Rule.** Kingthings Petrock is served from the TTF exactly as supplied, at weight 400, always uppercase, and never used for running text. Do not subset, convert, or fake-bold it.

**The Wide Text Rule.** Archivo runs wide: wdth 112 for text, 125 for nav and buttons. Only the flaps go narrow (wdth 70), and only phone buttons step back to 100.

**The Tabular Time Rule.** Prices and times use tabular figures so columns hold still.

## Layout

The page is a vertical stack of full-width colour fields. Each field pads its block by the section rhythm (clamp(4.5rem, 10vw, 8rem)). Content sits in a centred wrap of up to 72rem, with a fluid gutter of clamp(1rem, 4vw, 2.5rem) on each side. The field order is navy hero, navy-ink ribbon band, red services, navy-deep hours, red work, navy visit, red closing, and navy-ink footer.

The hero is a single centred column, at most 60rem wide and up to min(100svh, 60rem) tall. It stacks the logo (min(22rem, 70vw)), the plate, the giant title, the cut line (at most 34rem), the lede (at most 36rem), and the centred actions.

The services section has a centred head (headline and intro) over a four-column grid of service cards, with 4.5rem of clearance above the grid for the badges. The light CTA button is centred below the grid.

The two red fields with curved tops (services and work) pull up over the band above by the curve amount (clamp(2.5rem, 7vw, 6rem)) and sit above it (z-index 1). Their top padding grows by 0.4 × the curve. The band each one overlaps (the ribbon band and the hours section) adds a full curve of extra bottom padding, so no content is covered.

The visit section runs 1fr / 1.1fr. The work gallery is a 3-column, 2-row grid of frames, with one tall frame and one wide frame. The topbar is fixed at 4.25rem (3.75rem on mobile). It hides on scroll down and returns on scroll up, and anchor offsets use scroll-padding.

**Breakpoints:**
- **≤960px:** The service grid drops to 2 columns, with a 3.75rem row gap for the badges, and the visit grid stacks.
- **≤760px:** The nav becomes a clip-path drop-down panel behind a menu toggle, and the topbar CTA hides. A floating round WhatsApp button appears and hides itself near the top and near the closing band. Hero buttons go full width, and button text narrows to wdth 100. Cards tighten their padding and badges shrink to 4rem. The gallery goes to 2 columns with 11rem rows. Ribbon items shrink to 0.88rem. Flaps shrink to 1.05 × 1.6rem.

## Elevation & Depth

Depth comes from tonal steps of navy (navy, then navy-deep, then navy-ink) plus a few long, soft drop shadows that fall well below the element. No surface uses a hard offset shadow or a glow, and surfaces do not stack. Two overlaps are structural: a curved red field lies over the bottom of the band above it, and each service badge sits half outside its card.

### Shadow Vocabulary
- **Board drop** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.6)`, 0.7 on the departure board): The departure board and the map panel.
- **Card drop** (`box-shadow: 0 24px 50px -28px rgb(0 0 0 / 0.75)`, deepening on hover to `0 34px 60px -28px rgb(0 0 0 / 0.85)`): Service cards.
- **Badge rings** (`box-shadow: 0 0 0 5px red, 0 0 0 7px rgb(255 255 255 / 0.5), 0 12px 24px -8px rgb(0 0 0 / 0.5)`): Service badges. The rings are solid bands, not glows.
- **Button lift** (`box-shadow: 0 10px 24px -12px rgb(0 0 0 / 0.6)`, deepening on hover to `0 16px 30px -14px rgb(0 0 0 / 0.7)`): Filled buttons.
- **Flap tick** (`box-shadow: 0 2px 3px rgb(0 0 0 / 0.4)`): Each split-flap tile.
- **Logo drop** (`filter: drop-shadow(0 20px 34px rgb(0 0 0 / 0.5))`): The hero logo only.

### Named Rules
**The Tone Before Shadow Rule.** Separate surfaces by a navy step first. Shadows only lift the few objects that sit on a field (cards, board, map, buttons).

## Shapes

The form language is the logo's, plus one large curve and the badge circle.

- **Notched ribbon plate.** A clip-path with V-notches cut into both ends, 0.7em deep (0.9em on the ribbon band).
- **Curved field top.** Red fields that rise over the band above have one rounded top-right corner of clamp(2.5rem, 7vw, 6rem). The other corners stay square.
- **Inset dotted stitch.** A 2px dotted line in white, inset inside rounded panels: 0.55rem at 22% inside service cards (11px radius in 16px), and 0.6rem at 28% inside the empty map (9px in 14px).
- **Badge circle.** A white disc ringed in red and then faint white, centred on a card's top edge.
- **Cut line.** A drawn pair of scissors, pivoting at one point, leads a 3px stitch-dot line at 45% white.

Corners step by role: pill (999px) for buttons, the field curve for red field tops, 16px for service cards, 14px for the board and the map, 10px for photo frames, 8px for the "today" row highlight, 6px for small controls, 4px for flaps, placeholders, and the focus ring, and 3px for the "Hoje" tag. Badges and contact icon discs are full circles.

**The Night Map Rule.** The Google map embed cannot be styled, so it runs in night mode through a CSS filter on the iframe: `invert(0.9) hue-rotate(180deg) saturate(0.85) brightness(0.95) contrast(0.95)`. The light map turns dark, and the hue rotation brings the red pin and coloured icons back near their own colours. A page-blue tint was tried and dropped by the owner, because it muted the red pin.

**The Dotted Is Stitch, Dashed Is Placeholder Rule.** Dotted lines are decoration: the plate edges, the card and map insets, and the cut line, drawn with a radial-gradient dot every 8px. Dashed borders are reserved for missing owner data: the `.tbd` inline outline and the empty photo frame. When data arrives, the dashed outline is removed (the script drops `.tbd`; a filled frame loses its border).

## Components

### Buttons
Bold, uppercase, wide, and pill-shaped. They lift on hover.
- **Shape:** Fully rounded pill (999px), with a 2px border slot. Default height is 3.25rem (2.6rem small, 3.75rem large).
- **Primary (red):** Barber Red fill with white text and the button-lift shadow. Hover moves to Pressed Red, rises 2px, and deepens the shadow. Active snaps back in 0.08s.
- **Light:** White fill with Barber Red text. Used on red fields, where a red button would vanish. Hover moves to Station Paper.
- **Ghost:** Transparent, with a 55% white border and white text. Hover makes the border solid white, adds an 8% white wash, and slides the arrow icon 4px right.
- **Shine:** The hero WhatsApp button and the services CTA carry a sheen that sweeps across every 4.5s. It is a 100° white gradient at 35% (a 14% red tint on the light button), drawn behind the label.
- **Icons:** Inline SVG at stroke 1.8, 1.3em, leading (WhatsApp) or trailing (arrow).
- **Focus:** 3px solid white outline, offset 3px, on every field.

### Service Card (signature)
A centred navy-deep card (16px radius, card drop) with a dotted inner stitch. It holds a display name, an optional Navy Mist note, and a display price in tabular figures (a `.tbd` placeholder until prices are supplied). Cards sit four across, in equal widths. On hover a card rises 6px and its shadow deepens. The equal card grid follows the owner's request to match the reference. It is a deliberate change from the original direction, which had rejected rows of equal cards.
- **Badge:** A 4.75rem white circle (4rem on phones) holding a 2.3rem red line icon. It is centred on the card's top edge (translate -50% -50%), with a 5px red ring and a faint 2px white ring outside it.
- **Motion:** The badge pops in as its card rises (scale 0 and -90°, overshooting to 1.15 and 8°, settling over 0.75s). Its icon then floats (8px, 4s), and it wiggles when the card is hovered.

### Title Echo (signature)
Each section h2 repeats its own text in a `data-echo` attribute. A pseudo-element draws that text behind the headline as a hollow outline (transparent fill, 1.5px stroke at 32% white). It is offset 0.09em right and 0.11em up, at z-index -1 inside an isolated stacking context. The echo breathes continuously (scale 1.045 and back, 5s). Its content is given empty alt text (`content: attr(data-echo) / ""`), so assistive tech does not read it twice.

### Cut Line (signature)
Under the hero h1, a red scissors drawn inline (2.1rem). It is two blade groups, each a ring and a straight blade, meeting at a white pivot dot (pivot at 19.9, 16 in a 32-unit box). A dotted stitch line fills the rest of the row (3px, 45% white, at most 34rem, centred). The blades open and close by ±13° every 1.4s, and the line grows in from the left on load.

### Ribbon Plate (signature)
A red band with V-notched ends and a dotted white stitch along both long edges (2px, 75% white, inset 0.14em). In the hero it labels the headline ("Próxima parada:"). The ribbon band wraps its three service names in one wide plate on a navy-ink strip, with small rotated-square white diamonds between the items.

### Pole-Stripe Divider (signature)
A 1.25rem band of -45° stripes: red 18px, white 12px, Logo Navy 18px, white 12px. It tiles every 84.85px (60px × √2) so it loops without a seam. It sits on the hero's bottom edge and the closing band's top edge, and it drifts sideways continuously (2.4s linear, infinite).

### Split-Flap Hours Board (signature)
A navy-ink board (14px radius, deepest drop shadow) of rows with three columns: day, opens, closes. Column heads are amber labels. Each time character is its own flap tile, a two-tone navy split hard at 50% with a 1px dark hinge line. Colons are bare separators. A closed day is one wide wine flap reading "FECHADO", spanning both time columns. Today's row takes a 22% red wash and a small red "Hoje" tag.
- **Motion:** When the board scrolls into view (20% visible), it rises in, and every flap flips down once from -90° with a slight overshoot (0.6s, ease-out-expo), starting bright. The flaps cascade at 70ms per row plus 35ms per tile.

### Colour Fields
Full-width section grounds in a navy depth or red, each padded by the section rhythm. The services and work fields carry the curved top. The closing band is a red field topped by a pole stripe, with centred content. On red fields, links are white and the selection colour flips to navy ink.

### Placeholders
- **Inline (tbd):** A 1.5px dashed outline in the current colour, 4px radius, 0.35em side padding, at 85% opacity.
- **Photo frame:** A Deep Red fill under a faint 45° hatch (rgb(0 0 0 / 0.08)), with a 2px dashed white border at 40% and an uppercase Blush label at the bottom. Once a photo is supplied, the image fills the frame over navy-deep and the border is removed.

### Navigation
A fixed, frosted navy-deep bar (92% opacity, saturate 1.4, blur 10px) with a hairline bottom edge. Links are uppercase, wide (wdth 125), and set in Navy Mist. On hover they turn white and a 2px red underline wipes in from the left. On mobile, links stack full width in a navy-deep panel with a 4px red bottom edge, revealed by a clip-path wipe. Escape and link taps close it.

### Floating WhatsApp (phones)
A 3.75rem red circle with a 3px white ring, fixed at the bottom right at 760px and below. It pulses (scale 1.08, 2.2s) and sends out a red ripple ring (to 1.9× scale while fading, 2.2s).

### Motion
The motion grammar is the reference site's, adopted by the owner's request. The shared easing is cubic-bezier(0.16, 1, 0.3, 1).
- **Gate:** An inline script in the head adds `class="js"` to `<html>`, and only then are entrance animations armed. Without JavaScript, without IntersectionObserver, or under reduced motion, the script removes the class and all content shows at rest.
- **Hero on load:** The logo spins in (scale 0.8 and -25° to rest, 1.1s), then floats (8px, 6s, infinite). The title enters with title-in (40px down and 1.08 scale to rest, 1s, 0.15s delay). The cut line rises at 0.35s and its stitch grows from the left at 0.5s. The lede rises at 0.45s, and the actions at 0.6s.
- **On scroll:** An IntersectionObserver (20% visible, bottom margin -8%) tags blocks with `data-rise` and marks each one `is-in` once. Blocks rise 36px and fade in over 0.9s. Section headlines use title-in instead. Photo frames reveal with a left-to-right clip-path wipe (1.1s). Service cards and frames stagger by 110ms each, and contact icons pop in at 0, 120, and 240ms.
- **Continuous:** These run whether or not the gate is set: the pole drift (2.4s), the scissors snip (1.4s), the echo breathe (5s), the badge icon float (4s), the button shine (4.5s), and the floating button's pulse and ripple (2.2s).
- **Interaction:** Buttons lift (0.35s), cards lift 6px (0.45s), badges wiggle on card hover (0.6s), the topbar hides (0.45s), and the mobile menu wipes open (0.45s).
- **Reduced motion:** Under `prefers-reduced-motion: reduce`, every animation and pseudo-element animation is set to none, transitions collapse to 0.01ms, smooth scrolling is off, and `data-rise` blocks are forced visible.

## Do's and Don'ts

### Do:
- **Do** fill each section edge to edge with one field colour, alternating a navy depth and red, and put white ink on both.
- **Do** overlap the band above a curved red field by the curve amount, and pad that band's bottom by the same amount.
- **Do** set every display use in Kingthings Petrock, uppercase, from the unmodified TTF.
- **Do** echo each section h2 with `data-echo`, keeping the echo text identical and hidden from assistive tech.
- **Do** use the notched red plate, with its dotted stitch, for a short sign-like label inside a headline or band.
- **Do** draw decoration in dotted lines: the 2px dotted stitch inset inside rounded panels, or the cut line.
- **Do** mark any fact the owner has not supplied with the dashed placeholder, and remove the dash when the real value lands.
- **Do** use the light (white and red) button on red fields and the red button on navy fields.
- **Do** set times and prices in tabular figures. Times go on split-flap tiles.
- **Do** keep entrance motion behind the `js` gate so content is visible without it, and stop all animation under reduced motion.

### Don't:
- **Don't** use dashed borders for anything except missing data.
- **Don't** use Departure Amber outside the hours board.
- **Don't** set Kingthings Petrock in lowercase or for running text, add a faux-bold stroke, or ship a modified font file.
- **Don't** shift Barber Red or Logo Navy away from the logo samples.
- **Don't** add hard offset shadows or glows to surfaces. Depth is a navy step or a long, soft drop; the only rings are the service badges' red and white rings and the floating button's white ring.
