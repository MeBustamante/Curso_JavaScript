// Clase Trabajador
class Trabajador {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo}`);
    }
}

// Clase Gerente que hereda de Trabajador
class Gerente extends Trabajador {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    // Sobrescribe el método para mostrar también el departamento
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo}, Departamento: ${this.departamento}`);
    }
}

// Crear instancias de Trabajador
let trabajador1 = new Trabajador("Ricardo", 530000);
let trabajador2 = new Trabajador("Javier", 600000);
let trabajador3 = new Trabajador("Carola", 564000);
let trabajador4 = new Trabajador("Esteban", 500000);

// Crear instancias de Gerente
let gerente1 = new Gerente("Ana", 865000, "Recursos Humanos");
let gerente2 = new Gerente("Luis", 916000, "IT");
let gerente3 = new Gerente("Isabel", 863000, "Finanzas");
let gerente4 = new Gerente("Sofía", 974000, "Administración")

// Mostrar información de la clase trabajador
console.log("Trabajadores:");
trabajador1.mostrarDetalles(); 
trabajador2.mostrarDetalles();
trabajador3.mostrarDetalles();
trabajador4.mostrarDetalles();

// Mostrar información de la clase gerente
console.log("Gerencia:");
gerente1.mostrarDetalles();    
gerente2.mostrarDetalles();
gerente3.mostrarDetalles();
gerente4.mostrarDetalles();