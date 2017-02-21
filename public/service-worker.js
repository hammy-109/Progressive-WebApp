
var CACHE_NAME = 'Lavalee-v2';
var urlsToCache = [
  '/static/js/main.*.js',
  '/static/js/main.*.js.map',
  '/static/css/main.*.css',
  '/static/css/main.*.css.map',
  '/404.html',
  '/OneSignalSDKUpdaterWorker.js',
  '/OneSignalSDKWorker.js',
  '/asset-manifest.json',
  '/favicon.ico',
  '/index.html',
  '/manifest.json'
];
self.addEventListener('install', function(event) {
  // Fired when this file is new or changed
  // Good time to cache files
  console.log("installing...");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  // Installation successful, no pages using old version
  // Good time to clean up caches, etc.
  console.log("activating...");
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
          console.log('fetch')
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('push', function(event) {
  console.log('Service Worker recieved a push message', event.data.text());

  var title = 'Click to open push message';
  event.waitUntil(
    self.registration.showNotification(title, {
      'body': event.data.text(),
      'icon': 'images/icon.png'
    }));
});