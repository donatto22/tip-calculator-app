function eliminarUltimoCaracter(texto) {
    return texto.slice(0, -1)
}

function eliminarConArreglos(texto) {
    let arreglo = texto.split('')
    arreglo.pop()
    return arreglo.join('')
}