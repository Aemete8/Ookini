function calcularPrecio(precioUnidad, cantidad) {
    const total = precioUnidad * cantidad
    return total
}

function puedeReservar (cantidad){
    return cantidad <= 2
} 