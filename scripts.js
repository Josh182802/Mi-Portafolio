const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", function () {
    menu.classList.toggle("activo");
});
 
const enlacesMenu = document.querySelectorAll(".menu a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {
        menu.classList.remove("activo");
    });

});

const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function () {

    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        btnTema.textContent = "☀️";
    } else {
        btnTema.textContent = "🌙";
    }

});

const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        btnArriba.classList.add("mostrar");
    } else {
        btnArriba.classList.remove("mostrar");
    }

});

btnArriba.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;

    alert(
        "¡Gracias, " + nombre +
        "! Tu mensaje ha sido recibido."
    );

    formulario.reset();

});

const elementos = document.querySelectorAll(
    ".habilidad, .proyecto, .sobre-texto"
);

const observer = new IntersectionObserver(function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "0.6s ease";

    observer.observe(elemento);

});