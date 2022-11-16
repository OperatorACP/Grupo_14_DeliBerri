window.addEventListener("load", function (e) {
  let formulario = document.querySelector("form.register");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = [];

    let campoNombre = document.querySelector("input#name");

    if (campoNombre == "") {
      errores.push("El campo de nombre del usuario debe estar completo.");
    } else if (campoNombre.length <= 1) {
      errores.push(
        "El nombre del usuario debe contener al menos 2 caracteres."
      );
    }

    let campoApellido = document.querySelector("input#lastname");

    if (campoApellido == "") {
      errores.push("El campo de apellido del usuario debe estar completo.");
    } else if (campoApellido.length <= 1) {
      errores.push(
        "El apellido del usuario debe contener al menos 2 caracteres."
      );
    }

    let campoUsuario = document.querySelector("input#user");

    if (campoUsuario == "") {
      errores.push("El campo de usuario debe estar completo.");
    } else if (campoUsuario.length <= 1) {
      errores.push("El usuario debe contener al menos 2 caracteres.");
    }

    let campoEmail = document.querySelector("input#email");

    if (campoEmail == "") {
      errores.push("El campo de email debe estar completo.");
    }

    let campoAvatar = document.querySelector("input#avatar");

    if (campoAvatar == "") {
      errores.push("Solo se permiten archivos JPG, JPEG, PNG ó GIF");
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
