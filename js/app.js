

document.getElementById('formulario').addEventListener('submit', crear);



function crear(e) {
    e.preventDefault();
    // Capturando valores del input
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let cuantas = document.getElementById('cuantas').value;

    let cerveza = {
        nombre,
        precio,
        cuantas
    }

    if (localStorage.getItem('cervezas') === null) {
        let cervezas = [];
        cervezas.push(cerveza)
        localStorage.setItem('cervezas', JSON.stringify(cervezas))
    } else {
        let cervezas = JSON.parse(localStorage.getItem('cervezas'))
        cervezas.push(cerveza)
        localStorage.setItem('cervezas', JSON.stringify(cervezas))
    }
    leer();

    //Se borran los datos completados en el formulario
    document.getElementById('formulario').reset();

}

function leer() {

    let cervezas = JSON.parse(localStorage.getItem('cervezas'));

    document.getElementById('tbody').innerHTML = "";

    for (let i = 0; i < cervezas.length; i++) {

        let nombre = cervezas[i].nombre;
        let precio = cervezas[i].precio;
        let cuantas = cervezas[i].cuantas;

        document.getElementById('tbody').innerHTML +=
            `
        <tr>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cuantas}</td>
        </tr>
        `
    }
}
leer();