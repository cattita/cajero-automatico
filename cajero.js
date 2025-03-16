// Cuentas disponibles 
const cuentas = [
    { nombre: "Magaly Rivas", saldo: 890, password: "0425" },
    { nombre: "Javier Montoya", saldo: 630, password: "2789" },
    { nombre: "Leo Padilla", saldo: 250, password: "1963" }
];

let cuentaSeleccionada = null;
let operacionActual = null;

// Seleccionar cuenta
function seleccionarCuenta(index) {
    cuentaSeleccionada = cuentas[index];
    document.getElementById("SeleccionarCuenta").classList.add("hidden");
    document.getElementById("ingresoPassword").classList.remove("hidden");
}

// Ingresar password
function validarPassword() {
    const passwordIngresado = document.getElementById("password").value;
    if (passwordIngresado === cuentaSeleccionada.password) {
        document.getElementById("ingresoPassword").classList.add("hidden");
        document.getElementById("opcionesCuenta").classList.remove("hidden");
        document.getElementById("nombreCuenta").textContent = cuentaSeleccionada.nombre;
    } else {
        document.getElementById("mensajeError").classList.remove("hidden");
    }
}

// Consultar saldo
function consultarSaldo() {
    alert(`El saldo actual de ${cuentaSeleccionada.nombre} es: $${cuentaSeleccionada.saldo}`);
}

// Ingresar monto
function ingresarMonto() {
    operacionActual = 'ingresar';  // Establecer que es una operación de ingreso
    document.getElementById("opcionesCuenta").classList.add("hidden");
    document.getElementById("ingresoMonto").classList.remove("hidden");
    document.getElementById("monto").value = "";
    document.getElementById("monto").focus();
}

// Retirar monto
function retirarMonto() {
    operacionActual = 'retirar';  // Establecer que es una operación de retiro
    document.getElementById("opcionesCuenta").classList.add("hidden");
    document.getElementById("ingresoMonto").classList.remove("hidden");
    document.getElementById("monto").value = "";
    document.getElementById("monto").focus();
}

// Procesar el monto (ingresar o retirar)
function procesarMonto() {
    const monto = parseFloat(document.getElementById("monto").value);
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor ingresa un monto válido.");
        return;
    }

    // Verificar ingreso
    if (operacionActual === 'ingresar') {
        if (monto <= (990 - cuentaSeleccionada.saldo)) {
            cuentaSeleccionada.saldo += monto;
            alert(`Se ingresó $${monto}. Nuevo saldo: $${cuentaSeleccionada.saldo}`);
            document.getElementById("ingresoMonto").classList.add("hidden");
            document.getElementById("opcionesCuenta").classList.remove("hidden");
        } else {
            alert("No puedes ingresar más de $990.");
        }
    }

    // Verificar retiro
    if (operacionActual === 'retirar') {
        if (monto <= cuentaSeleccionada.saldo) {
            cuentaSeleccionada.saldo -= monto;
            alert(`Se retiró $${monto}. Nuevo saldo: $${cuentaSeleccionada.saldo}`);
            document.getElementById("ingresoMonto").classList.add("hidden");
            document.getElementById("opcionesCuenta").classList.remove("hidden");
        } else {
            alert("No tienes suficiente saldo para realizar este retiro.");
        }
    }
}

// Cancelar la operación
function cancelarOperacion() {
    document.getElementById("ingresoMonto").classList.add("hidden");
    document.getElementById("opcionesCuenta").classList.remove("hidden");
}
