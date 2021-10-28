import('./styles/estilos.sass');
if (window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0] != 'index' && window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0] != '') {
    import('./styles/estilos_linea.sass');    
}else{
    import('./scripts/index_animations').then((indexAnimations) => indexAnimations.indexAnimations() )
}
import('./scripts/menu').then((menu) => menu.menu())

import SingletonModal from "./scripts/modal.js";
import Catalog from './scripts/catalog.js';

window.addEventListener('load', async ()=>{

    //Definimos la página actual para saber qué catálogo cargar/renderizar, esto lo hallamos mediante la URL y jugando con Strings
    window.localStorage.setItem('actualPage',window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0]);
    window.localStorage.setItem('API','https://mailindistribucionesapi-default-rtdb.firebaseio.com/category.json');
    //Comprobamos si estamos en el index, si es así no tendremos que traer un catálogo y nos ahorramos procesamiento
    if (window.localStorage.getItem('actualPage') != 'index' && window.localStorage.getItem('actualPage') != '') {
        try {
            //bandera para comprobar si ya se hizo la petición
            // if (window.localStorage.getItem('catalogJson') === null || window.localStorage.getItem('catalogJson') == '') {
                // }
            let catalogPromise = await fetch(window.localStorage.getItem('API'));
            let catalogJson = await catalogPromise.json();
            window.localStorage.setItem('catalogJson',JSON.stringify(catalogJson));
            const catalog_container = document.querySelector('.catalog__container');
            
            const catalog = new Catalog({
                type: window.localStorage.getItem('actualPage'),
                container: catalog_container,
                searchBar: document.querySelector('.searchBar'),
            });
        } catch (error) {
            console.error(error);
        }
    }

    //Generamos las instancias del modal de distribuidor y establecemos los eventos para los botones del footer
    
    const distributorModalInstance = SingletonModal.getInstance('distributor');
    const distributor_button = document.querySelector(".buttons__container > .footer__button:nth-of-type(1)");
    distributor_button.addEventListener('click',distributorModalInstance.openModal.bind(distributorModalInstance));
    
    const wholesaleModalInstance = SingletonModal.getInstance('wholesale');
    const wholesale_button = document.querySelector(".buttons__container > .footer__button:nth-of-type(2)");
    wholesale_button.addEventListener('click',wholesaleModalInstance.openModal.bind(wholesaleModalInstance));
    //importación de animaciones del index
})