if (window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0] != 'index' && window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0] != '') {
    import('./styles/estilos_linea.sass');    
}else{
}
import('./styles/estilos.sass');

import('./scripts/index_animations').then((indexAnimations) => indexAnimations.indexAnimations() )


import SingletonModal from "./scripts/modal.js";
import Catalog from './scripts/catalog.js';
// import { initializeApp } from 'firebase/app';

window.addEventListener('load', async ()=>{

    var firebaseConfig = {
        apiKey: "AIzaSyDw0Z6fG-wgUPzt_LnH2g-JivHLvMZ2S8k",
        authDomain: "mailindistribucionesapi.firebaseapp.com",
        databaseURL: "https://mailindistribucionesapi-default-rtdb.firebaseio.com",
        projectId: "mailindistribucionesapi",
        storageBucket: "mailindistribucionesapi.appspot.com",
        messagingSenderId: "816125570764",
        appId: "1:816125570764:web:bd984fa62ab7f186d89c69",
        measurementId: "G-GB2LF0G27Y"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig)
    
    
    //Definimos la página actual para saber qué catálogo cargar/renderizar, esto lo hallamos mediante la URL y jugando con Strings
    window.localStorage.setItem('actualPage',window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0]);
    window.localStorage.setItem('API','https://mailindistribucionesapi-default-rtdb.firebaseio.com/category');
    //Comprobamos si estamos en el index, si es así no tendremos que traer un catálogo y nos ahorramos procesamiento
    if (window.localStorage.getItem('actualPage') != 'index' && window.localStorage.getItem('actualPage') != '') {
        try {
            //bandera para comprobar si ya se hizo la petición
            // if (window.localStorage.getItem('catalogJson') === null || window.localStorage.getItem('catalogJson') == '') {
                // }
            let catalogPromise = await app.database().ref('category/').get();
            let catalogJson = catalogPromise.val();
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