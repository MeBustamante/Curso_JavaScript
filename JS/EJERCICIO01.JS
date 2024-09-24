// Aca quiero que el usuario ingrese un numero, y yo quiero saber si es par o impar
let numero = prompt("Por favor, ingrese un número"); // Le estoy pidiendo al usuario que escriba un numero

// Ahora, debo ver si ese numero es par o impar, para eso uso el operador %
if (numero % 2 === 0) {
    // Si el resto es 0, entonces el numero es par
    console.log("El número " + numero + " es par");
} else {
    // Si el resto no es 0, entonces el numero es impar
    console.log("El número " + numero + " es impar");
}

