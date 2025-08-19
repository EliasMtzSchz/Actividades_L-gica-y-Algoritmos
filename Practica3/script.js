// Arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa", disponible:true },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica",disponible:false },
    { nombre: "Libro", precio: 12, categoria: "Educación", disponible:true },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa", disponible:false},
    { nombre: "Celular", precio: 600, categoria: "Electrónica", disponible:true },
];

// Productos que cuestan menos de $100:
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos que cuestan menos de $100:");
console.log(productosBaratos);

// Ordenar productos con precio menor de $100 por nombre alfabéticamente:
const productosBaratosOrdenados = productosBaratos.sort((a, b) => {
if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
    return -1;
} else if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
    return 1;
};
return 0;
});

console.log("Productos baratos ordenados alfabéticamente:");
console.log(productosBaratosOrdenados);

// Generarun nuevo arreglo con los nombres de los productos que cuestan menos de $100:
const nombresProductosBaratos = productosBaratos.map(producto => producto.nombre);
console.log("Nombres de productos que cuestan menos de $100:");
console.log(nombresProductosBaratos);

// Evaluar si todos los productos están disponibles.
if (productos.every((producto) => { return producto.disponible ===true})){
    console.log("Todos los productos están disponibles.");
} else{
    console.log("Hay productos no disponibles.");
};

// Costo total de productos dentro de la categoría de Electrónica.

costoInicial = 0;
const productosSeleccionados = productos.filter(producto => { return producto.categoria === "Electrónica"})
//.map((producto) => {return producto.nombre && producto.precio}) // Nos dimos cuenta que no era necesario este map.
.reduce((acumulador,elemento)=> {return acumulador + elemento.precio}, costoInicial);

console.log(`El costo total de los productos que entran dentro de la categoría de Electrónica es:`)
console.log(productosSeleccionados);





