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

// Ejercicio 4 FIZZBUZZ

const numeroRecibido = 15

function fizzBuzz (numeroRecibido) {
    for (let i = 1; i <= numeroRecibido; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FIZZBUZZ")
        }   else if (i % 3 === 0) {
            console.log("FIZZ")
        } else if (i % 5 === 0){
            console.log("BUZZ")
        } else{
            console.log(i)
        }
    }
}

fizzBuzz(numeroRecibido)


// Ejercicio 5 Palindromo

let palabraOriginal = "Anita lava la tina"
let palindromo = false


function esPalindromo (palabraOriginal){
    const palabraLimpia = palabraOriginal.toLowerCase().split(" ").join("")
    const palabraInvertida = palabraLimpia.split("").reverse().join("")

    return palabraInvertida === palabraLimpia
}


console.log(esPalindromo(palabraOriginal))


// Ejercicio 6 Ookini

const nombreCafe = "Ookini"
const metodos = ["V60", "Kyoto Drip", "Siphon", "Prensa francesa"]
const precioV60 = 5
const precioKyoto = 7
const precioSiphon = 8
const precioPrensa = 3
const maxTazasDia = 50
const limiteCafePersona = 2

let ventaActual = 1
let reservaActualPersona = 3


function confirmarReserva(ventaActual,reservaActualPersona){
    if (reservaActualPersona > limiteCafePersona) {
        console.log("No es posible realizar la reserva, superaste el maximo permitido por persona")
    } else if (reservaActualPersona + ventaActual > maxTazasDia) {
        console.log("No es posible realizar la reserva, reserva diaria agotada")
    } else {
        console.log("Reserva realizada con éxito")
    }

}

confirmarReserva(ventaActual,reservaActualPersona)
