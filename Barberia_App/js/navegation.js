let splash, login, registro, recuperar, inicio, reservar, confirmreserva, cortesfav, cortes, detallescorte, barberos, perfil, 
    editperfil, secciones;
let btnIngresar, btnRegistrar, btnContraseña, btnRegistrarse, btnRecuperar, btnReservar, btnCortes, btnCortesfav, btnBarbero, 
    btnRetReserva, btnConfirm, btnDetalle, btnRetCortes, btnEdit, btnCerrar, btnGuardar, btnsPerfil, btnsInicio, btnsLogin;

window.onload = ()=>{
    crearReferencias();
    setTimeout(irLogin,1500);
    crearEventos();
    initSelect();
    initLocal();
}

function crearReferencias(){
    splash = document.getElementById("splash");
    login = document.getElementById("login"); 
    registro = document.getElementById("registro");
    recuperar = document.getElementById("recuperar");
    inicio = document.getElementById("inicio");
    reservar = document.getElementById("reservar");
    confirmreserva = document.getElementById("confirmreserva");
    cortesfav = document.getElementById("cortesfav");
    cortes = document.getElementById("cortes");
    detallescorte = document.getElementById("detallescorte");
    barberos = document.getElementById("barberos");
    perfil = document.getElementById("perfil");
    editperfil = document.getElementById("editperfil");
    secciones = [splash, login, registro, recuperar, inicio, reservar, confirmreserva, cortesfav, cortes, detallescorte, barberos, perfil, editperfil];

    btnIngresar = document.getElementById("btnIngresar");
    btnRegistrar = document.getElementById("btnRegistrar");
    btnContraseña = document.getElementById("btnContraseña");
    btnRegistrarse = document.getElementById("btnRegistrarse");
    btnRecuperar = document.getElementById("btnRecuperar");
    btnReserva = document.getElementById("btnReserva");
    btnCortes = document.getElementById("btnCortes");
    btnCortesfav = document.getElementById("btnCortesfav");
    btnBarbero = document.getElementById("btnBarbero");
    btnReservar = document.getElementById("btnReservar");
    btnRetReserva = document.getElementById("btnRetReserva");
    btnConfirm = document.getElementById("btnConfirm");
    btnDetalle = document.getElementById("btnDetalle");
    btnRetCortes = document.getElementById("btnRetCortes");
    btnEdit = document.getElementById("btnEdit");
    btnCerrar = document.getElementById("btnCerrar");
    btnRetPerfil = document.getElementById("btnRetPerfil");
    btnGuardar = document.getElementById("btnGuardar");

    btnsPerfil = document.querySelectorAll(".btnPerfil");
    btnsInicio = document.querySelectorAll(".btnInicio");
    btnsLogin = document.querySelectorAll(".btnLogin");
}

function crearEventos(){
    //btnIngresar.addEventListener("click",irInicio);
    btnRegistrar.addEventListener("click",irRegistro);
    btnContraseña.addEventListener("click",irRecuperar);
    //btnRegistrarse.addEventListener("click",irInicio);
    btnRecuperar.addEventListener("click",irLogin);
    btnReserva.addEventListener("click",irReservar);
    btnCortes.addEventListener("click",irCortes);
    btnCortesfav.addEventListener("click",irCortesFav);
    btnBarbero.addEventListener("click",irBarberos);
    //btnReservar.addEventListener("click",irConfirmReserva);
    btnRetReserva.addEventListener("click",irReservar);
    btnConfirm.addEventListener("click",irInicio);
    btnDetalle.addEventListener("click",irDetalleCorte);
    btnRetCortes.addEventListener("click",irCortes);
    btnEdit.addEventListener("click",irEditPerfil);
    btnCerrar.addEventListener("click",irLogin);
    btnGuardar.addEventListener("click",irPerfil);

    for(var i=0; i<=5; i++){
        btnsPerfil[i].addEventListener("click",irPerfil);
    }
    for(var i=0; i<=4; i++){
        btnsInicio[i].addEventListener("click",irInicio);
    }
    for(var i=0; i<=1; i++){
        btnsLogin[i].addEventListener("click",irLogin);
    }
}

function ocultarSecciones(){
    for (i in secciones){
        secciones[i].classList.add("ocultar");
    }
}

function irLogin(){
    ocultarSecciones();
    login.classList.remove("ocultar");
}

function irInicio(event){
    ocultarSecciones();
    inicio.classList.remove("ocultar");
}

function irRegistro(event){
    event.preventDefault()
    ocultarSecciones();
    registro.classList.remove("ocultar");
}

function irRecuperar(event){
    event.preventDefault()
    ocultarSecciones();
    recuperar.classList.remove("ocultar");
}

function irReservar(event){
    event.preventDefault()
    ocultarSecciones();
    reservar.classList.remove("ocultar");
}

function irCortes(event){
    event.preventDefault()
    ocultarSecciones();
    cortes.classList.remove("ocultar");
}

function irCortesFav(event){
    event.preventDefault()
    ocultarSecciones();
    cortesfav.classList.remove("ocultar");
}

function irBarberos(event){
    event.preventDefault()
    ocultarSecciones();
    barberos.classList.remove("ocultar");
}

function irDetalleCorte(event){
    event.preventDefault()
    ocultarSecciones();
    detallescorte.classList.remove("ocultar");
}

function irEditPerfil(event){
    event.preventDefault()
    ocultarSecciones();
    editperfil.classList.remove("ocultar");
}

function irPerfil(event){
    event.preventDefault()
    ocultarSecciones();
    perfil.classList.remove("ocultar");
}