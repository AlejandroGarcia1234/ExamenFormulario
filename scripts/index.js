/**
 * @author: Alejandro García Álvarez
 * @github: 
 */

const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const mensaje = document.querySelector('#mensaje')
const errores = document.querySelector('#errores')
let mensajeErrores = []

const validar = evento => {
    evento.preventDefault()
    mensajeErrores = []

    nombre.value.trim().length === 0 && mensajeErrores.push('Es obligatorio rellenar este campo')
    !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) && mensajeErrores.push('Caracteres no válidos para el nombre')
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajeErrores.push('La dirección de correo electrónico no es válida')
    mensaje.value.trim().length < 10 && mensajeErrores.push('El mensaje es demasiado corto. Por favor, introduzca un mensaje adecuado')
    !/^[1]?[0-9]{1,2}$/.test(edad.value.trim()) && mensajeErrores.push('Es obligatorio rellenar este campo')

    if(mensajeErrores.length === 0 && confirm('¿Está seguro de que quiere enviar el formulario?')) {
        formulario.submit()
    }else if(mensajeErrores.length > 0) {
        errores.textContent = ""
        mensajeErrores.forEach(function (mensaje) {
            const miLi = document.createElement('li')
            miLi.textContent = mensaje
            errores.appendChild(miLi)
        })
    }
}

formulario.addEventListener('submit', validar)
