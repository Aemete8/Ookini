const contadorReservaciones = document.querySelector("#counter-reservation")
const botonReservar = document.querySelector("#reservation-button")

function calcularPrecio(precioUnidad, cantidad) {
    const total = precioUnidad * cantidad
    return total
}

function puedeReservar (tazasDisponibles){
    return tazasDisponibles > 0 
}

botonReservar.addEventListener("click", function(){
    const tazasActuales = Number(contadorReservaciones.textContent)

    if (puedeReservar(tazasActuales)){
        contadorReservaciones.textContent = tazasActuales - 1
    } else {
        botonReservar.disabled = true
        botonReservar.textContent = "Agotado"
    }
})
