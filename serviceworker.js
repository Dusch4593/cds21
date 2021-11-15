const assetsName = "PWA_ASSETS"
const urls = [
  "/",
  "/js/app.js",
  "/js/handlers.js",
  "/data/activities.json",
  "/styles.css"
]

// Install, or precache, the assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(assetsName)
    .then(cache => {
      cache.addAll(urls)
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Even if response exists in cache, it is fetched and updates the cache for the
        let fetchPromise = fetch(event.request)
          .then(networkResponse => {
            caches.open(assetsName).then(cache => {
              cache.put(event.request, networkResponse.clone())
              return networkResponse
            })
          })
        
          return response || fetchPromise
      })
  )
})

// Create a custom HTTP response with 'fetch' event
// self.addEventListener('fetch', event => {
//   const response = new Response(`service worker responding for ${event.request.url}`);
//   event.respondWith(response); // HTTP response, or a promise of an HTTP response
// })

// Cache First
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request) // searching the cache  
//     .then(res => {
//       if(res) return res // CACHE HIT 

//       return fetch(event.request) // CACHE MISS! Return a network fetch, instead.
//     })
//   )
// })

// Synthesizing responses (troubleshooting)
// self.addEventListener("fetch", event => {
//     const response = new Response(`service worker responding for ${event.request.url}`);
//     event.respondWith(response); // HTTP response, or a promise of an HTTP response
// });