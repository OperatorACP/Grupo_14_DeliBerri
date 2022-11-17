window.addEventListener("load", function (e) {
  let formulario = document.querySelector("form.categories");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let errores = [];

    let campoCategoria = document.querySelector("input#name");

    if (campoCategoria.value == "") {
      errores.push("El campo de categoria debe estar completo.");
    } else if (campoCategoria.value.length <= 3) {
      errores.push(
        "El nombre de la categoría debe contener al menos 3 caracteres."
      );
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