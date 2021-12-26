import('./styles/estilos.sass');
import('./scripts/menu').then((menu) => menu.menu())
if (window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0] != 'index' && window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0] != '') {
    import('./styles/estilos_linea.sass');    
}else{
    import('./scripts/index_animations').then((indexAnimations) => indexAnimations.indexAnimations() )
    import ("./scripts/mailin-analytics").then((mailinAnalytics) => mailinAnalytics.mailinAnalytics());
    import('./scripts/glider').then((gliderSales) => gliderSales.gliderSales())
}

import SingletonModal from "./scripts/modal.js";
import Catalog from './scripts/catalog.js';
import { client } from './client';


window.addEventListener('load', async ()=>{
    
    //Definimos la página actual para saber qué catálogo cargar/renderizar, esto lo hallamos mediante la URL y jugando con Strings
    window.localStorage.setItem('actualPage',window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0]);
    window.localStorage.setItem('API','https://mailindistribucionesapi-default-rtdb.firebaseio.com/category.json');
    window.localStorage.setItem('analyticsAPI','https://mailindistribucionesapi-default-rtdb.firebaseio.com/visits.json');
    //Comprobamos si estamos en el index, si es así no tendremos que traer un catálogo y nos ahorramos procesamiento
    if (window.localStorage.getItem('actualPage') != 'index' && window.localStorage.getItem('actualPage') != '') {
        try {
            const contentfulResponse = await client.getEntries({
			limit: 200
		    });
            let catalogJson = contentfulResponse.items.filter((item) => item.sys.contentType.sys.id === "product")
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