console.log('Service Worker Started', self);

self.addEventListener('install', function(event) {
  // Fired when this file is new or changed
  // Good time to cache files
  console.log("here");
});

self.addEventListener('activate', function(event) {
  // Installation successful, no pages using old version
  // Good time to clean up caches, etc.
  console.log("here");
});


self.addEventListener('push', function(event) {
  console.log('Service Worker recived a push message', event.data.text());

  var title = 'Click to open push message';
  event.waitUntil(
    self.registration.showNotification(title, {
      'body': event.data.text(),
      'icon': 'images/icon.png'
    }));
});