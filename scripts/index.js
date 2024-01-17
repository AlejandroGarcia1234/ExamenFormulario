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

    nombre.value.trim().length === 0 && mensajeErrores.push('El nombre es un campo obligatorio')
    !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) && mensajeErrores.push('El nombre no tiene caracteres válidos')
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajeErrores.push('Introduce una dirección de correo electrónico válida')
    mensaje.value.trim().length < 10 && mensajeErrores.push('Mensaje demasiado corto')
    !/^[1]?[0-9]{1,2}$/.test(edad.value.trim()) && mensajeErrores.push('El campo edad es obligatorio')

    if(mensajeErrores.length === 0 && confirm('¿Estás seguro/a de enviar el formulario?')) {
        formulario.submit()
    }else if(mensajeErrores.length > 0) {
        errores.textContent = ""
        console.log(mensajeErrores)
        mensajeErrores.forEach(function (mensaje) {
            const miLi = document.createElement('li')
            miLi.textContent = mensaje
            errores.appendChild(miLi)
        })
    }
}

formulario.addEventListener('submit', validar)
