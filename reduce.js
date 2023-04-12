

function palabraMasLarga(a, b) {
    return a.length > b.length ? a : b;
}

const frase = "Ya te suscribiste a mi canal de Youtube?"

const testearFrase = frase.split(' ').reduce(palabraMasLarga)

console.log(testearFrase)

