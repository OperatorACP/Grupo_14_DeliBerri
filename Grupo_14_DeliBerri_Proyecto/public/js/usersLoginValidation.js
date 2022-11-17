window.addEventListener("load", function (e) {
  let formulario = document.querySelector("form.login");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = [];

    let campoEmail = document.querySelector("input#email");

    if (campoEmail == "") {
      errores.push("El campo de email debe estar completo con uno válido.");
    }

    let campoContraseña = document.querySelector("input#password");

    if (campoContraseña == "") {
      errores.push("El campo de contraseña debe estar completo.");
    }

    if (errores.length > 0) {
      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    } else {
      formulario.submit();
    }
  });
});
