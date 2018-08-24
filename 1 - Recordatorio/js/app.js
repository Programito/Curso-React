import { nombreTarea, crearTarea, ComprasPendientes } from './tareas.js';

console.log(nombreTarea);
const tarea1 = crearTarea('Pasera al perro', 'Media');

console.log(tarea1);

const comprasPendientes = new ComprasPendientes("Aprender React", "alta", 20);
console.log(comprasPendientes.mostrar());