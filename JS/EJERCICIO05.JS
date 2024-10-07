// solo usando clase y funciones

class VerificadorContraseña {
    constructor(contraseña) {
        this.contraseña = contraseña; // aca se guarda la contraseña que se ingresa
    }

    // aca verificamos la longitud minima de la contarseña
    verificarLongitud() {
        return this.contraseña.length >= 8; // Retorna true si tiene al menos 8 caracteres
    }

    // aca verificamos que al menos tenga una mayuscula
    verificarMayuscula(){
        return /[A-Z]/.test(this.contraseña); // aca buscamos que al menos tenga una letra mayuscula
    }

    // aca verificamos que al meno tenga un numero
    verificarNumero() {
        return /[0-9]/.test(this.contraseña); // busca si contiene algun numero de 0 a 9
    }

    // aca verificamos que al menos tenga un caracter especial de los que se pediran
    verificarCaracterEspecial() {
        return /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(this.contraseña); // busca que tenga la contraseña uno de estos caracteres
    }

    // aca es donde verificamos cada requisito, verificamso todo
    verificarTodo() {
        if (!this.verificarLongitud()) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return false;
        }

        if (!this.verificarMayuscula()) {
            alert("La contraseña debe contener al menos una letra mayúscula.");
            return false;
        }

        if (!this.verificarNumero()) {
            alert("La contraseña debe contener al menos un número.");
            return false;
        }

        if (!this.verificarCaracterEspecial()) {
            alert("La contraseña debe incluir al menos un carácter especial como: !@#$%^&*()_+{}[]:;<>,.?~\\-");
            return false;
        }

        alert("La contraseña ingresada es válida.");
        return true;
    }
}

// aca es donde verificamos al usuario ingresar una contraseña
var contraseñaIngresada = prompt("Por favor, ingresa una contraseña: que tenga mínimo 8 caracteres, una letra mayúscula, un número y uno de los siguientes símbolos especiales: !@#$%^&*()_+{}[]:;<>,.?~\-");

// creamos una instancia de la clase VerificadorContraseña
var verificador = new VerificadorContraseña(contraseñaIngresada);

// verificamos todo
verificador.verificarTodo();