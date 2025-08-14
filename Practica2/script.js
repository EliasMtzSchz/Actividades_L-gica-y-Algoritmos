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

let listaDeCompras = [];

function agregarProducto(producto) {
    if (listaDeCompras.includes(producto)) {
        console.log(`El producto ${producto} ya ha sido seleccionado.`);
    } else {
        listaDeCompras.push(producto);
        console.log(`Producto ${producto} agregado a la lista.`);
    }
}

function eliminarProducto(producto) {
    if (listaDeCompras.includes(producto)){
        const index = listaDeCompras.indexOf(producto);
        listaDeCompras.splice(index, 1);
        console.log(`Producto ${producto} eliminado de la lista.`);
    }else{
        console.log(`El producto ${producto} no se encuentra en la lista.`);
    }
}

function mostrarLista() {
    if (listaDeCompras.length === 0) {
        console.log("No hay productos seleccionados.");
    } else {
        console.log("Productos seleccionados:");
        for (let i = 0; i < listaDeCompras.length; i++) {
            console.log(`- ${listaDeCompras[i]}`);
        }
    }
}

agregarProducto("Manzanas");
agregarProducto("Bananas");
agregarProducto("Naranjas");
mostrarLista();
eliminarProducto("Bananas");
mostrarLista();