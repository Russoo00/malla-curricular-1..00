function toggleAprobado(element) {
  const yaEstabaAprobado = element.classList.contains("aprobado");
  element.classList.toggle("aprobado");

  if (!yaEstabaAprobado) {
    mostrarFelicitacion();
  }

  guardarEstado();
}

function mostrarFelicitacion() {
  const mensaje = document.getElementById("felicitacion");
  mensaje.style.display = "block";
  mensaje.style.opacity = 1;

  setTimeout(() => {
    mensaje.style.opacity = 0;
  }, 2000);

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 2500);
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
