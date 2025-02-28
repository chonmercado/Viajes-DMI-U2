self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalado');
  event.waitUntil(
    caches.open('mihotel-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/favicon.ico',
        '/static/js/bundle.js',
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/css/main.css',
        '/assets/icon.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== 'mihotel-cache-v1') {
            console.log('[Service Worker] Eliminando caché antiguo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
