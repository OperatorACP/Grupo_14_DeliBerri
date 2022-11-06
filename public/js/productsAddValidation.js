window.addEventListener("load", function (e) {
  let formulario = document.querySelector("form.products");

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let campoTitulo = document.querySelector("input.title");

    if (campoTitulo.value == "") {
      errores.push("El campo de nombre del producto debe estar completo.");
    } else if (campoTitulo.value.length <= 5) {
      errores.push(
        "El nombre del producto debe contener al menos 5 caracteres."
      );
    }

    let campoPrecio = document.querySelector("input.price");

    if (campoPrecio.value == "") {
      errores.push("El campo de precio del producto debe estar completo.");
    } else if (campoPrecio.value == "" ) { // <--- NO es un número
      errores.push("El campo de precio del producto debe ser un número.");
    }

    let campoDescripcion = document.querySelector("input.description");

    if (campoDescripcion.value == "") {
      errores.push(
        "El campo de la descripción del producto debe estar completo."
      );
    } else if (campoPrecio.value.length <= 20) {
      errores.push(
        "El campo de la descripción del producto debe contener al menos 20 caracteres."
      );
    }

    let campoPromo = document.querySelector("input.promotion");

    if (campoPromo.value == "") {
      errores.push("Debe elegir una opción del campo de promoción.");
    }

   let campoImagen = document.querySelector("input.image");

    if (campoImagen.value == "") { // <-- archivos JPG, JPEG, PNG ó GIF
      errores.push("Solo se permiten archivos JPG, JPEG, PNG ó GIF");
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
