const tarifaDiurna = 12000; 
const tarifaNocturna = 16000; 
const incrementoDomingoDiurno = 2000; // aumento domingo diurno
const incrementoDomingoNocturno = 3000; // aumento domingo nocturno

// creo un objeto para cada empleado
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
        // pago diario dependiendo del turno
        let tarifa = 0;
        if (this.turnos[dia] === "diurno") {
            tarifa = tarifaDiurna;
            // incrementa si es domingo dia
            if (dia === "domingo") {
                tarifa += incrementoDomingoDiurno;
            }
        } else if (this.turnos[dia] === "nocturno") {
            tarifa = tarifaNocturna;
            // incrementa si es domingo noche
            if (dia === "domingo") {
                tarifa += incrementoDomingoNocturno;
            }
        }
        return tarifa * 10; // se multiplica por 10 horas
    },
    pagoSemanal: function() {
        // pago total semanal sumando los pagos diarios
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
    pagoDiario: empleado1.pagoDiario, // reutilizo funcion
    pagoSemanal: empleado1.pagoSemanal // reutilizo funcion
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
    pagoDiario: empleado1.pagoDiario, // reutilizo funcin
    pagoSemanal: empleado1.pagoSemanal // reutilizo funcion
};

// se imprimen los totals
console.log(`${empleado1.nombre} tiene un pago semanal de ${empleado1.pagoSemanal()} CLP.`);
console.log(`${empleado2.nombre} tiene un pago semanal de ${empleado2.pagoSemanal()} CLP.`);
console.log(`${empleado3.nombre} tiene un pago semanal de ${empleado3.pagoSemanal()} CLP.`);
