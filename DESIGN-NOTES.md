# Design notes, 30 October 2026

## Inputs

- Brand book (October 2026): palette, Archivo Black and Inter, the brand lines, three tiers, purpose-made extras, FAQ voice, unboxing beats, growth lines (Secret, Birthday, Corporate, Festive Shite).
- Scott's logo tiles (pink, yellow, lime, purple colourways) and the pink wordmark.
- Granola, 27 October: four categories per box; AI curation; influencer-first; reseller channel.
- Granola, 29 October (Craig): January launch, two sizes live, £5 minimum margin, Unlucky Dip parent brand, merch and affiliates, corporate gifting, branded tape and "beware, crap inside" stamp, shredded coloured paper.
- Granola, 30 October (Scott): flip or magnetic box preferred; QR card with unique box number, contents reveal, email capture and 10% code for a bigger box; Absolute Shite Hall of Fame with certificate and monthly social mention; influencer seeding of about 20 boxes; Worldpay, no PayPal; Ved to share 2 to 3 UI/UX concepts built around brand colours and able to accommodate future sub-brands.
- Launch research (27 October): delivery must be in the headline price; the 14-day cancellation right is unconditional; "shite" cannot appear in paid ads, so the landing page for ads must be clean.
- UI/UX Pro Max design-system run: Brutalism style with bold variance, spacious density, standard motion; stagger-in grid motion; avoid flat text-heavy pages. Mobbin was not available on the current plan, so no Mobbin references were used.

## How the feedback shaped the designs

| Feedback | Where it shows |
| --- | --- |
| Future sub-brands | 03 Unlucky Dip has product-line tiles; every design's footer links Corporate Shite |
| Two sizes live, third coming soon | Absolute tier marked coming soon in all five |
| QR card and box number | "Find your box" section with form and QR placeholder in all five |
| Hall of Fame | Section in all five |
| Magnetic box | 02 hero is a lid-lift reveal; 05 names the magnetic lid |
| Ad-safe landing page | 03 masthead is Unlucky Dip; 05 keeps the name small and the voice in copy |
| Delivery, returns, Worldpay | Trust strip or footer in all five |
| Shredded coloured paper | 03 hero shows it in the tub; 05 mentions recycled paper |

## Accessibility and quality checks done

- Text contrast: yellow on pink is used only for display type at large sizes; body copy is black on light or white on dark.
- Keyboard focus visible on every link, button and input (outline in purple or lime).
- Marquees respect `prefers-reduced-motion`.
- Forms have visible labels (or visually hidden labels on single-field newsletter forms) and `preventDefault` on submit, since these are mock-ups.
- Phone width 390px: `scrollWidth` equals `innerWidth` on all five (measured in Chromium).
- No emoji used as icons; inline SVG only.

## Open items for Scott

1. Which direction, or which two to merge.
2. Whether the masthead is Shitebox or Unlucky Dip.
3. Real box photography or renders once the China samples arrive; the current boxes are CSS placeholders.
4. Real unboxing clips once the first 20 seeded boxes land.
5. Copy sign-off on the FAQ and returns wording (the joke must sit beside the compliant notice).
