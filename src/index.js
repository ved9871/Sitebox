// Coming-soon worker: serves ./coming-soon as static assets and
// canonicalises the address. www.shitebox.co.uk and plain http both
// 301 to https://shitebox.co.uk so there is one address for SEO.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isCustom = url.hostname.endsWith('shitebox.co.uk');
    if (isCustom && (url.hostname !== 'shitebox.co.uk' || url.protocol !== 'https:')) {
      url.hostname = 'shitebox.co.uk';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
