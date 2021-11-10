const assetsName = "PWA_ASSETS"
const urls = [
  "/",
  "/js/app.js",
  "/js/handlers.js",
  "/data/activities.json"
]

// Install assets
self.addEventListener('install', event => {
  caches.open(assetsName)
    .then(cache => {
      cache.addAll(urls)
    })
})

// Cache First
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request) // searching the cache  
    .then(res => {
      let fetchPromise = fetch(event.request)
        .then(networkRes => {
          caches.open(assetsName).then(cache => {
            
          })
        })
        if(res) return res;

        return fetch(event.request)
      })
  )
})
