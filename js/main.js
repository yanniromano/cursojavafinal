//EJERCICIO CALSE 03 Y 04 CON CORRECCIONES//
let usuarioMayor = prompt("Tenes 18 o mas años ??? Responde si o no ")
if (usuarioMayor == "si" || usuarioMayor == "SI" || usuarioMayor == "Si" || usuarioMayor == "sI") {
	let amargura = prompt("Queremos ayudarte en tu elección \n ¿Del 1 al 10 que tan amarga te gusta la cerveza? (1 Es lo mas ligero y 10 Es lo mas amargo!)");
	let resultado = grado(amargura);
	alert("Amargura: " + amargura + "\n" + resultado);
	function grado(amargura) {
		if (Number(amargura) == amargura) {
			//SI LA AMARGURA ESTA ENTRE 0 Y 10 SE COMPRUEBA EL RANGO Y DA UN MENSAJE
			if (amargura > 0 && amargura <= 10) {
				if (amargura < 3) {
					return "Te gusta la cerveza muy ligera,\nTe recomendamos nuestra cerveza amber!";
				} else if (amargura <= 5) {
					return "Te gusta la cerveza ligera, \nTe recomendamos nuestra cerveza Honey!";
				} else if (amargura <= 7) {
					return "Te gusta la cerveza SUAVE,\nTe recomendamos nuestra cerveza Sumer Red Ale!";
				} else if (amargura <= 9) {
					return "Te gusta la cerveza AMARGA,\nTe recomendamos nuestra cerveza Porter!";
				} else if (amargura >= 10) {
					return "Te gusta la cerveza MUY AMARGA,\n Te recomendamos nuestra Ipa AAA !";
				}
			}
			//SI EL NUMERO DE LA AMARGURA NO ES ENTRE 0 Y 10
			else {
				return "Algo paso! Ingresa a nuestra web y conoce nuestras variedades!";
			}
		}
	}
	const suma = (a, b) => a + b;
	const resta = (a, b) => a - b;
	const iva = x => x * 0.21;
	let precioLata = 200;
	let precioDescuentoLata = 50;

	let nuevoPrecio = resta(suma(precioLata, iva(precioLata)), precioDescuentoLata);
	let pack = (nuevoPrecio * 6 - 100);

	alert("Producto Oferta primavera \nCerveza Aries Pale Ale 473cc X1 $ " + nuevoPrecio +
		"\nCerveza Aries Pale Ale 473cc X6 $ " + pack);

} else {

	alert("solo vendemos a mayores")

}

//EJERCICIO CALSE 05 Y 06 CON CORRECCIONES/*/
class Producto {
	constructor(id, nombre, precio, amargor, color) {
		this.id = id;
		this.nombre = nombre.toUpperCase();
		this.precio = parseFloat(precio);
		this.amargor = amargor.toUpperCase();
		this.color = color.toUpperCase();
		this.datosCompletos = function () { console.log("Nuestras cervezas son " + this.nombre) }
	}
	sumaIva() {
		this.precio = this.precio * 1.21;
		return this.precio
	}
	nombreCerveza() {
		return this.nombre;
	}
}


const productos = [];
let producto1 = new Producto(1, "Summer Golden", 208, "medio", "rubia")
productos.push(producto1);
productos.push(new Producto(2, "Dunkel", 225, "suave", "negra"));
productos.push(new Producto(3, "Honey", 300, "bajo", "rubia"));
productos.push(new Producto(4, "Ipa", 253, "alto", "rubia"));
productos.push(new Producto(5, "Marzen", 143, "medio", "ambar"));
productos.push(new Producto(6, "Munich", 155, "medio", "rubia"));

for (const producto of productos) {
	console.log(producto.nombre + " " + producto.sumaIva())
}

const buscarIpa = productos.find(producto => producto.nombre === "IPA");
console.log("Encontramos " + buscarIpa);


const descuentoPack = productos.map(producto => producto.precio - 40);
console.log("Precio por unidad llevando el pack " + descuentoPack);

const baratos = productos.filter(producto => producto.precio > 200);
console.log(baratos);

const result = productos.splice(producto => producto.nombre < 4);
console.log(result);

const busqueda = productos.filter(cerveza => cerveza.nombre.includes("e"))
console.log(busqueda);


const buscarTipo = (busqueda, tipoProducto) => {

	const filtro = tienda.filter(producto => producto.tipo === tipoProducto && producto.nombre.includes(busqueda))
	console.log(filtro)
}





/*
const elegirTipoProducto = prompt("Qué tipo de producto desea?")
const busquedaUsuario = prompt("ingrese su busqueda")
buscarTipo(busquedaUsuario, elegirTipoProducto)*/

