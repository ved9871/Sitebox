// Coming-soon worker.
// 1. Canonical address: www.shitebox.co.uk and plain http both 301 to https://shitebox.co.uk.
// 2. POST /signup stores the email in the SIGNUPS KV namespace (key = lowercased email).
//    Export the list with: npx wrangler kv key list --binding SIGNUPS --remote
// 3. Everything else is served from ./coming-soon by the assets binding.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

async function signup(request, env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
  let form;
  try { form = await request.formData(); } catch { return json({ ok: false, error: 'body' }, 400); }
  // Honeypot: real people never see or fill the "website" field.
  if ((form.get('website') || '').toString().trim() !== '') return json({ ok: true });
  const email = (form.get('email') || '').toString().trim().toLowerCase();
  if (email.length > 254 || !EMAIL.test(email)) return json({ ok: false, error: 'email' }, 400);
  const existing = await env.SIGNUPS.get(email);
  if (existing) return json({ ok: true, already: true });
  await env.SIGNUPS.put(email, JSON.stringify({ at: new Date().toISOString(), source: 'coming-soon' }));
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isCustom = url.hostname.endsWith('shitebox.co.uk');
    if (isCustom && (url.hostname !== 'shitebox.co.uk' || url.protocol !== 'https:')) {
      url.hostname = 'shitebox.co.uk';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === '/signup') return signup(request, env);
    return env.ASSETS.fetch(request);
  },
};
