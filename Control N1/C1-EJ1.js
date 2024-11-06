function contarCaracteresSinEspacios() {
    // solicito a la persona que ingrese una palabra u oracion
    var texto = prompt("Por favor, ingresa una palabra o una oración:");

    // con esto eliminamos los espacios para que no se cuenten
    var textoSinEspacios = texto.replace(/ /g, "");

    // calculamos los caracteres sin contar los espacios en caso de ser una oracion
    var numCaracteres = textoSinEspacios.length;

    // mostramos la oracio o palabra ingresada y el numero de caracteres que tiene
    alert("Has escrito: \"" + texto + "\"\nNúmero de caracteres (sin contar los espacios en una oracion): " + numCaracteres);
}

// se llama la función para que se ejecute 
contarCaracteresSinEspacios();
