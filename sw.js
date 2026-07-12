const CACHE_NAME = "math-short-q-v1";
const urlsToCache = [
  "./",
  "index.html",
  "style.css",
  "script.js",
  "manifest.json"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache!== CACHE_NAME) return caches.delete(cache);
        })
      );
    })
  );
});
