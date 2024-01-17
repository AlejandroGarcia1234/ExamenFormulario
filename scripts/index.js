/**
 * @author: Alejandro García Álvarez
 * @github: 
 */

//Creamos una constante para cada elemento del formulario, además de llamarlos por su id identificativo
const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const mensaje = document.querySelector('#mensaje')
const enviar = document.querySelector('#enviar')
const errores = document.querySelector('#errores')
let mensajeErrores = [] //Instnciamos el array para que se nos muestren los mensajes de error

const validar = evento => {
    evento.preventDefault()
    mensajeErrores = [] 

    //Establecemos las condiciones para completar los diferentes campos utilizando expresiones regulares
    nombre.value.trim().length === 0 && mensajeErrores.push('Es obligatorio rellenar este campo')
    !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) && mensajeErrores.push('Caracteres no válidos para el nombre')
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajeErrores.push('La dirección de correo electrónico no es válida')
    mensaje.value.trim().length < 10 && mensajeErrores.push('El mensaje es demasiado corto. Por favor, introduzca un mensaje adecuado')

    //Establacemos las condiciones para que el formulario pueda enviarse. Este se enviará si no hay mensajes de error, y en el caso de tenerlos, se creará un elemento li que contendrá los mensajes de error
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

formulario.addEventListener('submit', validar) //La validación del formulario se realiza FUERA de la función validar
