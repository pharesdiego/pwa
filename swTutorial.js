var CACHE_NAME = 'italian-coders-v3'

var FILES = [
	'./index.html',
	'./index.js',
	'./swTutorial.js',
	'./style.css',
	'./',
	'./manifest.json',
	'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
	'https://fonts.googleapis.com/css?family=Permanent+Marker|Roboto'
]
// caches = CacheStorage API
// Cache = Cache API
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(
				Cache => Cache.addAll(FILES)
			)
	)

	// update caches
	caches.keys().then(cacheNames => cacheNames.map(name => {
    if(name != CACHE_NAME) {
      return caches.delete(name);
    }
  }))

})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
			.then(
				Response => Response ? Response : fetch(event.request)
			)
	)
})
