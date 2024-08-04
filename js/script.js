let cuentaTotal = null
let montoPorPersona = document.getElementById('montoPorPersona')
let personas = null

// el valor de la propina que va a dar cada persona
let propinaPorPersona = document.getElementById('propinaPorPersona')

// el valor de la propina total
let propina = null

function cambiarTotal() {
    // inputs
    cuentaTotal = document.getElementById('bill').value
    personas = document.getElementById('people').value

    calcularPropina(propina)

    if (personas == null || personas == 0) {
        montoPorPersona.innerText = cuentaTotal / 1
    } else montoPorPersona.innerText = (cuentaTotal / personas) + Number(propinaPorPersona.innerText)
}

function cambiarPropina(button) {
    propina = eliminarConArreglos(button.innerText) / 100
    calcularPropina(propina)
    cambiarTotal()

    changeButtonBackground(button)
}

function calcularPropina (propina) {
    if(cuentaTotal == null || propina == null || personas == null)  {
        return
    } else {
        propinaPorPersona.innerText = (cuentaTotal * propina) / personas
    }
}

// función para cambiar el color del botón que se selecciona
const changeButtonBackground = (button) => {
    const botones = document.getElementsByClassName('boton')
    Array.from(botones).forEach(boton => {
        boton.classList.remove('active')
    })

    button.classList.add('active')
}