# Shitebox: coming-soon hosting on Cloudflare and founder email

Written 2 November 2026. Domain: shitebox.co.uk, registered and verified at Namecheap.

## A. Put the coming-soon page live on Cloudflare (about 30 minutes, free)

The page is in `coming-soon/` and zipped as `shitebox-coming-soon-upload.zip`. It is plain HTML, so Cloudflare Pages "direct upload" works without GitHub, which matters because the GitHub integration is still under review.

### A1. Add the domain to Cloudflare (Ved)
1. Log in at dash.cloudflare.com (existing account is fine; a new one is not needed).
2. Add a domain → type `shitebox.co.uk` → choose the Free plan.
3. Cloudflare scans the existing DNS from Namecheap and shows two nameservers, for example `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com`. Copy them.

### A2. Point Namecheap at Cloudflare (Ved)
1. Namecheap → Domain List → Manage `shitebox.co.uk` → Nameservers → Custom DNS.
2. Paste the two Cloudflare nameservers → save. Propagation is usually under an hour, occasionally up to 24.
3. Back in Cloudflare the site turns from "Pending" to "Active". You get an email.

### A3. Create the Pages project and upload (Ved)
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets.
2. Project name `shitebox-coming-soon`. Drag the contents of the `coming-soon` folder in (or the zip). Deploy.
3. It goes live at `shitebox-coming-soon.pages.dev` within a minute. Open it and check the banner and the form message.

### A4. Attach the real domain (Ved)
1. In the Pages project → Custom domains → Set up a custom domain → `shitebox.co.uk` → Activate. Cloudflare adds the DNS record itself because the zone is already on Cloudflare.
2. Repeat for `www.shitebox.co.uk`.
3. SSL/TLS → set encryption mode to Full (strict). Edge certificates → turn on Always Use HTTPS.
4. Rules → Redirect Rules → add one rule: if hostname equals `www.shitebox.co.uk`, redirect 301 to `https://shitebox.co.uk${uri}`. One canonical address is better for SEO.

### A5. Connect the email form (Ved, five minutes)
The signup form posts to Formspree by default. Either:
- Formspree: create a free form at formspree.io, copy its endpoint (`https://formspree.io/f/xxxxxxxx`) and paste it into `index.html` where it says `REPLACE_WITH_FORM_ID`, then re-upload; or
- Mailchimp (you already have an account): Audience → Signup forms → Embedded form → copy the form `action` URL and replace the Formspree URL with it; add a hidden field named as Mailchimp's form shows. Re-upload.

Until one is connected, the form shows "Form not connected yet" instead of failing silently.


### Status, 2 November 2026: LIVE at https://shitebox.co.uk
- Deployed from this machine with wrangler as a Workers static site (account 5c13ba68238db40c4993cb03c39e19e4). `wrangler.jsonc` points at `./coming-soon` with `src/index.js` in front (`run_worker_first: true`, needed so the redirect runs for asset paths too). Redeploy with `npx wrangler deploy` from the Sitebox folder after any change. Fallback address: https://shitebox-coming-soon.prakashved155.workers.dev
- Zone shitebox.co.uk is Active on Cloudflare; Namecheap nameservers are `kai.ns.cloudflare.com` / `rita.ns.cloudflare.com`. The imported parking A/CNAME records were deleted; `shitebox.co.uk` and `www.shitebox.co.uk` are attached to the Worker as custom domains (Cloudflare manages their DNS records and certificate).
- Canonical address is handled in `src/index.js`: `www` and plain `http://` both 301 to `https://shitebox.co.uk`. Verified from outside on 2 Nov. No redirect rule or Always Use HTTPS setting is needed (A4 steps 3 and 4 are covered).
- Still from Namecheap: five `eforward` MX records and an SPF TXT. They keep Namecheap email forwarding working until Zoho is set up (B1 replaces them).
- Not done yet: the signup form endpoint (A5).

### A6. Replace with the real site later
When the Shopify store is ready, delete the custom domain from the Pages project and point `shitebox.co.uk` at Shopify (A record `23.227.38.65` and CNAME `www` → `shops.myshopify.com`, both set to DNS only, not proxied). Shopify's domain checklist confirms the exact records at the time.

## B. Founder email addresses

### Recommendation
Use **Zoho Mail (Forever Free plan)** for two real mailboxes, with **Cloudflare Email Routing** as a free safety net for extra aliases. Zoho's free plan gives up to five users on your own domain with web and mobile apps and proper sending, which vendor outreach needs. Cloudflare Email Routing only forwards; it cannot send as the address, so on its own it is not enough for approaching suppliers. Namecheap Private Email works too but is paid per mailbox and offers nothing Zoho free does not. Google Workspace is the premium option at roughly £5 a user a month and is the right upgrade later if you want Gmail, shared Drive and Meet under the brand.

Verify current plan limits and prices on zoho.com/mail/pricing and dash.cloudflare.com before relying on them; they change.

### Addresses to create
| Address | Use |
| --- | --- |
| scott@shitebox.co.uk | Scott, supplier and creator outreach |
| ved@shitebox.co.uk | Ved, operations, platforms, vendors |
| hello@shitebox.co.uk | Public contact on the site; alias forwarding to both |
| orders@shitebox.co.uk | Shopify order notifications later; alias |

### B1. Zoho Mail set-up (Ved, about 20 minutes)
1. zoho.com/mail → Sign up → Business email → Forever Free → add existing domain `shitebox.co.uk`.
2. Verify the domain: Zoho gives a TXT record. Add it in Cloudflare DNS (Zone → DNS → Records → Add → TXT, name `@`, content as given). Click verify in Zoho.
3. Create users `scott` and `ved`. Set strong passwords; turn on two-factor.
4. Add the MX records Zoho shows (three records, priorities 10, 20, 50) in Cloudflare DNS, set to DNS only (grey cloud). Remove any Namecheap or Cloudflare placeholder MX records.
5. Add the SPF TXT record from Zoho (`v=spf1 include:zoho.eu ~all` or the exact string Zoho displays; the include differs by data centre).
6. Add the DKIM TXT record Zoho generates (name like `zmail._domainkey`).
7. Add a DMARC TXT record: name `_dmarc`, content `v=DMARC1; p=quarantine; rua=mailto:ved@shitebox.co.uk`.
8. In Zoho Admin → Groups or Aliases, make `hello@` and `orders@` aliases that deliver to both users.
9. Send a test from each mailbox to a Gmail address and check it lands in the inbox, not spam, and that "show original" reports SPF, DKIM and DMARC as pass.

### B2. If you prefer to stay inside Cloudflare only
Email → Email Routing → enable → add destination addresses (your personal inboxes) → create addresses `hello@`, `scott@`, `ved@` that forward to them. Cloudflare writes the MX and SPF records for you. This is enough to receive at the brand domain today, but replies go out from the personal address, so use it only until Zoho is set up, or alongside it for extra aliases (Zoho and Cloudflare Email Routing cannot both own the MX records; pick one for receiving).

### B3. Signatures
Keep them short and in voice: name, Shitebox, shitebox.co.uk, phone if wanted. Supplier emails should read as a normal UK business, so leave the jokes out of the signature.

## C. What Ved needs to send or do
- Confirm the Cloudflare account email so Scott can be added as a member later.
- Decide Formspree or Mailchimp for the form and paste the endpoint.
- Create the Zoho users and share the two addresses so the website footer and the supplier email templates can use them.
