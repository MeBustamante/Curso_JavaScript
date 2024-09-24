// aca voy a pedirle al alumno que me ingrese sus 3 notas
let nota1 = parseFloat(prompt("Ingresa la primera nota (40%)"));  //ingresar notas ejemplo 1.0 (con punto)
let nota2 = parseFloat(prompt("Ingresa la segunda nota (30%)"));  
let nota3 = parseFloat(prompt("Ingresa la tercera nota (30%)"));  

// ahora tengo que calcular el promedio ponderado, asi que uso las ponderaciones que me dio el profesor
let promedioPonderado = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30);

// ahora que ya tengo el promedio, debo ver si el alumno aprueba, va a examen o reprueba
console.log("Tu promedio ponderado es: " + promedioPonderado);

// cuando el promedio es menor que 3.95, el alumno reprueba
if (promedioPonderado < 3.95) {
    console.log("Lo siento, haz reprobado la asignatura.");
} 
// cuando el promedio esta entre 3.95 y 4.94, el alumno va a examen:(
else if (promedioPonderado >= 3.95 && promedioPonderado < 4.95) {
    console.log("Lo siento bro, debes ir a examen.");
} 
// cuando el promedio es 4.95 o superior, el alumno se exime
else {
    console.log("Te eximes de la asignatura. Felicitaciones maquina...");
}

