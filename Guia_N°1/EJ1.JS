// aca se calcula el area del circulo
function areaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}

// aca se calcula el area del traingulo
function areaTriangulo(base, altura) {
    const area = (base * altura) / 2;
    return area;
}

// se calcula el area del rectangulo
function areaRectangulo(base, altura) {
    const area = base * altura;
    return area;
}

// le pide datos al usuario
let radio = prompt("Ingresa el radio del círculo:");
console.log("El área del círculo es: " + areaCirculo(radio));

let baseTriangulo = prompt("Ingresa la base del triángulo:");
let alturaTriangulo = prompt("Ingresa la altura del triángulo:");
console.log("El área del triángulo es: " + areaTriangulo(baseTriangulo, alturaTriangulo));

let baseRectangulo = prompt("Ingresa la base del rectángulo:");
let alturaRectangulo = prompt("Ingresa la altura del rectángulo:");
console.log("El área del rectángulo es: " + areaRectangulo(baseRectangulo, alturaRectangulo));
