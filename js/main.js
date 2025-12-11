//arrays para los turnos médicos
const nombresMedicos = [
    "Dr. Pérez - Clínico", 
    "Dra. Johnson - Pediatra", 
    "Dr. Lee - Cardiólogo", 
    "Dra. Brown - Dermatóloga",
    "Dr. Fernández - Traumatólogo",
    "Dra. Alvarez - Ginecóloga"
];

const horariosTurnos = [
    "Lunes 9:00 AM",
    "lunes 10:30 AM",
    "Martes 15:00 PM",
    "Miércoles 11:15 AM",
    "Jueves 17:30 PM",
    "Viernes 8:45 PM",
];

//Arrays para turnos reservados
let turnosMedicosReservados = [];
let turnosHorariosReservados = [];

//Control del ciclo principal
let continuarReservando = true;

//Función para mostrar el menú de turnos disponibles
function mostrarMenuTurnos() {
    let menutexto = "Mediturn 🩺\n";
    menutexto += "-----------------------------------\n\n";
    menutexto += "Turnos Médicos Disponibles:\n";

    for (let i = 0; i < nombresMedicos.length; i++) {
        menutexto += `${i + 1}. ${nombresMedicos[i]} - ${horariosTurnos[i]}\n`;
    };

    menutexto += "\nIngrese el número del turno que desea reservar:";
    menutexto += "\nO escriba \"CONFIRMAR\" para finalizar la reserva de turnos.";
    return menutexto;
}

//Función para agregar un turno a la lista de turnos reservados
function reservarTruno(option) {
    const indice = parseInt(option) - 1;

    if (indice >= 0 && indice < nombresMedicos.length) {
        const medicoSeleccionado = nombresMedicos[indice];
        const horarioSeleccionado = horariosTurnos[indice];

        turnosMedicosReservados.push(medicoSeleccionado);
        turnosHorariosReservados.push(horarioSeleccionado);

        alert(
            `Turno reservado: \n\n${medicoSeleccionado}\n Horario: ${horarioSeleccionado}.`
        );
    } else {
        alert("Opción inválida. Por favor, seleccione un número válido del menú.");
    }
}

//Función para finalizar y mostrar el resumen de turnos reservados
function finalizarReserva() {
    if (turnosMedicosReservados.length === 0) {
        alert("No hay turnos reservados. ¡Gracias por visitar Mediturn!");
        return;
    }

    let resumenTurnos = "--- Resumen de Turnos Reservados ---\n\n";

    for (let i = 0; i < turnosMedicosReservados.length; i++) {
        resumenTurnos += `${i + 1}. ${turnosMedicosReservados[i]} - ${turnosHorariosReservados[i]}\n`;
    }

    console.log("--- Turnos Reservados ---");
    console.log("Médicos:", turnosMedicosReservados);
    console.log("Horarios:", turnosHorariosReservados);

    alert(
        resumenTurnos +
        "\n-----------------------------------\n" +
        "¡Gracias por reservar con Mediturn!"
    );
};

//Ciclo principal de reserva de turnos
while (continuarReservando) {
    let opcionUsuario = prompt(mostrarMenuTurnos());

    if (opcionUsuario === null || opcionUsuario.trim() === "") {
        if (confirm("¿Desea salir del sistema sin reservar turnos?")) {
            continuarReservando = false;
            alert("Gracias por visitar Mediturn. ¡Hasta luego!");
        }
    } else if (opcionUsuario.toUpperCase() === "CONFIRMAR") {
        finalizarReserva();
    } else {
        reservarTruno(opcionUsuario);
    };
};
