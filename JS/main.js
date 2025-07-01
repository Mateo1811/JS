const productos = [
    { id: 1, nombre: "Camiseta", precio: 1500 },
    { id: 2, nombre: "Pantalón", precio: 2500 },
    { id: 3, nombre: "Zapatos", precio: 3500 },
];
let carrito = [];

function mostrarProductos(productos) {
    let mensaje = "Productos disponibles:\n";
    for (const producto of productos) {
        mensaje += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    }
    alert(mensaje);
}


function agregarAlCarrito(productos) {
    let opcion = parseInt(prompt("Ingresá el número del producto que querés agregar al carrito:"));
    const producto = productos.find(p => p.id === opcion);
    
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} agregado al carrito.`);
    } else {
        alert("Opción no válida.");
    }
}

// Función 3: mostrarResumen - mostrar resultados de salida
function mostrarResumen(carrito) {
    if (carrito.length === 0) {
        alert("No agregaste ningún producto al carrito. ¡Hasta la próxima!");
        return;
    }

    let total = 0;
    let resumen = "Resumen de tu compra:\n";
    
    for (const producto of carrito) {
        resumen += `- ${producto.nombre} $${producto.precio}\n`;
        total += producto.precio;
    }

    resumen += `Total a pagar: $${total}`;
    alert(resumen);
}

function iniciarSimulador() {
    alert("Bienvenido al simulador de carrito de compras.");
    let salir = false;

    while (!salir) {
        let opcion = prompt(
            "¿Qué querés hacer?\n" +
            "1. Ver productos\n" +
            "2. Agregar producto al carrito\n" +
            "3. Finalizar compra\n" +
            "4. Salir"
        );

        switch (opcion) {
            case "1":
                mostrarProductos(productos);
                break;
            case "2":
                agregarAlCarrito(productos);
                break;
            case "3":
                mostrarResumen(carrito);
                salir = true;
                break;
            case "4":
                alert("Gracias por visitar nuestra tienda.");
                salir = true;
                break;
            default:
                alert("Opción no válida.");
        }
    }
}

iniciarSimulador();