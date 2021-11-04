
///Ingresar nombre si no ingresa el nombre solo saluda
function dataBinding() {
    let nombreUsuario = document.getElementById("nombredelUsuario").value;
    document.getElementById("saludoUsuario").innerHTML =
        `<p> Hola ${nombreUsuario} <p>`

}

//Ingreso edad usuario////////////////

window.onload = ingreso;
$('#idBoton').on('click', ingreso);

function ingreso() {
    $('#mayor').on("click", hola);
    $('#menor').on("click", adios);
}


function hola(e) {
    e.preventDefault()
    $("#ingreso").css('display', 'none');
    $("#ingreso").css('visibility', 'hidden');
    $("#ingreso").css('opacity', 0);
    location.href = "index.html#intro";

}

function adios(e) {
    e.preventDefault()
    let nombreUsuario = $("#nombredelUsuario").val();
    $("#alerta").append(nombreUsuario, '<p class="alert alert-danger"><b>Lo sentimos!... </b> Debes ser mayor de edad para poder visitar este sitio web</p>');

}

