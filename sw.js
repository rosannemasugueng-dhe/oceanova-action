const CACHE_NAME = 'oceanova-field-pwa-v1';
const ASSETS = [
  './pwa.html',
  './manifest.json',
  './logo.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
