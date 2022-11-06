window.addEventListener("load", function (e) {
  let formulario = document.querySelector("form.products");

  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let campoCategoria = document.querySelector("input.name");

    if (campoCategoria.value == "") {
      errores.push("El campo de categoria debe estar completo.");
    } else if (campoCategoria.value.length <= 3) {
      errores.push(
        "El nombre de la categoría debe contener al menos 3 caracteres."
      );
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
