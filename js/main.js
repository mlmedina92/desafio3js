//clase: molde de objetos 
class Producto {
    //funcion constructora de objetos:
    constructor(nombre, descripcion, fabricante, precio){ 
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.fabricante = fabricante,
        this.precio = precio 
    } 
    //metodos de la clase: 
    obtenerDetalles() {
        return "Nombre: " + this.nombre + "\n" +
               "Descripción: " + this.descripcion + "\n" +
               "Fabricante: " + this.fabricante + "\n" +
               "Precio: " + this.precio ;
    }
}

//instanciacion del ARREGLO de objetos.
//no  guardo los objetos  en una variable, los guardo en una posicion del arreglo
let productos = [
    new Producto("Producto Nº1", "Descripción producto Nº1", "fabricante 1", 123),
    new Producto("Producto Nº2", "Descripción producto Nº2", "fabricante 2", 123),
    new Producto("Producto Nº3", "Descripción producto Nº3", "fabricante 3", 123)
];

//funcion que me retorna el nombre del producto y la posicion de él en el arreglo
function listarProductos(){
    let nombres = "";
    for(let i = 0; i < productos.length; i++){
        nombres += i + " - " + productos[i].nombre + "\n";
    } 
    return nombres;
};

//interaccion con el usuario : 
let opcion = parseInt(prompt("¿De qué producto desea saber más?\n" + listarProductos()));

if(isNaN(opcion) || opcion < 0 || opcion >= productos.length ){
    alert("opcion invalida");
}else {
    alert(productos[opcion].obtenerDetalles());
}

// para obtener los detales del producto num 2: productos[2].obtenerDetalles()