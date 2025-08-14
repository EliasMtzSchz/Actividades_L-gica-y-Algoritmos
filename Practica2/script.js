// Tarea: crear un nuevo arreglo donde todos los nombres empicen con mayúscula.

let alumnos = ["anglea","elías","josé","lizbeth","Maycol","melani","pedro","rodrigo"];
let nuevoAlumnos = [];

for(let i = 0; i < alumnos.length; i++){
    let nombreConMayuscula = `${alumnos[i].charAt(0).toUpperCase()}${alumnos[i].substring(1)}`;
    nuevoAlumnos.push(nombreConMayuscula);
}

console.log(alumnos);
console.log(nuevoAlumnos);

// Practica 2:

let productos = [];

function escogerProducto(producto) {
    if (productos.includes(producto)) {
        console.log(`El producto ${producto} ya ha sido seleccionado.`);
    } else {
        productos.push(producto);
        console.log(`Producto ${producto} agregado a la lista.`);
    }
}

function eliminarProducto(producto) {
    if (productos.includes(producto)){
        const index = productos.indexOf(producto);
        productos.splice(index, 1);
        console.log(`Producto ${producto} eliminado de la lista.`);
    }else{
        console.log(`El producto ${producto} no se encuentra en la lista.`);
    }
}

function mostrarProductos() {
    if (productos.length === 0) {
        console.log("No hay productos seleccionados.");
    } else {
        console.log("Productos seleccionados:");
        for (let i = 0; i < productos.length; i++) {
            console.log(`- ${productos[i]}`);
        }
    }
}

escogerProducto("Manzanas");
escogerProducto("Bananas");
escogerProducto("Naranjas");
mostrarProductos();
eliminarProducto("Bananas");
mostrarProductos();