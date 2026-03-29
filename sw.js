self.addEventListener('install', e => e.waitUntil(caches.open('fittrack-v1')));
self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request).then(r => r || fetch(e.request))
));
