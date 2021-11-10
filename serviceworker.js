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

self.addEventListener('fetch', event => {

})