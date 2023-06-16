// options domicilio
let btnDomicilio = document.querySelector('.__domicilio');
let optionsDomicilio = document.querySelector('.__options_domicilio');

btnDomicilio.addEventListener('click',()=> {
    let main = document.querySelector('main');
    optionsDomicilio.style.display = 'block';
    optionsMoradores.style.display = 'none';

    main.addEventListener('mouseover',()=> {
        optionsDomicilio.style.display = 'none';
    });
});

// options moradores
let btnMoradores = document.querySelector('.__moradores');
let optionsMoradores = document.querySelector('.__options_morador');

btnMoradores.addEventListener('click',()=> {
    let main = document.querySelector('main');
    optionsMoradores.style.display = 'block';
    optionsDomicilio.style.display = 'none';

    main.addEventListener('mouseover',()=> {
        optionsMoradores.style.display = 'none';
    });
});


// perfil

let optionPerfil = document.querySelector('.__icone_tres_p');
let fotoUsuario = document.querySelector('.__foto_do_usuario');
let paiFotoUsuario = document.querySelector('.__foto_perfil');
let caixaOption = document.querySelector('.__container_options_perfil');

function onClick() {
    caixaOption.style.display = 'block';

    optionPerfil.style.display = 'none';

    paiFotoUsuario.style.background = 'none';
    paiFotoUsuario.style.cursor = 'pointer';

    fotoUsuario.style.filter = 'invert(100%)';
    fotoUsuario.src = 'assets/img/x.png';
}

function teste() {
    caixaOption.style.display = 'none';

    optionPerfil.style.display = 'block';

    fotoUsuario.src = 'assets/img/perfil.png';
    fotoUsuario.style.filter = 'invert(55%)';

    paiFotoUsuario.style.background = '#e8e8e8';
    paiFotoUsuario.style.cursor = 'default';
}
