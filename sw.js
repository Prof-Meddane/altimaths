const VERSION = "v3.0"; // ← augmenter à chaque mise à jour du contenu (v2.1.3, v2.1.4…)
const CACHE = "altimaths-" + VERSION;
const FICHIERS = [
  "./", "index.html", "contenu.js", "python.js", "eleves.js", "config-firebase.js", "firebase-alti.js", "manifest.webmanifest",
  "katex/katex.min.css", "katex/katex.min.js", "katex/auto-render.min.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"
];
// Fichiers toujours relus sur le réseau quand c'est possible (le contenu change souvent)
const FRAIS = ["/", "/index.html", "/contenu.js", "/python.js", "/eleves.js", "/manifest.webmanifest"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // cache: "reload" : on ignore le cache du navigateur pour récupérer la vraie dernière version
    await c.addAll(FICHIERS.map(u => new Request(u, {cache: "reload"})));
    const polices = ["KaTeX_Main-Regular","KaTeX_Main-Bold","KaTeX_Main-Italic","KaTeX_Math-Italic","KaTeX_AMS-Regular","KaTeX_Size1-Regular","KaTeX_Size2-Regular","KaTeX_Size3-Regular","KaTeX_Size4-Regular"];
    await Promise.all(polices.map(p => c.add(new Request("katex/fonts/" + p + ".woff2", {cache: "reload"})).catch(() => {})));
    self.skipWaiting();
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
  if (url.origin !== location.origin && !url.host.includes("fonts.g")) return; // météo et classement : réseau uniquement
  const chemin = url.pathname.replace(/^.*\/altimaths/i, "") || "/";
  const frais = url.origin === location.origin && (e.request.mode === "navigate" || FRAIS.some(f => chemin === f || chemin.endsWith(f)));
  if (frais) {
    // Réseau d'abord (version la plus récente), copie locale si pas de connexion
    e.respondWith((async () => {
      try {
        const rep = await fetch(url.href, {cache: "no-cache"});
        if (rep.ok) { const copie = rep.clone(); caches.open(CACHE).then(c => c.put(e.request.mode === "navigate" ? "index.html" : url.pathname.split("/").pop() || "index.html", copie)); }
        return rep;
      } catch (err) {
        const nom = e.request.mode === "navigate" ? "index.html" : (url.pathname.split("/").pop() || "index.html");
        return (await caches.match(nom)) || (await caches.match(e.request, {ignoreSearch: true})) || caches.match("index.html");
      }
    })());
    return;
  }
  // Le reste (KaTeX, icônes, Firebase, polices) : copie locale d'abord
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
