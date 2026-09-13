
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


// MENÚ MÓVIL

menuToggle.addEventListener("click", () => {

  const abierto = nav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(abierto)
  );

});


// CERRAR MENÚ AL NAVEGAR

document.querySelectorAll(".nav a").forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


// EFECTO SUAVE AL HACER SCROLL

const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver(

  (entradas) => {

    entradas.forEach((entrada) => {

      if (entrada.isIntersecting) {

        entrada.target.classList.add("visible");

        observador.unobserve(entrada.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);

elementos.forEach((elemento) => {
  observador.observe(elemento);
});


// AÑO DEL FOOTER

document.getElementById("year").textContent =
  new Date().getFullYear();
