# Sitebox — Shitebox website design samples

Five landing page directions for the Shitebox store (shitebox.co.uk), built as standalone HTML so they can be opened anywhere, reviewed side by side, and used as the brief for a Shopify theme.

## Open them

- `index.html` is a gallery with live previews of all five.
- `designs/01-pink-shout.html` — the brand book, literally: obnoxious pink and acid yellow signage.
- `designs/02-black-market.html` — near-black premium editorial with neon accents and the magnetic-box reveal.
- `designs/03-unlucky-dip.html` — the ad-safe parent brand, with Shitebox as the first product line and room for sub-brands.
- `designs/04-rave-flyer.html` — 1990s rave poster meets discount flyer, brutalist grid.
- `designs/05-clean-shop.html` — a conventional premium store layout, the safe option.

Every page is a single file with inline CSS and Google Fonts (Archivo Black, Inter, Anton). No build step. Each works from 390px up and has no horizontal scroll.

## What is the same in every version

- Tiers from Scott's 30 October email: Little £18.99 (4 items), Big £27.99 (6), Absolute £36.99 (9). Absolute is shown as "coming soon" to match the two-size launch agreed with Craig on 29 October.
- Delivery shown inside the price, 14-day cancellation, Worldpay, 18+ (from the launch research: DMCC Act drip-pricing ban, Consumer Contracts Regulations, payment gateway decision on 30 October).
- "Find your box": the QR card with a unique box number that reveals the contents, descriptions and a discount code, and captures an email (30 October).
- Absolute Shite Hall of Fame (30 October).
- The four box categories: Experience, Mundane, Novelty, Marketing (27 October).
- Brand lines, FAQ answers and the mission from the brand book.

## Brand tokens

| Token | Hex |
| --- | --- |
| Obnoxious Pink | #F12BA5 |
| Acid Yellow | #F8FF37 |
| Toxic Lime | #A7F12B |
| Almost Black | #252525 |
| Bad Purple | #7845F5 |

Display: Archivo Black. Body: Inter. Poster accent (04 only): Anton.

## Towards Shopify

Each design maps to standard Shopify sections: announcement bar, header, image-with-text hero, featured collection (the three tiers), multicolumn (categories and steps), custom liquid (Find your box form and Hall of Fame), collapsible content (FAQ), newsletter, footer. The Dawn theme can carry 05 almost as-is; 01 to 04 need custom CSS on top of Dawn or a custom theme.

## Publishing

GitHub Pages serves `index.html` from the repository root. After pushing, enable Pages on the `main` branch in repository settings.
