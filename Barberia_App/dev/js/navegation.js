let splash, login, registro, recuperar, inicio, reservar, confirmreserva, cortesfav, cortes, detallescorte, barberos, perfil, 
    editperfil, info, secciones;
let btnIngresar, btnRegistrar, btnContraseña, btnRegistrarse, btnRecuperar, btnReservar, btnCortes, btnCortesfav, btnBarbero, 
    btnRetReserva, btnConfirm, btnRetCortes, btnEdit, btnCerrar, btnGuardar, btnsPerfil, btnsInicio, btnsLogin, btnReturn,
    btnInfo, btnsInfo;
let fav=false, reserv=false, barber=false, cort=false, sesion=false;

window.onload = ()=>{
    crearReferencias();
    setTimeout(irLogin,1500);
    crearEventos();
    initLocal();
    initCortes();
    initSelect();
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
    info = document.getElementById("info");
    secciones = [splash, login, registro, recuperar, inicio, reservar, confirmreserva, cortesfav, cortes, detallescorte, barberos, perfil, editperfil, info];

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
    btnRetCortes = document.getElementById("btnRetCortes");
    btnEdit = document.getElementById("btnEdit");
    btnCerrar = document.getElementById("btnCerrar");
    btnRetPerfil = document.getElementById("btnRetPerfil");
    btnGuardar = document.getElementById("btnGuardar");
    btnReturn = document.getElementById("btnReturn");
    btnInfo = document.getElementById("btnInfo");

    btnsPerfil = document.querySelectorAll(".btnPerfil");
    btnsInicio = document.querySelectorAll(".btnInicio");
    btnsLogin = document.querySelectorAll(".btnLogin");
    btnsInfo = document.querySelectorAll(".btnsInfo");
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
    btnRetCortes.addEventListener("click",irCortes);
    btnEdit.addEventListener("click",irEditPerfil);
    btnCerrar.addEventListener("click",irLogin);
    //btnGuardar.addEventListener("click",irPerfil);
    btnReturn.addEventListener("click",ret);
    btnInfo.addEventListener("click",closeInfo);

    for(var i=0; i<=5; i++){
        btnsPerfil[i].addEventListener("click",irPerfil);
    }
    for(var i=0; i<=3; i++){
        btnsInicio[i].addEventListener("click",irInicio);
    }
    for(var i=0; i<=1; i++){
        btnsLogin[i].addEventListener("click",irLogin);
        btnsInfo[i].addEventListener("click",irInfo);
    }
}

function ocultarSecciones(){
    for (i in secciones){
        secciones[i].classList.add("ocultar");
    }
}

function irLogin(){
    sesion=false;
    ocultarSecciones();
    login.classList.remove("ocultar");
}

function irInicio(event){
    ocultarSecciones();
    reserv=false;
    barber=false;
    cort=false;
    fav=false;
    sesion=true;
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
    reserv=true;
    reservar.classList.remove("ocultar");
}

function irCortes(event){
    event.preventDefault()
    ocultarSecciones();
    cort=true;
    if(fav) irCortesFav(event);
    else cortes.classList.remove("ocultar");
}

function irCortesFav(event){
    event.preventDefault()
    ocultarSecciones();
    cargarCortesFav()
    fav=true;
    cortesfav.classList.remove("ocultar");
}

function irBarberos(event){
    event.preventDefault()
    ocultarSecciones();
    barber=true;
    barberos.classList.remove("ocultar");
}

function irEditPerfil(event){
    event.preventDefault()
    ocultarSecciones();
    editperfil.classList.remove("ocultar");
}

function irPerfil(){
    ocultarSecciones();
    perfil.classList.remove("ocultar");
}

function ret(event){
    if(reserv) irReservar(event);
    else if(barber) irBarberos(event);
    else if(cort) irCortes(event);
    else if(fav) irCortesFav(event);
    else irInicio(event);
}

function irInfo(){
    ocultarSecciones();
    info.classList.remove("ocultar");
}

function closeInfo(event){
    ocultarSecciones();
    if(sesion) irInicio(event);
    else irLogin(event);
}