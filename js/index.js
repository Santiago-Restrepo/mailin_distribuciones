import Product from './product.js';
import SingletonModal from "./modal.js";
import Catalog from './catalog.js';

window.addEventListener('load', async ()=>{
    //Definimos la página actual para saber qué catálogo cargar/renderizar, esto lo hallamos mediante la URL y jugando con Strings
    window.localStorage.setItem('actualPage',window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0]);
    window.localStorage.setItem('API','https://mailindistribucionesapi-default-rtdb.firebaseio.com/category');
    //Comprobamos si estamos en el index, si es así no tendremos que traer un catálogo y nos ahorramos procesamiento
    if (window.localStorage.getItem('actualPage') != 'index' && window.localStorage.getItem('actualPage') != '') {
        try {
            //bandera para comprobar si ya se hizo la petición ----IMPORTANT-----
            // if (!window.localStorage.getItem('catalogJson')) {
            // }
            let catalogPromise = await fetch(`${window.localStorage.getItem('API')}.json`);//llamado a la base de datos para traer los productos del catálogo en  específico
            let catalogJson = await catalogPromise.json();//Conversión de promesa a JSON
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
})