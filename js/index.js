import Product from './product.js';
import Catalog from './catalog.js';

window.addEventListener('load', async ()=>{
    //Definimos la página actual para saber qué catálogo cargar/renderizar, esto lo hallamos mediante la URL y jugando con Strings
    window.localStorage.setItem('actualPage',window.location.href.split('/')[window.location.href.split('/').length-1].split('.')[0]);
    window.localStorage.setItem('API','https://mailindistribucionesapi-default-rtdb.firebaseio.com/category');
    try {
        // if (!window.localStorage.getItem('catalogJson')) {
            let catalogPromise = await fetch(`${window.localStorage.getItem('API')}.json`);//llamado a la base de datos para traer los productos del catálogo en  específico
            let catalogJson = await catalogPromise.json();//Conversión de promesa a JSON
            window.localStorage.setItem('catalogJson',JSON.stringify(catalogJson));
        // }
        //bandera para comprobar si ya se hizo la petición ----IMPORTANT-----
        const catalog_container = document.querySelector('.catalog__container');
        const catalog = new Catalog({
            type: window.localStorage.getItem('actualPage'),
            container: catalog_container,
            searchBar: document.querySelector('.searchBar'),
        });
    } catch (error) {
        console.error(error);
    }
})