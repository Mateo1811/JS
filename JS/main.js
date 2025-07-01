document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { id: 1, nombre: "Camiseta", precio: 1500 },
    { id: 2, nombre: "Pantalón", precio: 2500 },
    { id: 3, nombre: "Zapatos", precio: 3500 },
    { id: 4, nombre: "Shorts", precio: 1800 },
    { id: 5, nombre: "Campera", precio: 4500 },
    { id: 6, nombre: "Buzo", precio: 3000 },
    { id: 7, nombre: "Gorra", precio: 1200 }
  ];

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const productosContainer = document.getElementById("productos-container");
  const carritoLista = document.getElementById("carrito-lista");
  const carritoTotal = document.getElementById("carrito-total");
  const finalizarBtn = document.getElementById("finalizar-btn");

  function mostrarProductos() {
    productosContainer.innerHTML = "";
    productos.forEach(producto => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
      `;
      productosContainer.appendChild(div);
    });
  }

  window.agregarAlCarrito = function(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
      const item = carrito.find(i => i.producto.id === id);
      if (item) {
        item.cantidad++;
      } else {
        carrito.push({ producto: producto, cantidad: 1 });
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    }
  };

  function actualizarCarrito() {
    carritoLista.innerHTML = "";
    let total = 0;
    carrito.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.producto.nombre} x${item.cantidad} - $${item.producto.precio * item.cantidad}`;
      carritoLista.appendChild(li);
      total += item.producto.precio * item.cantidad;
    });
    carritoTotal.textContent = `Total a pagar: $${total}`;
  }

  finalizarBtn.addEventListener("click", () => {
    if (carrito.length === 0) {
      carritoTotal.textContent = "No agregaste productos al carrito.";
      return;
    }
    carritoTotal.textContent += "\n¡Gracias por tu compra!";
    localStorage.removeItem("carrito");
    carrito = [];
    actualizarCarrito();
  });

  mostrarProductos();
  actualizarCarrito();
});