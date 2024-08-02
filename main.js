let monedas = document.getElementById('monedas');

monedas.textContent = 0;

function aumentarMonedas() {
  monedas.textContent++;
} setInterval(aumentarMonedas, 10000);



if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
          console.error('Error al registrar el Service Worker:', error);
        });
    });
  }
  


