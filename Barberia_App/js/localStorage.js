var corte_txt,barbero_txt,fecha_txt;
var top;
var contenedor = [];


window.onload = ()=>{
    corte_txt = document.getElementById("corte");
    barbero_txt = document.getElementById("barbero");
    fecha_txt = document.getElementById("date");
    asignarEventos();
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

function almacenarReserva(){
    console.log("hola");
    var reserva = {};
    reserva.corte = corte_txt.value;
    reserva.barbero = barbero_txt.value;
    reserva.fecha = fecha_txt.value;
    contenedor.push(reserva);
    localStorage.setItem("contenedor",JSON.stringify(contenedor));

}




function asignarEventos(){
    
    var btn_Reserva = document.getElementById("btnReservar");
    btn_Reserva.addEventListener("click",almacenarReserva)

}