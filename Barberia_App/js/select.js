
let select, opciones, contenidoSelect, hiddenInput;

function init(){
    select = document.querySelector('#select');
    opciones = document.querySelector('#opciones');
    contenidoSelect = document.querySelector('#select .contenido-select');
    hiddenInput = document.querySelector('#corte');
    document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoSelect.innerHTML = e.currentTarget.innerHTML;
            select.classList.toggle('active');
            opciones.classList.toggle('active');
            hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
        });
    });

    select.addEventListener('click', () => {
        select.classList.toggle('active');
        opciones.classList.toggle('active');
    });
}

