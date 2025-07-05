function mostrarMas() {
  const parrafo = document.getElementById("extra-info");
  const textoBoton = document.getElementById("toggleText");

  if (parrafo.style.display === "none") {
    parrafo.style.display = "block";
    textoBoton.textContent = "Mostrar menos";
  } else {
    parrafo.style.display = "none";
    textoBoton.textContent = "Mostrar más";
  }
}



document.addEventListener("DOMContentLoaded", () => 
{
    const foto = document.getElementById("foto-perfil");

    foto.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
    });
});

// Marcar el checkbox si estás en la página en inglés
    window.addEventListener("DOMContentLoaded", () => {
        if (location.href.includes("English/")) {
            document.getElementById("Idioma").checked = true;
        }
    });

    // Cambiar entre páginas al cambiar el estado del checkbox
    let cambioIdioma = document.getElementById("Idioma");

    cambioIdioma.addEventListener("change", function () {
        if (cambioIdioma.checked) {
            // Ir a la versión en inglés
            location.href = "/CV-virtual/English/index.html"";
        } else {
            // Ir a la versión en español
            location.href = "/CV-virtual/index.html";
        }
    });
