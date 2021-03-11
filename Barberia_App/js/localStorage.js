var corte_txt,barbero_txt,fecha_txt;

function init(){
    corte_txt = document.getElementById("corte");
    barbero_txt = document.getElementById("barbero");
    fecha_txt = document.getElementById("date");

}

function asignarEventos(){
    var btn_Reserva = document.getElementById("btnReservar");
    btn_Reserva.addEventListener("click",almacenarReserva);

}