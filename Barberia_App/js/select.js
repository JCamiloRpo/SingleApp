function init(){

    /* Select Cortes */
    const sltCorte = document.querySelector('#sltCorte');
    const optCorte = document.querySelector('#optCorte');
    const contenidoCorte = document.querySelector('#sltCorte .contenido-select');
    const corte = document.querySelector('#corte');
    document.querySelectorAll('#optCorte > .opcion').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoCorte.innerHTML = e.currentTarget.innerHTML;
            sltCorte.classList.toggle('active');
            optCorte.classList.toggle('active');
            corte.value = e.currentTarget.querySelector('.titulo').innerText;
        });
    });

    sltCorte.addEventListener('click', () => {
        sltCorte.classList.toggle('active');
        optCorte.classList.toggle('active');
    });

    /* Select Barberos */
    const sltBarbero = document.querySelector('#sltBarbero');
    const optBarbero = document.querySelector('#optBarbero');
    const contenidoBarbero = document.querySelector('#sltBarbero .contenido-select');
    const barbero = document.querySelector('#barbero');
    document.querySelectorAll('#optBarbero > .opcion').forEach((opcion) => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            contenidoBarbero.innerHTML = e.currentTarget.innerHTML;
            sltBarbero.classList.toggle('active');
            optBarbero.classList.toggle('active');
            barbero.value = e.currentTarget.querySelector('.titulo').innerText;
        });
    });

    sltBarbero.addEventListener('click', () => {
        sltBarbero.classList.toggle('active');
        optBarbero.classList.toggle('active');
    });
}

