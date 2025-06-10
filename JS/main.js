const productos = [
    { id: 1, nombre: "Camiseta", precio: 1500 },
    { id: 2, nombre: "Pantalón", precio: 2500 },
    { id: 3, nombre: "Zapatos", precio: 3500 },
];
let carrito = [];

// Función 1: pedirProducto - entrada de datos
function pedirProducto(productos) {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += productos[i].id + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    mensaje += "Ingresa el número del producto que quieres comprar:";
    let opcion = parseInt(prompt(mensaje));
    return opcion;
}

// Función 2: agregarAlCarrito - procesamiento de datos
function agregarAlCarrito(opcion, productos) {
    // Solo 1 condicional para validar producto existente
    if (opcion >= 1 && opcion <= productos.length) {
        let productoElegido = productos[opcion - 1];
        carrito.push(productoElegido);
        console.log(productoElegido.nombre + " agregado al carrito.");
    } else {
        alert("Producto no válido. Por favor intenta de nuevo.");
    }
}

// Función 3: mostrarResumen - mostrar resultados de salida
function mostrarResumen(carrito) {
    let total = 0;
    let resumen = "Resumen de tu compra:\n";
    for (let i = 0; i < carrito.length; i++) {
        resumen += "- " + carrito[i].nombre + " $" + carrito[i].precio + "\n";
        total += carrito[i].precio;
    }
    resumen += "Total a pagar: $" + total;
    alert(resumen);
    console.log("Compra finalizada. Total: $" + total);
}

// Lógica principal
alert("Bienvenido al simulador de carrito de compras.");
let continuar = true;

while (continuar) {
    let opcion = pedirProducto(productos);
    agregarAlCarrito(opcion, productos);
    continuar = confirm("¿Querés agregar otro producto?");
}

mostrarResumen(carrito);