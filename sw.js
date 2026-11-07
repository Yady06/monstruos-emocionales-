const CACHE='monstruos-tiempo-obligatorio-v7';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./monster-ansiedad.svg','./monster-frustracion.svg','./monster-tristeza.svg','./monster-saturacion.svg','./monster-apatia.svg','./monster-miedo.svg','./monster-confusion.svg','./monster-verguenza.svg','./monster-entusiasmo.svg','./monster-conexion.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))))});
