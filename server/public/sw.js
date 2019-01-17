const filesToCache = [
  '/',
  'dist/app.css',
  'dist/app.bundle.js',
];

const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  'dist/app.css',
  'dist/app.bundle.js',
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v0.0.111')
      .then(cache => cache.addAll(filesToCache)),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }
        );
      })
  );
});
