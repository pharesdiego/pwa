var CACHE_NAME = 'italian-coders-v1';

var FILES = [
  './index.html',
  './index.js',
  './style.css',
  './manifest.json',
  'https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
];

self.addEventListener('install', event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(
        cache => cache.addAll(FILES)
      )
  )

  // update caches
  caches.keys().then(cachesName => cachesName.map(name => {
    if(name != CACHE_NAME) {
      return caches.delete(name);
    }
  }))

})



// fetch files from cache
self.addEventListener('fetch', event => {

  event.respondWith(
    caches.match(event.request)
      .then(
        response => (response) ? response : fetch(event.request)
      )
  )

})
