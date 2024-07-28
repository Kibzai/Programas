self.addEventListener('install', (event) => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open('static-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/css/style.css',
                // Agrega aquí otros archivos que deseas cachear
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});