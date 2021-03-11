var corte_txt,barbero_txt,fecha_txt,hora_txt, 
    nameR_txt, emailR_txt, userR_txt, passwR_txt, confirpasswR_txt, datosperfil;
var contenedor = [], usuarios = [];

function initLocal(){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))==null ? usuarios=[]: JSON.parse(localStorage.getItem("usuarios"));
    initReservas();
    initRegistro();
}

function initReservas(){
    corte_txt = document.getElementById("corte");
    barbero_txt = document.getElementById("barbero");
    fecha_txt = document.getElementById("date");
    hora_txt = document.getElementById("time");

    btnReservar.addEventListener("click",almacenarReserva);
}
/*
function mostrarReserva(){
    contenedor = localStorage.getItem("contenedor");
    if(contenedor){
        organizarContenedor();

    }else{
        contenedor = [];
    }


}
*/

function almacenarReserva(event){
    event.preventDefault();
    if(!validarDatos()){return;}

    var reserva = {};
    reserva.corte = corte_txt.value;
    reserva.barbero = barbero_txt.value;
    reserva.fecha = fecha_txt.value;
    reserva.hora = hora_txt.value;
    
    contenedor.push(reserva);
    localStorage.setItem("reserva",JSON.stringify(reserva));
}

function validarDatos(){
    var resul=false;
    if(corte_txt.value==""){
        alert("Debe escoger un corte");
        return resul;
    }
    if(barbero_txt.value==""){
        alert("Debe escoger un barbero");
        return resul;
    }
    if(fecha_txt.value==""){
        alert("Debe escoger una fecha");
        return resul;
    }
    if(hora_txt.value==""){
        alert("Debe escoger una hora");
        return resul;
    }
    return !resul;
}

function consultarReserva(){

}
/*
function asignarEventos(){
    
    var btn_Reserva = document.getElementById("btnReservar");
    btn_Reserva.addEventListener("click",almacenarReserva)

}
*/

function initRegistro(){
    nameR_txt = document.getElementById("nameregistro");
    emailR_txt = document.getElementById("emailregistro");
    userR_txt = document.getElementById("userregistro");
    passwR_txt = document.getElementById("passwregistro");
    confirpasswR_txt = document.getElementById("confirpasswregistro");
    datosperfil = document.getElementById("datosperfil");

    btnRegistrarse.addEventListener("click",registrar);
}

function registrar(){
    if(nameR_txt.value=="" || emailR_txt.value=="" || userR_txt.value=="" || passwR_txt.value=="" || confirpasswR_txt.value==""){
        alert("Debe llenar todos los campos");
        return false;
    }

    if(passwR_txt.value != confirpasswR_txt.value){
        alert("Las contraseñas no coinciden");
        return false;
    }

    var usuario = {};
    usuario.name = nameR_txt.value;
    usuario.email = emailR_txt.value;
    usuario.user = userR_txt.value;
    usuario.passw = passwR_txt.value;
    usuario.reserva = "";

    if(!validarUsuario()){
        alert("Ya existe ese nombre de usuario");
        return false;
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    adecuarCampos(usuario);
    irInicio();
}

function validarUsuario(){
    for(var i in usuarios){
        if(usuarios[i].user == userR_txt.value){return false;}
    }
    return true;
}

function adecuarCampos(usuario){
    var datos = '<img class="round" src="img/perfil.png" />';
    datos += '<h3>'+usuario.name+'</h3>';
    datos +='<h4>'+usuario.user+'</h4>';
    datos +='<h4>'+usuario.email+'</h4>';
    datos +='<div class="buttons"> <input id="btnCerrar" type="button" class="btn-second" value="Cerrar sesión"> </div>'
    datos +='<div class="card_details" id="datosreserva">'
    datos += '<h4>Reserva</h4>'
    if(usuario.reserva==""){
        datos += '<p class="cl-white"> Aun no ha realizado ninguna reserva </p>';
    }
    else{
        datos += '<p class="cl-white">'+usuario.reserva +'</p>'
    }
    datos +='</div>'
    datosperfil.innerHTML = datos;
    
    btnCerrar = document.getElementById("btnCerrar");
    btnCerrar.addEventListener("click",irLogin);
    
    nameR_txt.value="";
    emailR_txt.value="";
    userR_txt.value="";
    passwR_txt.value="";
}
