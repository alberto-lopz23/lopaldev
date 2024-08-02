// service-worker.js

const CACHE_NAME = 'my-cache-v1';
const URLs_TO_CACHE = [
  '/',
  '/styles/main.css',
  '/script/main.js',
  '/images/logo.png' // Asegúrate de que esta ruta sea válida o elimínala si no es necesaria
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Archivos en caché:', URLs_TO_CACHE);
        return cache.addAll(URLs_TO_CACHE);
      })
  );
});

// Intercepción de las solicitudes para servir desde el caché
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - retornar la respuesta desde el caché
        if (response) {
          return response;
        }
        return fetch(event.request); // Si no está en caché, obtener desde la red
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


// si serias tan amable de ayudarme a arreglar este problema con el caché 
// if you can please help me fix this problem with the cache