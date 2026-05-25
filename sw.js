const cacheName = "family-dinner-planner-v13";
const assets = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/dinner-table.svg",
  "./assets/dish-photos/photo-beef-onion.png",
  "./assets/dish-photos/photo-chicken-wings.png",
  "./assets/dish-photos/photo-fish.png",
  "./assets/dish-photos/photo-greens.png",
  "./assets/dish-photos/photo-pork-patty.png",
  "./assets/dish-photos/photo-pork-ribs.png",
  "./assets/dish-photos/photo-steamed-egg.png",
  "./assets/dish-photos/photo-tomato-egg.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
