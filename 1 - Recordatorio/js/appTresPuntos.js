// Sprear operator

let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJs', 'Laravel', 'Django'];

//unir los arreglos en 1 solo

//let combinacion = lenguajes.concat(frameworks);
let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion);

// creas una copia de lenguajes
let [ultimo] = [...lenguajes.reverse()];

function suma(a, b, c) {
    console.log(a + b + c);
}

const numeros = [1, 2, 3];
suma(...numeros);