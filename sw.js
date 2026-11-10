const VERSION = "v1.1.0"; // ← augmenter à chaque mise à jour du contenu (v1.0.1, v1.0.2…)
const CACHE = "maths-ecg1-" + VERSION;
const FICHIERS = [
  "./", "index.html", "contenu.js", "eleves.js", "manifest.webmanifest",
  "katex/katex.min.css", "katex/katex.min.js", "katex/auto-render.min.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(FICHIERS);
    // Polices KaTeX : mises en cache sans bloquer l'installation
    const polices = ["KaTeX_Main-Regular","KaTeX_Main-Bold","KaTeX_Main-Italic","KaTeX_Math-Italic","KaTeX_AMS-Regular","KaTeX_Size1-Regular","KaTeX_Size2-Regular","KaTeX_Size3-Regular","KaTeX_Size4-Regular"];
    await Promise.all(polices.map(p => c.add("katex/fonts/" + p + ".woff2").catch(() => {})));
    // Première installation : on s'active tout de suite
    if (!(await self.registration.active)) self.skipWaiting();
  })());
});

self.addEventListener("message", e => { if (e.data === "activer") self.skipWaiting(); });

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const cles = await caches.keys();
    await Promise.all(cles.filter(k => k.startsWith("maths-ecg1-") && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// Cache d'abord (fonctionne hors connexion), puis réseau ; les polices Google sont gardées au passage.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // La liste des codes est relue sur le réseau dès que possible (ajout/retrait d'un élève sans changer de version)
  if (new URL(e.request.url).pathname.endsWith("/eleves.js")) {
    e.respondWith(fetch(e.request).then(rep => {
      if (rep.ok) { const copie = rep.clone(); caches.open(CACHE).then(c => c.put("eleves.js", copie)); }
      return rep;
    }).catch(() => caches.match("eleves.js")));
    return;
  }
  e.respondWith((async () => {
    const enCache = await caches.match(e.request, {ignoreSearch: true});
    if (enCache) return enCache;
    try {
      const rep = await fetch(e.request);
      const url = new URL(e.request.url);
      if (rep.ok || rep.type === "opaque") {
        if (url.origin === location.origin || url.host.includes("fonts.g")) {
          const c = await caches.open(CACHE); c.put(e.request, rep.clone());
        }
      }
      return rep;
    } catch (err) {
      if (e.request.mode === "navigate") return caches.match("index.html");
      throw err;
    }
  })());
});
