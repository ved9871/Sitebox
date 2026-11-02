# Scott's feedback, 2 November 2026, and what changed

Source: five voice notes transcribed to `Scott design feedback transcripts (2 Nov 2026).txt` in the project folder. This note sorts the feedback by topic, records the decision taken, and flags where Ved's opinion was asked for.

## 1. Which designs

| Scott said | Decision |
| --- | --- |
| All five look great. Black (02), Clean/white (05) and Purple/Unlucky Dip (03) are "too nice". | 02, 03 and 05 are parked. They stay in the repo for reference but are off the gallery's main row. |
| Pink (01) is his favourite; Rave (04) may be better even though it is not his favourite. Work on both and see. | Both rebuilt as v2 with all the content changes below. |
| Rave is so wild it needs a break about 30% down the page: stay on one colour scheme for a while, then come back. | v2 Rave has a calm black-and-white "break" block after the tiers (the About strip and the How we shop section), then returns to the loud blocks. |

## 2. Message

| Scott said | Decision |
| --- | --- |
| Throughout the site and marketing, say more that we take the gift decision away from them: can't be arsed, don't worry, we've got you, don't know what to get, blame us, "we'll get them the shite so you don't have to". | Hero copy, the lines strip and the FAQ now lead with "blame us" and "can't be arsed". The banner line "For those who simply can't be arsed" is the eyebrow. |
| Never say "shit"; always "shite". | Checked: no "shit" anywhere in the pages. |
| The four categories (Experience, Marketing, Mundane, Novelty) are internal. Customers should only know they get some mundane and some novelty shite. Be vaguer. | The "What's inside" section now shows two things only, Mundane and Novelty, with vague copy. Experience and Marketing are gone from the site. The four-category system stays in the sourcing sheet and the AI curation brief. |

## 3. About us

| Scott said | Decision |
| --- | --- |
| An About page with no names, just initials, saying "we're both shy". Pop-art digital versions of our photos, disguised, like balaclavas or ski masks (not crash helmets, too Daft Punk). | `designs/about.html` built in the pink style with two founders, S and V, as masked pop-art avatars. The avatars are SVG placeholders until Ved sends a photo of each founder; then likeness versions are made in the same style. |
| The page talks about recycled goods: around 40% of stock is recycled from charity shops in Lincoln, so buying from us supports those charities. | Done, with "around 40%" as Scott's figure and "charity shops across Lincoln"; the named charity list goes in once Scott sends it. |
| A disclaimer at purchase that some items are second-hand from charity shops, and nothing that is a hygiene risk is ever second-hand, without giving an example. | Added to each tier card, the FAQ and the About page, worded exactly that way. |

## 4. Not So Shy

| Scott said | Decision |
| --- | --- |
| A "not so shy" area for the supporting items, not ready yet, but show what it looks like. Needs its own logo. Supporting items near the bottom of the home page. | New "Not So Shy" section near the foot of both home pages with a wordmark and four visible items: the Envelope of No, the Certificate of Disappointment, a tee and a mug. Wordmark at `assets/brand/not-so-shy.svg`. |

## 5. Unlucky Dip

| Scott said | Decision and Ved's view requested |
| --- | --- |
| The Unlucky Dip logo is good but the circle reads as Trivial Pursuit. Keep the colours, put them on a thumbs-down. That could go on the tape over the box. | Thumbs-down mark at `assets/brand/unlucky-dip-thumbsdown.svg` and a tape strip at `assets/brand/unlucky-dip-tape.svg`. |
| Do we need Unlucky Dip as a page at all, or just a forwarding address that redirects? | Recommendation: redirect only. unluckydip.com and .co.uk point at shitebox.co.uk with a 301. No separate storefront, no separate page. The mark lives on the tape, the stamp and the ad creative, where the profane name cannot appear. This keeps one site to maintain and one brand to grow. |

## 6. Features

| Scott said | Decision |
| --- | --- |
| A WhatsApp widget button. | Floating WhatsApp button on both home pages, linking to a wa.me number to be supplied. |
| A section on how we shop for shite, where the charity-shop series with the kids will go. | "How we shop for shite" section with three episode cards and a note that episodes are filmed on the Lincoln charity-shop runs. |

## 7. Packaging (from the car note)

| Scott said | Ved's view, as asked |
| --- | --- |
| The corrugated mailer is too flimsy without an outer box, and the visible corrugation on opening ruins the quality idea. | Agree. A printed mailer only works as an outer box, which doubles packaging cost. |
| Prefers the magnetic rigid box, shipped in bubble wrap and plastic or parcel tape; cheaper than an outer box and only one wrap size needed. | Agree, with two cautions. A rigid magnetic box typically costs £1.50 to £3.00 each at small runs against the £0.80 to £1.40 budgeted for a printed mailer, so Scott's packaging line (£3.50 / £4.00 / £4.50, which must also cover the label) gets tight; the supplier's quote decides it. Wrap in paper rather than plastic if possible, since recycled paper is already the story. |
| The black boxes are too rectangular; the one she opens is a good volume but needs to be a bit taller for the small size. Asking for dimensions and flip-box examples. | Agree. Ask for a box that keeps the Royal Mail Small Parcel limit (45 x 35 x 16 cm, 2 kg) once wrapped. The sample photos are other brands' boxes, so they are not used on the site; the pages use drawn boxes until our own samples are photographed. |

## 8. What is needed from Ved and Scott

- A photo of each founder for the likeness avatars (the current ones are placeholders).
- Scott's list of Lincoln charity shops for the About page.
- The WhatsApp number for the widget.
- Confirmation that Unlucky Dip is redirect-only.
- Packaging dimensions and price from the supplier, to re-run the cost model.
