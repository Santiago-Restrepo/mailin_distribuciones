import Product from "./product";

class Catalog{
    constructor(config){
        this.entireCatalog = [];
        this.type = config.type;
        this.container = config.container;
        this.content = this.getProductArray(JSON.parse(window.localStorage.getItem('catalogJson')).filter((item)=> item.metadata.tags[0].sys.id === this.type));
        this.searchBar = config.searchBar;
        this.searchBar.addEventListener('keyup', this.searchCatalog.bind(this));
        this.loadgif = this.container.nextSibling;
        this.setEntireCatalog(JSON.parse(window.localStorage.getItem('catalogJson')));
        //Renderizamos el catálogo que capturamos
        this.renderCatalog(this.content);
        //Removemos el gif de carga que estaba esperando a los productos
        this.loadgif.parentNode.removeChild(this.loadgif);
    }

    getProductArray(jsonElement){
        let productArray = [];
        //Recorremos elemento JSON que nos llegue por parámetro para retornar una Array de productos basado en esos elementos
        jsonElement.forEach(element => {
            productArray.push(new Product(element.fields));
        });
        return productArray;
    }
    
    setEntireCatalog(jsonCatalog){
        jsonCatalog.forEach(element => {
            this.entireCatalog.push(new Product(element.fields))
        });
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