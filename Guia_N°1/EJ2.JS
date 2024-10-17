// creamos la clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre; // nombre del producto
        this.precio = precio; // precio del producto
    }

    // mostramos los detalles del producto
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
}

// creamos producto y precio
let producto1 = new Producto("Iphone 16", 1200000); // PD: NO USAR PUNTOS PARA SEPARAR MILES 
let producto2 = new Producto("Asus ROG", 1800000);  // 
let producto3 = new Producto("Valorant Points", 15000); 

// acá mostramos los detalles de los productos
producto1.mostrarDetalles(); // producto y precio
producto2.mostrarDetalles();
producto3.mostrarDetalles();
