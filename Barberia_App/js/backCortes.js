let datoscortes=[], btnsDetalleCortes=[], datoscortesfav=[], btnsDetalleCortesFav=[], btnsFavCorte=[], btnsFavCorteFav=[];
let listCortes, listCortesFav, detalleCorte, optcorte;

function initCortes(){
    var corte1={id=1, icon="favorite_border", img="img/corte1.png", name="Buzz", price="15k COP", details="Consiste en un cabello muy corto, normalmente cortado al 1 y que se pasa por toda la cabeza por igual."};
    var corte2={id=2, icon="favorite_border", img="img/corte2.png", name="Fade", price="15k COP", details="Significa ‘degradado’ y consiste en un corte con nuca, patillas y laterales muy cortos o incluso afeitados, volviéndose más largo en la parte superior de la cabeza, que se corta a una altura del número 4."};
    var corte3={id=3, icon="favorite_border", img="img/corte3.png", name="Militar", price="15k COP", details="El corte militar es un pelín más largo en los laterales (cortados al 1½ o 2) y algo más largo, muy poco, en la zona de arriba, sobre un 3½)."};
    var corte4={id=4, icon="favorite_border", img="img/corte4.png", name="Mohicano", price="15k COP", details="Consiste en rapar ambos lados de la cabeza, dejándose una cresta en la zona central que va desde la frente hasta la nuca."};
    var corte5={id=5, icon="favorite_border", img="img/corte5.png", name="Calvo", price="8k COP", details="La cero por todos lados, util para brillar"};

    datoscortes=[corte1, corte2, corte3, corte4, corte5];
    
    listCortes = document.getElementById("listCortes");
    var template='';
    for(var i in datoscortes){
        template +='<div class="card card-small"><div class="card_icon">';
        template +='<a class="material-icons cl-red" id="btnFavCorte_'+datoscortes[i].id+'" name="'+datoscortes[i].id+'">'+datoscortes[i].icon+'</a></div>';
        template +='<a class="card_link" id="btnDetalleCorte_'+datoscortes[i].id+'" name="'+datoscortes[i].id+'">';
        template +='<div class="card_img"><img src="'+datoscortes[i].img+'"/></div>';
        template +='<div class="card_header"><h4 class="card_header-title">'+datoscortes[i].name+'</h4>';
        template +='<p class="card_header-meta">'+datoscortes[i].price+'</p></div></a></div>'
    }
    listCortes.innerHTML=template;

    detalleCorte = document.getElementById("detalleCorte");
    btnsDetalleCortes=[];
    for(var i=0; i < datoscortes.length; i++){
        btnsDetalleCortes.push(document.getElementById("btnDetalleCorte_"+datoscortes[i].id));
        btnsDetalleCortes[i].addEventListener("click", irDetalleCorte);
    }

    optcorte = document.getElementById("optCorte");
    cargarOpciones();
}

    }
}

function irDetalleCorte(){
    var id = parseInt(this.name)-1;
    var template='<div class="card_icon"><a href class="material-icons cl-red" id="btnFavDetCorte_'+id+'">'+datoscortes[id].icon+'</a></div>';
    template +='<div class="card_img"><img src="'+datoscortes[id].img+'"/></div>';
    template +='<div class="card_header"><h4 class="card_header-title">'+datoscortes[id].name+'</h4>';
    template +='<p class="card_header-meta">Precio '+datoscortes[id].price+'<br>';
    template +=datoscortes[id].details+'</p></div>';

    detalleCorte.innerHTML=template;
    ocultarSecciones();
    detallescorte.classList.remove("ocultar");
}