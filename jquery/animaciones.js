//ANIMACION INICIAL
const landing = gsap.timeline({ defaults: { ease: "power1.out" } });

landing.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
landing.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
landing.to(".intro", { y: "-100%", duration: 1 }, "-=1");
landing.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");





//CAMBIAR FONDO
$(".change").on("click", function () {
    if ($(".ingreso").hasClass("dark")) {
        $(".ingreso").removeClass("dark");
        $(".change").text("OFF");
    } else {
        $(".ingreso").addClass("dark");
        $(".change").text("ON");
    }
});


// //SELECCIONA AMARGURA Y PROPONE 
$(function () {
    $('#points').on('input change', function () {
        let element = $('#points');
        value = element.val();
        if (value == "10") {
            $('#value').text("Te gusta la cerveza MUY AMARGA,\n te recomendamos nuestra IPA AAA!");
        } else if (value >= "8") {
            $('#value').text("Te gusta la cerveza AMARGA, \n te recomendamos nuestra cerveza PORTER!");
        } else if (value >= "5") {
            $('#value').text("Te gusta la cerveza SUAVE,\n te recomendamos nuestra cerveza Sumer RED ALE!");
        } else if (value >= "3") {
            $('#value').text("Te gusta la cerveza LIGERA, \n te recomendamos nuestra cerveza HONEY!");
        } else if (value >= "1") {
            $('#value').text("Te gusta la cerveza MUY LIGERA,\n te recomendamos nuestra cerveza AMBER!");
        }


    });
});

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


// SHOW AND HIDE

$(document).ready(function () {
    var lista = $('.showDemo').hide();
    $('#mostrar').click(function () {
        var i = 0;
        (function mostrarimg() {
            lista.eq(i++).fadeIn(400, mostrarimg);

        })();

        $("#mostrar").text("Probalas!");

    });

});




