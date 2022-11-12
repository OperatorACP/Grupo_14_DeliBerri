window.addEventListener("load", function (e) {
  let formulario = document.querySelector("form.register");

  formulario.addEventListener("submit", function (e) {
      e.preventDefault();
    let errores = [];

    let campoNombre = document.querySelector("input#name");

    if (campoNombre.value == "") {
      errores.push("El campo de nombre del usuario debe estar completo.");
    } else if (campoNombre.value.length <= 2) {
      errores.push(
        "El nombre del usuario debe contener al menos 2 caracteres."
      );
    }

    let campoApellido = document.querySelector("input#lastname");

    if (campoApellido.value == "") {
      errores.push("El campo de apellido del usuario debe estar completo.");
    } else if (campoApellido.value.length <= 2) {
      errores.push(
        "El apellido del usuario debe contener al menos 2 caracteres."
      );
    }

    let campoUsuario = document.querySelector("input#user");

    if (campoUsuario.value == "") {
      errores.push("El campo de usuario debe estar completo.");
    } else if (campoUsuario.value.length <= 2) {
      errores.push("El usuario debe contener al menos 2 caracteres.");
    }

    let campoEmail = document.querySelector("input#email");

    if (campoEmail.value == "") {
      errores.push("El campo de email debe estar completo.");
    }

    let campoContraseña = document.querySelector("input#password");

    if (campoContraseña.value == "") {
      errores.push("El campo de contraseña debe estar completo.");
    } else if (campoContraseña.value.length <= 8) {
      errores.push(
        "El campo de contraseña debe contener al menos 8 caracteres."
      );
    }

   //  let campoCumpleaños = document.querySelector("input#birthDate");

   //  if (campoCumpleaños.value == "") {
   //    errores.push("El campo de cumpleaños debe estar completo.");
   //  }

   //  let campoNacionalidad = document.querySelector("input#nationality");

   //  if (campoNacionalidad.value == "") {
   //    errores.push("Debe elegir una opción del campo de nacionalidad.");
   //  }

    let campoInteres = document.querySelector("input#interestCategory");

    if (campoInteres == "") {
      errores.push("Debe elegir al menos una opción cómo categoría de interés.");
    }

   let campoAvatar = document.querySelector("input#avatar");

   if (campoAvatar.value == "") {
     // <-- archivos JPG, JPEG, PNG ó GIF
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
