const VERSION = "v1.0.2";
const CACHE_NAME = `edugincana-${VERSION}`;
const ORIGIN = self.location.origin;
const ASSET_PATHS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];
const CACHE_URLS = ASSET_PATHS.map((path) => new URL(path, ORIGIN).toString());
const INDEX_URL = new URL("./index.html", ORIGIN).toString();

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
            return Promise.resolve();
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => cached);
    })
  );
});

async function handleNavigationRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(INDEX_URL);
  if (cached) {
    return cached;
  }
  try {
    const response = await fetch(request);
    cache.put(INDEX_URL, response.clone());
    return response;
  } catch (error) {
    return new Response("Sense connexió i sense memòria cau disponible.", {
      status: 503,
      statusText: "Sense connexió",
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
