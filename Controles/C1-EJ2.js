function verificarContraseña() {
    // le solicito que ingrese una contraseña
    var contraseña = prompt("Por favor, ingresa una contraseña: que tenga minimo 8 caracteres, una letra mayuscula, un numero y uno de los siguientes simbolos especiales !@#$%^&*()_+{}[]:;<>,.?~\-");

    // verificamos si cumple con el requisito de los 8 caracteres
    if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false; // aca se detiene en caso de no cumplirse el requisito
    }

    // se verifica que tenga una letra mayuscula
    if (/[A-Z]/.test(contraseña)) { // busca letras mayusculas de A a la Z
        alert("La contraseña debe contener al menos una letra mayuscula.");
        return false;
    }

    // se verifica que tenga un numero
    if (!/[0-9]/.test(contraseña)) { // se busca un digito de 0 a 9
        alert("La contraseña debe contener al menos un número.");
        return false;
    }

    // verificamos que tenga el caracter especial
    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(contraseña)) { // aca se busca entre los caracteres que se entregaron
        alert("La contraseña debe incluir al menos un carácter especial como: !@#$%^&*()_+{}[]:;<>,.?~\\-");
        return false;
    }

    // si se cumplen todos los requisitos, se envia un mensaje de exitoso
    alert("La Contraseña ingresada es valida.");
    return true;
}

// se llama a la funcion para verificar
verificarContraseña();
