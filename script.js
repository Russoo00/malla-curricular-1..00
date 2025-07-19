const mensajeFelicitacion = document.getElementById('mensaje-felicitacion');
let timeoutId = null;

function toggleAprobado(element) {
  const yaEstabaAprobado = element.classList.contains('aprobado');
  element.classList.toggle('aprobado');

  if (!yaEstabaAprobado) {
    mostrarFelicitacion();
  }

  guardarEstado();
}

function mostrarFelicitacion() {
  mensajeFelicitacion.textContent = "✨ ¡Felicidades Antonia, eres la mejor! ✨";
  mensajeFelicitacion.classList.add('visible');

  if (timeoutId) clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    mensajeFelicitacion.classList.remove('visible');
  }, 3000);
}

function guardarEstado() {
  const estados = Array.from(document.querySelectorAll('.ramo')).map(div =>
    div.classList.contains('aprobado')
  );
  localStorage.setItem('estadoRamos', JSON.stringify(estados));
}

function cargarEstado() {
  const estados = JSON.parse(localStorage.getItem('estadoRamos') || '[]');
  document.querySelectorAll('.ramo').forEach((div, i) => {
    if (estados[i]) div.classList.add('aprobado');
  });
}

cargarEstado();
