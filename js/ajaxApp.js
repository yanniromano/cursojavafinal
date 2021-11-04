const URLJSON = "data/datos.json"

$("#encontranos").prepend("<h2>Pasión por el arte cervecero </h2><button id='btn1' class= 'jumbotron_boton'>¿Dónde nos encontras ? </button> ");

$("#btn1").click(() => {
    $.getJSON(URLJSON, function (respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;
            for (const dato of misDatos) {
                $("#encontranos").prepend(`<div>                                         
                                         <b>${dato.nombre}</b>
                                         <p>${dato.direccion}</p>
                                         <p>${dato.ciudad}</p>
                                     </div>`);
            }
        }
    })
})






















//EJEMPLO 4

// $(document).ready(function() {
//     const APIURL = 'https://jsonplaceholder.typicode.com/posts';

//     const infoPost = { nombre:"Ana", profesion:"programadora"}

//     $("body").prepend('<button id="btn1">Enviar API</button>');

//     $("#btn1").click( () => {
//         $.ajax({
//             method: "post",
//             url: APIURL,
//             data: infoPost,
//             success: function(respuesta) {
//                 $("body").prepend(
//                     `<div>${respuesta.nombre}</div>
//                     <div>${respuesta.profesion}</div>`
//                 )
//             }
//         })
//     })
// })