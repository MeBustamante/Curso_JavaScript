// Primero, defino las tarifas por hora para cada turno.
const tarifaDiurna = 12000; // Tarifa diurna por hora en CLP
const tarifaNocturna = 16000; // Tarifa nocturna por hora en CLP
const incrementoDomingoDiurno = 2000; // Incremento domingo diurno
const incrementoDomingoNocturno = 3000; // Incremento domingo nocturno

// Luego, creo un objeto para cada empleado con su información.
const empleado1 = {
    nombre: "Empleado 1",
    turnos: {
        lunes: "nocturno",
        martes: "nocturno",
        miercoles: "nocturno",
        jueves: "diurno",
        viernes: "diurno",
        sabado: "ninguno",
        domingo: "ninguno"
    },
    pagoDiario: function(dia) {
        // Aqui se calcula el pago diario dependiendo del turno
        let tarifa = 0;
        if (this.turnos[dia] === "diurno") {
            tarifa = tarifaDiurna;
            // Agrego el incremento si es domingo
            if (dia === "domingo") {
                tarifa += incrementoDomingoDiurno;
            }
        } else if (this.turnos[dia] === "nocturno") {
            tarifa = tarifaNocturna;
            // Agrego el incremento si es domingo
            if (dia === "domingo") {
                tarifa += incrementoDomingoNocturno;
            }
        }
        return tarifa * 10; // Multiplico por 10 hrs
    },
    pagoSemanal: function() {
        // Aqui calculo el pago total semanal sumando los pagos diarios
        let total = 0;
        for (let dia in this.turnos) {
            if (this.turnos[dia] !== "ninguno") {
                total += this.pagoDiario(dia);
            }
        }
        return total;
    }
};

const empleado2 = {
    nombre: "Empleado 2",
    turnos: {
        lunes: "ninguno",
        martes: "nocturno",
        miercoles: "nocturno",
        jueves: "nocturno",
        viernes: "ninguno",
        sabado: "ninguno",
        domingo: "diurno"
    },
    pagoDiario: empleado1.pagoDiario, // Reutilizo la misma funcion de pago diario
    pagoSemanal: empleado1.pagoSemanal // Reutilizo la misma funcion de pago semanal
};

const empleado3 = {
    nombre: "Empleado 3",
    turnos: {
        lunes: "ninguno",
        martes: "ninguno",
        miercoles: "diurno",
        jueves: "diurno",
        viernes: "diurno",
        sabado: "nocturno",
        domingo: "nocturno"
    },
    pagoDiario: empleado1.pagoDiario, // Reutilizo la misma funcion de pago diario
    pagoSemanal: empleado1.pagoSemanal // Reutilizo la misma funcion de pago semanal
};

// Finalmente, imprimo los resultados
console.log(`${empleado1.nombre} tiene un pago semanal de ${empleado1.pagoSemanal()} CLP.`);
console.log(`${empleado2.nombre} tiene un pago semanal de ${empleado2.pagoSemanal()} CLP.`);
console.log(`${empleado3.nombre} tiene un pago semanal de ${empleado3.pagoSemanal()} CLP.`);
