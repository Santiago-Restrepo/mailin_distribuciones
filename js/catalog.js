import Product from "./product.js";

class Catalog{
    constructor(config){
        this.entireCatalog = [];
        this.type = config.type;
        this.container = config.container;
        this.content = this.getProductArray(JSON.parse(window.localStorage.getItem('catalogJson'))[`${this.type}`]);
        this.searchBar = config.searchBar;
        this.searchBar.addEventListener('keyup', this.searchCatalog.bind(this));

        this.setEntireCatalog(JSON.parse(window.localStorage.getItem('catalogJson')));
        //Renderizamos el catálogo que capturamos
        this.renderCatalog(this.content);
    }

    getProductArray(jsonElement){
        let productArray = [];

        jsonElement.forEach(element => {
            productArray.push(new Product(element));
        });
        return productArray;
    }
    
    setEntireCatalog(jsonCatalog){
        for (const category in jsonCatalog) {
            jsonCatalog[category].forEach(element => {
                this.entireCatalog.push(new Product(element))//enviamos el JSON que nos llegó como parametro
            });
        }
    }

    renderCatalog(content){
        //Al container del catálogo le hacemos un push de cada producto del catálogo que fue enviado por parámetro  
        content.forEach(element => {
            this.container.appendChild(element.htmlElement);
        });
    }

    searchCatalog(){
        //Limpiamos todo lo que haya rederizado
        this.cleanCatalogContainer();
        //Cada que se levante una tecla del teclado se recorrerán todas las categorías del catálogo y se hará un map en cada una de ellas para buscar los productos que se están buscando

        // filtra el catálogo por lo que se encuentre en el input buscando en this.entireCatalog
        let filtered_catalog = this.entireCatalog.filter(product => product.name.toLowerCase().includes(this.searchBar.value.toLowerCase()))
        
        // renderiza lo que haya hecho match, si el input está vacío vuelve a renderizar el catálogo correspondiente a la página
        !this.searchBar.value ? this.renderCatalog(this.content) : this.renderCatalog(filtered_catalog);
    }


    cleanCatalogContainer = () => {
        this.container.innerHTML="";
    }
}

export default Catalog;