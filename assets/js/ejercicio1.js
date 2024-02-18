document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const nombreInput = document.getElementById("nombre");
  const asuntoInput = document.getElementById("asunto");
  const mensajeInput = document.getElementById("mensaje");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreValue = nombreInput.value.trim();
    const soloTexto = /^[a-zA-Z\s]+$/;
    const asuntoValue = asuntoInput.value.trim();
    const mensajeValue = mensajeInput.value.trim();

    if (
      soloTexto.test(nombreValue) &&
      soloTexto.test(asuntoValue) &&
      soloTexto.test(mensajeValue)
    ) {
      document.querySelector(".resultado").textContent =
        "Formulario enviado con exito";
        document.querySelector(".errorNombre").textContent = "";
        document.querySelector(".errorAsunto").textContent = "";
        document.querySelector(".errorMensaje").textContent = "";

    } else {
      document.querySelector(".resultado").textContent = "";

// Validación del nombre
      if (soloTexto.test(nombreValue)) {
        document.querySelector(".errorNombre").textContent = "";
      } else {
        document.querySelector(".errorNombre").textContent =
          "El nombre es requerido, ingresa un nombre válido (solo letras de la A a la Z)";
      }

// Validación del Asunto
      if (soloTexto.test(asuntoValue)) {
        document.querySelector(".errorAsunto").textContent = "";
      } else {
        document.querySelector(".errorAsunto").textContent =
          "El asunto es requerido, ingresa un asunto válido (solo letras de la A a la Z)";
      }

// Validación del mensaje
      if (soloTexto.test(mensajeValue)) {
        document.querySelector(".errorMensaje").textContent = "";
      } else {
        document.querySelector(".errorMensaje").textContent =
          "El mensaje es requerido, ingresa un mensaje válido (solo letras de la A a la Z)";
      }
    }
  });
});
