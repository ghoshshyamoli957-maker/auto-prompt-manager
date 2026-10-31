// Service Worker for PWA Installation and Offline Caching
const CACHE_NAME = 'prompt-mgr-v1';
const urlsToCache = [
  './index.html',
  './manifest.webmanifest',
  './content.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});