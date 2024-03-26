const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");   
const alertName = document.querySelector("#alert-name");
const alertEmail = document.querySelector("#alert-email");
const alertSuccess = document.querySelector("#alert-success");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //detiene lo que hace el navegador por defecto
    console.log("funciona");
    console.log("userName: ", userName.value);
    console.log("userEmail: ", userEmail.value);

    //Validar con JS:

    const errores = [];

    //Valida que el dato ingresado en userName sea valido:
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        errores.push({
            tipo: alertName,
            tipo2: userName,
            msg: 'Formato no valido en el campo nombre, solo letras.'
        })
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    //Valida que el dato ingresado en userEmail sea valido:
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        errores.push({
            tipo: alertEmail,
            tipo2: userEmail,
            msg: 'Formato no valido en el campo email, solo correo valido.'
        })
    }else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {

        
        pintarMensajeError(errores);
        return;

    } 

        
    pintarMensajeExito();

    esconderMensajeExito();


});

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "*** Mensaje enviado con Exito ***"
}

const esconderMensajeExito = () => {
    console.log("Ingreso a Esconder Mensaje");
    setTimeout(() => {
        alertSuccess.classList.add("d-none");
        userName.value = "";
        userEmail.value = "";
        userName.classList.remove("is-valid");
        userEmail.classList.remove("is-valid");

    }, 5000);

}

const pintarMensajeError = (errores) => {

    errores.forEach( item => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
        item.tipo2.classList.add("is-invalid");
    });
}