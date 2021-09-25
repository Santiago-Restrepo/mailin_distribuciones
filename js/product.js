import SingletonModal from "./modal.js";

class Product{
    constructor(jsonElement){
        //Atributos que vendrán de la base de datos
        this.id = jsonElement.id;
        this.name = jsonElement.name;
        this.description = jsonElement.description;
        this.imagesUrl={
            'catalog':jsonElement.images.catalog,
            'modal':jsonElement.images.modal
        };
        this.prices={
            'current':jsonElement.prices.current,
            'old':jsonElement.prices.old
        };
        this.size= jsonElement.size;
        
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('product');
        this.htmlElement.innerHTML= `
        <div class="product__image">
            <img src="${this.imagesUrl.catalog}" alt="Imagen del producto ${this.name}"/>
            <button class="view_more">Ver más</button>
            <span class="product__discount"></span>
        </div>
        <div class="product__info">
            <span class="product__info-name">${this.name}</span>
            <div class="product__prices">
                <span class="product__prices-before">${this.prices.old}</span>
                <span class="product__prices-new">${this.prices.current}</span>
            </div>
        </div>`;
        this.rendered = false;
        this.modal = SingletonModal.getInstance();
        this.addEventToButton();
    };

    addEventToButton(){
        //le añadimos el evento al botón correspondiente de la instancia del producto, además la función que será disparada cuando el evento sea accionada es una función a la cual le configuramos el bind para que el this con el que interactuemos en la función openModal sea la única instancia del modal, de paso le pasamos como parámetro this, osea la instancia del producto, debido a que la función openModal recibe un producto como parámetro
        this.htmlElement.firstElementChild.children[1].addEventListener('click', this.modal.openModal.bind(this.modal,this))
    }
    
}

export default Product;