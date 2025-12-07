//arrays para el menu
const nombresProductos = [
    'Café Americano', 
    'Café con Leche', 
    'Capuchino', 
    'Espresso', 
    'Muffin de Arándanos', 
    'Croissant', 
    'Galletas de Chocolate'
];
const preciosProductos = [
    1500, 
    2000, 
    3500, 
    2000, 
    2750, 
    2250, 
    1500];

//array para el carrito
let carritoProductos = [];
let carritoPrecios = [];

//variable de control para el ciclo principal
let continuarComprando = true;

//funcion para mostrar el menu
function mostrarMenu() {
    let menuTexto = "Bienvenido a Coffee House☕\n"
    menuTexto += "-----------------------------------\n\n";
    menuTexto += "--- Menú de Productos ---\n\n";
    for (let i = 0; i <nombresProductos.length; i++){
        menuTexto += `${i + 1}. ${nombresProductos[i]} - $${preciosProductos[i]}\n`;
    }
    menuTexto += "\nIngrese el número del producto que desea agregar al carrito:";
    menuTexto += "o ingrese 'PAGAR' para finalizar su compra.\n";
    return menuTexto;
}

//Funcion agregar al carrito
function agregarAlCarrito(opcion) {
    const indice = parseInt(opcion) - 1;

    //condicional IF/ELSE para validar la opcion ingresada
    if (indice >= 0 && indice < nombresProductos.length){
        const productoSeleccionado = nombresProductos[indice];
        const precioSeleccionado = preciosProductos[indice];

        carritoProductos.push(productoSeleccionado);
        carritoPrecios.push(precioSeleccionado);
        alert(`¡Agregaste ${productoSeleccionado} al carrito por $${precioSeleccionado.toFixed(2)}!`);
    } else {
        alert("Opción inválida. Por favor, seleccione un número válido del menú.");
    }
}

//Funcion finalizar y calcular

function finalizarCompra() {
    if (carritoProductos.length === 0) {
        alert("El carrito está vacío. ¡Vuelva pronto!.");
        return;
    }
    let total = 0;
    let detalleCompra = "--- Detalle de su compra ---\n\n";

    for (let i = 0; i < carritoPrecios.length; i++) {
        total += carritoPrecios[i];
        detalleCompra += `${carritoProductos[i]}....................\$${carritoPrecios[i].toFixed(2)}\n`;

    }
    
    console.log("--- Resumen de Compra ---");
    console.log("Productos adquiridos:", carritoProductos);
    console.log("Total a pagar: $", total.toFixed(2));

    alert(detalleCompra +
        "-----------------------------------\n" +
          `TOTAL A PAGAR: \$${total.toFixed(2)}\n\n` +
          "¡Gracias por tu compra!"
    );

    continuarComprando = false;
}

//Ciclo principal

while (continuarComprando) {
    let opcionUsuario = prompt (mostrarMenu());
    if (opcionUsuario === null || opcionUsuario.trim() === "") {
        if (confirm("¿Estás seguro que quieres cancelar el pedido y salir?")) {
            continuarComprando = false;
            alert ("Pedido cancelado. ¡Vuelve pronto!");
        }
    } else if (opcionUsuario.toUpperCase() === "PAGAR") {
        finalizarCompra();
    } else {
        agregarAlCarrito(opcionUsuario);
    }
}