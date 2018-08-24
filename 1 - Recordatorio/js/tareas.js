// si pones export default ya no hace falta {}
// de default solo puedes tener uno, y pude ser un objeto
export const nombreTarea = 'Paser al perro';

// exportar funciones

export const crearTarea = (tarea, urgencia) => {
        return `${tarea} tiene una urgencia de ${urgencia}`;
    }
    // Escribir clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        return `${this.nombre} tiene una priridad de ${this.prioridad}`;
    }
}

export class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
            super(nombre, prioridad);
            this.cantidad = cantidad;
        }
        // puedes reescribir los metodos
    mostrar() {
        return super.mostrar() + ` y la cantidad de ${this.cantidad}`;

    }
}

// // crear los objetos
// let tarea1 = new Tarea('Aprender React', 'Alta');
// let tarea2 = new Tarea('Aprender Angular', 'Alta');
// let tarea3 = new Tarea('Aprender Python', 'Media');
// let tarea4 = new Tarea('Aprender JavaEE', 'Media');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

// let compra1 = new ComprasPendientes('Fruta', 'Urgente', 3)
// console.log(compra1.mostrar());