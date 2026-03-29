importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyB0s8zJREJTqIr4WOf1tMs8N6mcgyGbmbE",
    authDomain: "fittrackpro-10f58.firebaseapp.com",
    projectId: "fittrackpro-10f58",
    storageBucket: "fittrackpro-10f58.firebasestorage.app",
    messagingSenderId: "676871954500",
    appId: "1:676871954500:web:44e5b6c8d4100d899bdc11"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const n = payload.notification || {};
    self.registration.showNotification(n.title || 'FitTrack Pro', {
        body: n.body || '',
        icon: './icon.png',
        badge: './icon.png',
        vibrate: [200, 100, 200],
    });
});

// Cache strategy
self.addEventListener('install', e => e.waitUntil(caches.open('fittrack-v1')));
self.addEventListener('fetch', e => e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
));
