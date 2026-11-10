const VERSION = "v2.1.1"; // ← augmenter à chaque mise à jour du contenu (v2.0.1, v2.0.2…)
const CACHE = "altimaths-" + VERSION;
const FICHIERS = [
  "./", "index.html", "contenu.js", "eleves.js", "config-firebase.js", "firebase-alti.js", "manifest.webmanifest",
  "katex/katex.min.css", "katex/katex.min.js", "katex/auto-render.min.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"
];
self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(FICHIERS);
    const polices = ["KaTeX_Main-Regular","KaTeX_Main-Bold","KaTeX_Main-Italic","KaTeX_Math-Italic","KaTeX_AMS-Regular","KaTeX_Size1-Regular","KaTeX_Size2-Regular","KaTeX_Size3-Regular","KaTeX_Size4-Regular"];
    await Promise.all(polices.map(p => c.add("katex/fonts/" + p + ".woff2").catch(() => {})));
    if (!(await self.registration.active)) self.skipWaiting();
  })());
});
self.addEventListener("message", e => { if (e.data === "activer") self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const cles = await caches.keys();
    await Promise.all(cles.filter(k => (k.startsWith("altimaths-") || k.startsWith("maths-ecg1-")) && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Liste des codes : toujours la version la plus récente quand c'est possible
  if (url.origin === location.origin && url.pathname.endsWith("/eleves.js")) {
    e.respondWith(fetch(e.request.url, {cache: "no-store"}).then(rep => {
      if (rep.ok) { const copie = rep.clone(); caches.open(CACHE).then(c => c.put("eleves.js", copie)); }
      return rep;
    }).catch(() => caches.match("eleves.js")));
    return;
  }
  // Météo et classement : réseau uniquement
  if (url.origin !== location.origin && !url.host.includes("fonts.g")) return;
  e.respondWith((async () => {
    const enCache = await caches.match(e.request, {ignoreSearch: true});
    if (enCache) return enCache;
    try {
      const rep = await fetch(e.request);
      if (rep.ok || rep.type === "opaque") { const c = await caches.open(CACHE); c.put(e.request, rep.clone()); }
      return rep;
    } catch (err) {
      if (e.request.mode === "navigate") return caches.match("index.html");
      throw err;
    }
  })());
});
