const CACHE_NAME = "amoricana-cache";
const urlsToCache = ["index.html"];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// // Listen for requests
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then(() => {
//       return fetch(event.request).catch(() => caches.match("offline.html"));
//     })
//   );
// });

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        // eslint-disable-next-line array-callback-return
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
