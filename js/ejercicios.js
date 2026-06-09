// Ejercicio 1 Suma de Array
const numeros = [7,7]

function sumaArreglo(numeros) {
    let total = 0

    for (let i= 0; i < numeros.length; i++) {
        total += numeros[i]
    }
    return total
}

console.log(sumaArreglo(numeros))


// Ejercicio 2 Invertir un string
const palabra = "casa"

function invertirTexto(palabra) {
    return arrayPalabra = palabra.split("").reverse().join("")
}

console.log(invertirTexto(palabra))


// Ejercicio 3 Contar vocales
const palabra2 = "abecedario"

function contarVocales(palabra2) {
    let texto = palabra2.toLowerCase()  
    let vocales = 0

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a" || 
            texto[i] === "e" || 
            texto[i] === "i" || 
            texto[i] === "o" || 
            texto[i] === "u") 
            {
            vocales++
        }
    }
    return vocales
}

console.log(contarVocales(palabra2))