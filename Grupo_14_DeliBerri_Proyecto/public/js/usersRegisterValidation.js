window.addEventListener("load", function (e) {
  let formulario = document.querySelector("form.register");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = [];

    let campoNombre = document.querySelector("input#name");

    if (campoNombre.value == "") {
      errores.push("El campo de nombre del usuario debe estar completo.");
    } else if (campoNombre.value.length <= 1) {
      errores.push(
        "El nombre del usuario debe contener al menos 2 caracteres."
      );
    }

    let campoApellido = document.querySelector("input#lastname");

    if (campoApellido.value == "") {
      errores.push("El campo de apellido del usuario debe estar completo.");
    } else if (campoApellido.value.length <= 1) {
      errores.push(
        "El apellido del usuario debe contener al menos 2 caracteres."
      );
    }

    let campoUsuario = document.querySelector("input#user");

    if (campoUsuario.value == "") {
      errores.push("El campo de usuario debe estar completo.");
    } else if (campoUsuario.value.length <= 1) {
      errores.push("El usuario debe contener al menos 2 caracteres.");
    }

    let campoEmail = document.querySelector("input#email");

    if (campoEmail.value == "") {
      errores.push("El campo de email debe estar completo.");
    }

    let campoContraseña = document.querySelector("input#password");

    if (campoContraseña.value == "") {
      errores.push("El campo de contraseña debe estar completo.");
    } else if (campoContraseña.value.length <= 7) {
      errores.push(
        "El campo de contraseña debe contener al menos 8 caracteres."
      );
    }

    let campoCumpleaños = document.querySelector("input#date");

    if (campoCumpleaños.value == "") {
      errores.push("Debes asignar una fecha de nacimiento.");
    } else if (campoCumpleaños.value > "2004-11-16") {
      errores.push("Debes ser mayor de edad para registrarte.");
    }

    let campoAvatar = document.querySelector("input#avatar");

    if (campoAvatar.value == "") {
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
