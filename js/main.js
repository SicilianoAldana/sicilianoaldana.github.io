var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var error = document.getElementById("error");
error.style.color= "red";


function enviarFormulario(){
    console.log("..enviando formulario");

    var mensajesError = [];
    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }

    if (apellido.value === null || apellido.value === "") {
        mensajesError.push("Ingresa tu apellido");
    }

    if (email.value === null || email.value === "") {
        mensajesError.push("Ingresa tu email");
    }

    if (mensaje.value === null || mensaje.value === "") {
        mensajesError.push("Ingresa un mensaje");
    }

       error.innerHTML = mensajesError.join(", ");
    return false;
}

const btn_scroll_arriba = document.getElementById("btn_scroll_arriba")
btn_scroll_arriba.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.onscroll = () => {
    agregar_btn_scroll_arriba()
}

const agregar_btn_scroll_arriba = () => {
    if (window.scrollY < 500) {
        btn_scroll_arriba.classList.remove("btn-scroll-arriba-on")
    } else {
        btn_scroll_arriba.classList.add("btn-scroll-arriba-on")
    }
}
