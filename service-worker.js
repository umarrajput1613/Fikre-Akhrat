const CACHE_NAME = "fikre-akhrat-v1";

const urlsToCache = [
  "/Fikre-Akhrat/",
  "/Fikre-Akhrat/index.html",
  "/Fikre-Akhrat/style.css",
  "/Fikre-Akhrat/app.js"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME).then(cache => {

      return cache.addAll(urlsToCache);

    })

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request).then(response => {

      return response || fetch(event.request);

    })

  );

});
