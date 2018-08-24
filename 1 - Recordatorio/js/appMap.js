const carrito = ['Producto1', 'Producto2', 'Producto3'];


const appContenedor = document.querySelector('#app');
let html = '';
//recorrer todo
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
});

appContenedor.innerHTML = html;

// crea uno nuevo
const carrito2 = carrito.map(producto => {
    return 'El producto es' + producto;
});

console.log(carrito2);

const persona = {
        nombre: 'Juan',
        profesion: 'Desarrollador web',
        edad: 500
    }
    // saber las keys del objeto
console.log(Object.keys(persona));