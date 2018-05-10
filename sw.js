const CACHE_NAME = 'italian-coders-v2';

const FILES = [
  './index.html',
  './style.css',
  './index.js',
  './manifest.json',
  "https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto",
  "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
  './sw.js',
  './'
]

// caches = Cache Storage API
// Cache = Cache API
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
  )
  
  // aggiornamento
  caches.keys()
    .then(
      cachesName => cachesName.map(name => {
        if(name != CACHE_NAME){
          caches.delete(name)
        }
      })
    )
})


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(
        Response => Response ? Response : fetch(event.request)
      )
  )
})