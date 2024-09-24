let suma = 0;  // inicio la variable donde voy a guardar la suma total
let numero = 500;  // empiezo desde 500
let esResta = true;  // uso esto para alternar si voy restando 4 o sumando 6

// Ahora hago un bucle para sumar los valores hasta llegar a 800
while (numero <= 800) {
    suma += numero;  // voy sumando el valor actual a la suma total
    
    if (esResta) {
        // cuando esResta es true, resto 4
        numero -= 4;
    } else {
        // cuando esResta es false, sumo 6
        numero += 6;
    }
    
    esResta = !esResta;  // cambio el valor de esResta para alternar
}
console.log("El resultado de la sumatoria es: " + suma);


