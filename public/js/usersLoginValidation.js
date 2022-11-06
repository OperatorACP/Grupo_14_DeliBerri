window.addEventListener("load", function (e) {
  let formulario = document.querySelector("form.products");

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let campoEmail = document.querySelector("input.email");

    if (campoEmail.value == "") {
      errores.push("El campo de email debe estar completo con uno válido.");
    }

    let campoContraseña = document.querySelector("input.password");

    if (campoContraseña.value == "") {
      errores.push("El campo de contraseña debe estar completo.");
    }

    if (errores.length > 0) {
      e.preventDefault();
    }

    let ulErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  });
});
