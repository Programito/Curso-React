// Métodos en arreglos

const personas = [
    { nombre: 'Juan', edad: 23, aprendiendo: 'Javascript' },
    { nombre: 'Pablo', edad: 18, aprendiendo: 'PHP' },
    { nombre: 'Marta', edad: 21, aprendiendo: 'Python' },
    { nombre: 'Elvira', edad: 31, aprendiendo: 'ReactJS' },
    { nombre: 'Jose', edad: 28, aprendiendo: 'Angular6' },
]

console.log(personas);

// mayores de 28

const mayores = personas.filter(persona => {
    return persona.edad >= 28;
});

console.log(mayores);

const Marta = personas.find(persona => {
    return persona.nombre == 'Marta';
});

console.log(Marta);

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total / personas.length);