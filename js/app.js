// Lista de productos disponibles
const productos = [
  {
    id: 1,
    nombre: 'Yogurt Borojo',
    precio: 8300,
  },
  {
    id: 2,
    nombre: 'Yogurt Kiwi',
    precio: 9100,
  },
];

// Función para mostrar el mensaje de compra durante 2 segundos
function mostrarMensajeCompra() {
  const mensajeCompra = document.getElementById('mensaje-compra');
  mensajeCompra.style.display = 'block'; // Mostrar el mensaje

  setTimeout(function () {
      mensajeCompra.style.display = 'none'; // Ocultar el mensaje después de 2 segundos
  }, 2000);
}

// Event listener para botones de compra
document.querySelectorAll('.btn-borojo, .btn-kiwi').forEach((btn) => {
  btn.addEventListener('click', () => {
    const productoId = btn.dataset.id;
    const producto = productos.find((p) => p.id == productoId);

    if (producto) {
      // Verificar si el producto ya está en el carrito
      const nombresItemsCarrito = document.querySelectorAll('#lista-carrito li h3');
      const titulo = producto.nombre;
      for (var i = 0; i < nombresItemsCarrito.length; i++) {
        if (nombresItemsCarrito[i].innerText == titulo) {
          mostrarMensajeCompra(); // Mostrar el mensaje de compra
          return;
        }
      }

      // Si el producto no está en el carrito, agregarlo
      agregarAlCarrito(producto);

      // Deshabilitar el botón de "Comprar" para este producto
      btn.disabled = true;
    }
  });
});

// Event listener para botones de eliminación y ajuste de cantidad
document.getElementById('lista-carrito').addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar-producto')) {
    const productoId = e.target.dataset.id;
    eliminarProducto(productoId);
  } else if (e.target.classList.contains('incrementar-cantidad')) {
    const productoId = e.target.dataset.id;
    incrementarCantidad(productoId);
  } else if (e.target.classList.contains('decrementar-cantidad')) {
    const productoId = e.target.dataset.id;
    decrementarCantidad(productoId);
  }
});

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total-carrito');

  // Crear un elemento de lista para el producto
  const itemCarrito = document.createElement('li');
  itemCarrito.dataset.id = producto.id;
  itemCarrito.dataset.precio = producto.precio;
  itemCarrito.dataset.cantidad = 1; // Inicialmente, hay 1 producto
  itemCarrito.innerHTML = `
    ${producto.nombre} - $${producto.precio} - Cantidad: <span>${itemCarrito.dataset.cantidad}</span>
    <button class="eliminar-producto" data-id="${producto.id}" style="background-color: #ff5555; color: black; display: block; hover: ">Eliminar</button>
    <button class="incrementar-cantidad" data-id="${producto.id}">+</button>
    <button class="decrementar-cantidad" data-id="${producto.id}">-</button>
  `;

  // Agregar el producto al carrito
  listaCarrito.appendChild(itemCarrito);

  // Actualizar el total
  let total = parseFloat(totalCarrito.textContent);
  total += producto.precio;
  totalCarrito.textContent = total;

  // Mostrar la ventana del carrito
  document.getElementById('carrito').style.display = 'block';
}

// Función para eliminar un producto del carrito
function eliminarProducto(productoId) {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total-carrito');

  // Buscar el producto en la lista
  const itemProducto = listaCarrito.querySelector(`li[data-id="${productoId}"]`);
  if (itemProducto) {
    // Obtener el precio y la cantidad del producto a eliminar
    const precioProducto = parseFloat(itemProducto.dataset.precio);
    const cantidadProducto = parseInt(itemProducto.dataset.cantidad);

    // Eliminar el producto de la lista
    listaCarrito.removeChild(itemProducto);

    // Actualizar el total
    let total = parseFloat(totalCarrito.textContent);
    total -= precioProducto * cantidadProducto;
    totalCarrito.textContent = total;

    // Si la lista está vacía, ocultar la ventana del carrito
    if (listaCarrito.children.length === 0) {
      document.getElementById('carrito').style.display = 'none';
    }
  }
}

// Función para incrementar la cantidad de un producto
function incrementarCantidad(productoId) {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total-carrito');

  // Buscar el producto en la lista
  const itemProducto = listaCarrito.querySelector(`li[data-id="${productoId}"]`);
  if (itemProducto) {
    // Obtener el precio y la cantidad actual del producto
    const precioProducto = parseFloat(itemProducto.dataset.precio);
    let cantidadProducto = parseInt(itemProducto.dataset.cantidad);

    // Incrementar la cantidad
    cantidadProducto++;
    itemProducto.dataset.cantidad = cantidadProducto;
    itemProducto.querySelector('span').textContent = cantidadProducto;

    // Actualizar el total
    let total = parseFloat(totalCarrito.textContent);
    total += precioProducto;
    totalCarrito.textContent = total;
  }
}

// Función para decrementar la cantidad de un producto
function decrementarCantidad(productoId) {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total-carrito');

  // Buscar el producto en la lista
  const itemProducto = listaCarrito.querySelector(`li[data-id="${productoId}"]`);
  if (itemProducto) {
    // Obtener el precio y la cantidad actual del producto
    const precioProducto = parseFloat(itemProducto.dataset.precio);
    let cantidadProducto = parseInt(itemProducto.dataset.cantidad);

    // Decrementar la cantidad, asegurándose de que no sea menor que 1
    if (cantidadProducto > 1) {
      cantidadProducto--;
      itemProducto.dataset.cantidad = cantidadProducto;
      itemProducto.querySelector('span').textContent = cantidadProducto;

      // Actualizar el total
      let total = parseFloat(totalCarrito.textContent);
      total -= precioProducto;
      totalCarrito.textContent = total;
    }
  }
}


// Event listener para el botón "Pagar"
document.getElementById('pagar-btn').addEventListener('click', () => {
  const ventanaPago = document.getElementById('ventana-pago');
  ventanaPago.style.display = 'block'; // Mostrar la ventana de pago
});

// Event listener para el botón "Confirmar Pago"
document.getElementById('confirmar-pago-btn').addEventListener('click', () => {
  // Aquí puedes implementar la lógica de pago
  mostrarMensajeCompra();
  // Cierra la ventana de pago después del pago exitoso
  const ventanaPago = document.getElementById('ventana-pago');
  ventanaPago.style.display = 'none';
});

// Event listener para el botón "Cerrar" de la ventana de pago
document.getElementById('cerrar-ventana-pago').addEventListener('click', () => {
  const ventanaPago = document.getElementById('ventana-pago');
  ventanaPago.style.display = 'none'; // Ocultar la ventana de pago al cerrarla
});

