var boton = document.querySelector('#cambiarVista');

boton.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');

  document.body.classList.contains('oscuro')
    ? boton.textContent = 'Modo: Oscuro'
    : boton.textContent = 'Modo: Claro';
});