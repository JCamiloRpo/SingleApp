var corte_txt,barbero_txt,fecha_txt,hora_txt, userL_txt, passwL_txt, mensajeConfirmacion, opcionCorte, opcionBarbero,
    nameR_txt, emailR_txt, userR_txt, passwR_txt, confirpasswR_txt, datosperfil,
    nameE_txt, emailE_txt, userE_txt, passwE_txt, confirpasswE_txt;
var contenedor = [], usuarios = [], current={};

function initLocal(){
    //Analizar el local storage
    usuarios = JSON.parse(localStorage.getItem("usuarios"))==null ? usuarios=[]: JSON.parse(localStorage.getItem("usuarios"));
    //Inicializar variables creando referencias con los text box y botones
    initReservas();
    initRegistro();
    initLogin();
    initEdit();
}
/* Parte para registrar */
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
    //Validar que se dijiten datos
    if(nameR_txt.value=="" || emailR_txt.value=="" || userR_txt.value=="" || passwR_txt.value=="" || confirpasswR_txt.value==""){
        alert("Debe llenar todos los campos");
        return false;
    }
    //Validar contraseñas
    if(passwR_txt.value != confirpasswR_txt.value){
        alert("Las contraseñas no coinciden");
        return false;
    }
    //Crear usuario
    var usuario = {};
    usuario.name = nameR_txt.value;
    usuario.email = emailR_txt.value;
    usuario.user = userR_txt.value;
    usuario.passw = passwR_txt.value;
    usuario.reserva = null;
    usuario.cortesFav = null;
    //Validar que el usuario no exista
    for(var i in usuarios){
        if(usuarios[i].user == userR_txt.value){
            alert("Ya existe ese nombre de usuario");
            return false;
        }
    }
    //Agregar el usuario a la cola y al local storage
    usuarios.push(usuario);
    current=usuario;
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    //Adecuar los campos de texto y el texto de la info de perfil
    adecuarCampos(usuario);
    irInicio();
}

function adecuarCampos(usuario){
    //Codigo para la seccion de Perfil
    var datos = '<img class="round" src="img/perfil.png" />';
    datos += '<h3>'+usuario.name+'</h3>';
    datos +='<h4>'+usuario.user+'</h4>';
    datos +='<h4>'+usuario.email+'</h4>';
    datos +='<div class="buttons"> <input id="btnCerrar" type="button" class="btn-second" value="Cerrar sesión"> </div>'
    datos +='<div class="card_details" id="datosreserva">'
    datos += '<h4>Reserva</h4>'
    if(usuario.reserva==null){
        datos += '<p class="cl-white"> Aun no ha realizado ninguna reserva </p>';
    }
    else{
        datos += '<p class="cl-white">'+'Su reserva con el babero '+'<b>'+usuario.reserva.barbero+'<b/>'+' es para el corte '+usuario.reserva.corte+' ha sido agendada para el dia '+usuario.reserva.fecha+' a la hora '+usuario.reserva.hora+'<br> Codigo de reserva: '+usuario.reserva.codigo  +'</p>';
    }
    datos +='</div>'
    datosperfil.innerHTML = datos;
    //Crear la referencia al boton de cerrar sesion que se acaba de poner
    btnCerrar = document.getElementById("btnCerrar");
    btnCerrar.addEventListener("click",irLogin);
    //Vaciar campos para el registro
    nameR_txt.value="";
    emailR_txt.value="";
    userR_txt.value="";
    passwR_txt.value="";
    confirpasswR_txt.value="";
    //Dejar el de usuario login como forma de "recordar el usuario"
    userL_txt.value=usuario.user;
    passwL_txt.value="";
    //Acomodar campos para edit
    nameE_txt.value=usuario.name;
    emailE_txt.value=usuario.email;
    userE_txt.value=usuario.user;
    passwE_txt.value=usuario.passw;
    confirpasswE_txt.value="";
    
    cargarCortes();
}

/* Parte para login */
function initLogin(){
    userL_txt = document.getElementById("userlogin");
    passwL_txt = document.getElementById("passwlogin");

    btnIngresar.addEventListener("click",iniciarSesion);
}

function iniciarSesion(){
    //Validar campos
    if(userL_txt.value=="" || passwL_txt.value==""){
        alert("Ingrese usuario y contraseña");
        return false;
    }
    //Buscar el usuario y validar contraseña
    for(var i in usuarios){
        if(usuarios[i].user == userL_txt.value && usuarios[i].passw == passwL_txt.value){
            current=usuarios[i];
            datoscortesfav = current.cortesFav;
            if(datoscortesfav==null){
                datoscortesfav=[];
                datoscortesfav.length = datoscortes.length;
            }
            adecuarCampos(usuarios[i]);
            irInicio();
            return true;
        }
    }
    alert("Usuario y/o contraseña incorrectos");
}

/* Editar datos */
function initEdit(){
    nameE_txt = document.getElementById("nameedit");
    emailE_txt = document.getElementById("emailedit");
    userE_txt = document.getElementById("useredit");
    passwE_txt = document.getElementById("passwedit");
    confirpasswE_txt = document.getElementById("passwconfiredit");

    btnGuardar.addEventListener("click",editarDatos);
}

function editarDatos(){
    //Validar que se dijiten datos
    if(nameE_txt.value=="" || emailE_txt.value=="" || userE_txt.value=="" || passwE_txt.value=="" || confirpasswE_txt.value==""){
        alert("Debe llenar todos los campos");
        return false;
    }
    //Validar contraseñas
    if(passwE_txt.value != confirpasswE_txt.value){
        alert("Las contraseñas no coinciden");
        return false;
    }
    //Actualizar datos del usuario
    current.name = nameE_txt.value;
    current.email = emailE_txt.value;
    current.user = userE_txt.value;
    current.passw = passwE_txt.value;
    //Guardarlo
    for(var i in usuarios){
        if(usuarios[i].user == current.user){
            usuarios[i] = current;
            adecuarCampos(current);
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            irPerfil();
            return true;
        }
    }
}

/* Parte para reserva */
function initReservas(){
    corte_txt = document.getElementById("corte");
    barbero_txt = document.getElementById("barbero");
    fecha_txt = document.getElementById("date");
    hora_txt = document.getElementById("time");
    mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
    opcionCorte = document.getElementById("opcionCorte");
    opcionBarbero = document.getElementById("opcionBarbero");

    btnReservar.addEventListener("click",almacenarReserva);
}

function almacenarReserva(){
    /*if(current.reserva!=null){
        alert("No puede tener mas de una reserva");
        return;
    }*/
    if(corte_txt.value=="" || barbero_txt.value=="" || fecha_txt.value=="" || hora_txt.value=="" ){
        alert("Todos los campos son requeridos");
        return;
    }

    var reserva = {};
    reserva.corte = corte_txt.value;
    reserva.barbero = barbero_txt.value;
    reserva.fecha = fecha_txt.value;
    reserva.hora = hora_txt.value;
    reserva.codigo = Math.floor((Math.random()*1000)+1);

    current.reserva=reserva;

    for(var i in usuarios){
        if(usuarios[i].user == current.user){
            usuarios[i] = current;
            adecuarCampos(current);
            irConfirmReserva(reserva);
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            return true;
        }
    }
}

function irConfirmReserva(reserva){
    mensajeConfirmacion.innerHTML='Su reserva con el babero '+reserva.barbero+' es para el corte '+reserva.corte+' ha sido agendada para el dia '+reserva.fecha+' a la hora '+reserva.hora+'<br> Codigo de reserva: '+reserva.codigo;
    corte_txt.value="";
    barbero_txt.value="";
    fecha_txt.value="";
    hora_txt.value="";
    opcionCorte.innerHTML='<h3 class="titulo">Selecciona un corte</h3>';
    opcionBarbero.innerHTML='<h3 class="titulo">Selecciona un barbero</h3>';
    ocultarSecciones();
    confirmreserva.classList.remove("ocultar");
}

/* Parte para favoritos */
function guardarFavoritos(favoritos){
    current.cortesFav = favoritos;
    for(var i in usuarios){
        if(usuarios[i].user == current.user){
            usuarios[i] = current;
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            return true;
        }
    }
}