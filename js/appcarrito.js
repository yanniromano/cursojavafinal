
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

selecColor.addEventListener('change', () => {
    console.log(selecColor.value)
    if (selecColor.value == 'all') {
        mostrarProductos(stockProductos)
    } else {
        mostrarProductos(stockProductos.filter(el => el.color == selecColor.value))
    }
})


mostrarProductos(stockProductos)
function mostrarProductos(array) {
    contenedorProductos.innerHTML = '';
    for (const producto of array) {
        let div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML += `
        <div class="card">
            <div class="card-imagen"><img class="imagen" src=${producto.img}></div>
            <div class="card-title">
                <h2>${producto.nombre}</h2>
                <h3>Precio:$${producto.precio}</h3>
            </div>
            <div class="card-content">
                <p class="titu">Caracteristicas <img src="img/corte-01.png" alt="Aries Cerveceria" width="20%">
                </p>
                <p>Color: ${producto.color}</p>
                <p class="bgclaro"> Sabor: ${producto.sabor}</p>
                <p> Amargor: ${producto.amargor}</p>
                <p class="bgclaro"> Alcohol: ${producto.alcohol}</p>
            </div>
            
            <a id="boton${producto.id}" class="botonseleccion mostrar"> <img src="img/compra-01.svg" alt="Carrito" width=""> Agregar
                al
                carrito</a>
        </div>      
    `
        contenedorProductos.appendChild(div);
        let boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    }
}

$(function () {
    $('a.mostrar').click(function () {
        texto = $(this).text();
        $(this).text('Producto Agregado');
        return false;
    });
});

function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(prodR => prodR.id == id);
    if (repetido) {
        repetido.cantidad = repetido.cantidad + 1;
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id="cantidad${repetido.id}">cantidad: ${repetido.cantidad}</p>`
        actualizarCarrito()
    } else {
        let productoAgregar = stockProductos.find(prod => prod.id == id);
        carritoDeCompras.push(productoAgregar);
        productoAgregar.cantidad = 1;
        actualizarCarrito()
        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p>${productoAgregar.nombre}</p>
                        <p>Precio:$ ${productoAgregar.precio}</p>
                        <p>Selecciona la Cantidad:<input id="cantidad${productoAgregar.id}" type="number" value="1" min="1" max="24"> </p>                        
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                        `
        contenedorCarrito.appendChild(div)
        let input = document.getElementById(`cantidad${productoAgregar.id}`)
        input.addEventListener('change', () => {
            console.log(input.value);
            productoAgregar.cantidad = parseInt(input.value)
            actualizarCarrito()
        })

        let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
        botonEliminar.addEventListener('click', () => {
            botonEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(prodE => prodE.id != productoAgregar.id)
            actualizarCarrito()
        })
    }
}


function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}



//TOMA LOS VALORES Y LO ENVIA POR WHATSAPP
function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}



const formintro = document.querySelector('#formintro');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '5493517014487';


formintro.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let NombreWhatapp = document.querySelector('#NombreWhatapp').value
        let celularWhatsapp = document.querySelector('#celularWhatsapp').value
        let tipopagoWhatapp = document.querySelector('#tipopagoWhatapp').value
        let precioWhatsapp = document.querySelector('#precioTotal');
        let pedidoWhatsapp = document.querySelector('#carrito-contenedor');


        let productos = pedidoWhatsapp.children
        let texto = ""
        for (const producto of productos) {
            console.log(producto);
            const etiquetasP = producto.getElementsByTagName('p');
            console.log(etiquetasP);
            for (const etiqueta of etiquetasP) {
                if (etiqueta.children.length !== 0) {
                    console.log(etiqueta.children[0].value);
                    texto += "cantidad: " + etiqueta.children[0].value + ". ";
                } else {
                    texto += etiqueta.innerHTML + " ";
                }
            }
        }


        let productosPrecios = precioWhatsapp.children
        let valor = ""
        for (const productoPrecio of productosPrecios) {
            console.log(productoPrecio);
            const precioP = productoPrecio.getElementsByTagName('p');
            console.log(precioP);
            for (const precio of precioP) {
                if (precio.children.length !== 0) {
                    console.log(precio.children[0].value);
                    valor += precio.children[0].value + ".";
                } else {
                    valor += precio.innerHTML + " ";
                }
            }
        }


        console.log(texto);
        console.log(valor);
        let mensaje = 'send?phone=' + telefono + '&text= HOLA ARIES! %0A*Mi nombre es:*%0A' + NombreWhatapp + '%0A*Mi número de celular:*%0A' + celularWhatsapp + '%0A*Mi pedido es:*%0A' + texto + '%0A*El precio a pagar es *%0A' + valor + '%0A*Pago mediante:*%0A' + tipopagoWhatapp + ''

        if (isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        } else {
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar'
        buttonSubmit.disabled = false


    });

}
);



