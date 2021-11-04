//SLIDER CONTACTO

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function () {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .8s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            slider.style.transform = "translate(100px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500)
    }
}

//SCROLL ANIMADO
$(window).scroll(function () {
    if ($(this).scrollTop() > 100)
        $('.scrolltop').fadeIn();
    else
        $('.scrolltop').fadeOut();
});

$(document).ready(function () {
    $('.scrolltop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
})