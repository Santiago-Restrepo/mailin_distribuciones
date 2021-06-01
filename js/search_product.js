const SEARCH_BAR = document.querySelector(".searchBar");
const CATALOG_CONTAINER = document.querySelector(".catalog__container");
let catalog;


const fetchCatalog = async () =>{
    let catalog_promise = await fetch(`${API}.json`);
    catalog =  await catalog_promise.json();
};

window.addEventListener('load', fetchCatalog);


SEARCH_BAR.addEventListener('keyup', async (e)=>{
    cleanCatalogContainer();
    if(!catalog){
        fetchCatalog();
    }
    filtered_catalog = catalog.filter(object => object.name.toLowerCase().includes(e.target.value.toLowerCase()));
    renderFilteredCatalog(filtered_catalog);

});

const loadProductInfo = (product_div, product) =>{
    try {
        let oldPrice = parseInt(product.prices.old.replace(".",""));
        let currentPrice = parseInt(product.prices.current.replace(".",""));
        let discount= Math.round(( oldPrice - currentPrice ) * 100 / oldPrice);
    
        //Relleno de información
    
        product_div.firstElementChild.firstElementChild.setAttribute("src", product.images.catalog); //renderizado de imagen
        if(product.prices.old){
            product_div.firstElementChild.lastElementChild.style.display="block";
            product_div.firstElementChild.lastElementChild.innerHTML= `${discount}%` //renderizado de descuento
            product_div.lastElementChild.lastElementChild.firstElementChild.style.display="block";
            product_div.lastElementChild.lastElementChild.firstElementChild.innerHTML= `<strike>$${product.prices.old}</strike>` //renderizado de descuento
        }
        product_div.lastElementChild.firstElementChild.innerHTML= product.name //renderizado de descuento
        product_div.lastElementChild.lastElementChild.lastElementChild.innerHTML= `$${product.prices.current}` //renderizado de descuento
        product_div.classList.add("fadeIn");
        
    } catch (error) {
        console.error(error);
    }
}

const openNoLoadProductModal = async (e)=>{
    //Guardamos la oferta que fue seleccionada accediendo al abuelo de la imagen clickeada
    try {
        renderModal();
        let product_selected= e.target.parentElement.parentElement;
        let product_number= product_selected.classList[1];//obtención que representa en la base de datos firebase
        let product = catalog.filter(element => element.id==product_number)[0];//De aquí obtiene el elemento que coincida con ese numero buscando en el 
        //array de objetos "loaded_products" el cual guarda los elementos que han cargado
        PRODUCT_MODAL.childNodes[2].firstElementChild.setAttribute("src",product.images.modal);//colocación de imagen
        PRODUCT_MODAL.childNodes[4].childNodes[1].innerHTML= product.name;//colocación de nombre
        PRODUCT_MODAL.childNodes[4].childNodes[3].innerHTML= product.description;//colocación de descripción
        PRODUCT_MODAL.childNodes[4].childNodes[5].innerHTML= `X ${product.size}`;//colocación del tamaño
        if(product.prices.old){
            PRODUCT_MODAL.childNodes[4].childNodes[7].firstElementChild.style.display= "block";
            PRODUCT_MODAL.childNodes[4].childNodes[7].firstElementChild.innerHTML= `<strike>$${product.prices.old}</strike>`;//colocación de precio antiguo
        }
        PRODUCT_MODAL.childNodes[4].childNodes[7].lastElementChild.innerHTML=`$${product.prices.current}`;//colocación de precio actual

        
    } catch (error) {
        renderModal();
        console.error(error);
    }
}

const createProductElement = (product) =>{
    //Creación de elementos HTML

    let product_div = document.createElement('div');
    let product__image_div = document.createElement('div');
    let product__image_img = document.createElement('img');
    let product__image_button = document.createElement('button');
    let product__image_span = document.createElement('span');
    let product__info_div = document.createElement('div');
    let product__info_span = document.createElement('span');
    let product__prices_div = document.createElement('div');
    let product__prices_before = document.createElement('span');
    let product__prices_new = document.createElement('span');

    //Asignación de clases, atributos, valores y eventos

    product_div.classList.add('product');
    product_div.addEventListener('click', openNoLoadProductModal);
    product_div.classList.add(product.id);
    product__image_div.classList.add('product__image');
    product__image_img.setAttribute('alt', "Imagen del producto");
    product__image_button.classList.add('view_more');
    product__image_button.innerText = "Ver más";
    product__image_button.addEventListener('click', openNoLoadProductModal);
    product__image_span.classList.add('product__discount');
    product__info_div.classList.add('product__info');
    product__info_span.classList.add('product__info-name');
    product__prices_div.classList.add('product__prices');
    product__prices_before.classList.add('product__prices-before');
    product__prices_new.classList.add('product__prices-new');

    //Distribución de elementos

    product__prices_div.appendChild(product__prices_before);
    product__prices_div.appendChild(product__prices_new);

    product__info_div.appendChild(product__info_span);
    product__info_div.appendChild(product__prices_div);

    product__image_div.appendChild(product__image_img);
    product__image_div.appendChild(product__image_button);
    product__image_div.appendChild(product__image_span);

    product_div.appendChild(product__image_div);
    product_div.appendChild(product__info_div);

    loadProductInfo(product_div, product);
    return product_div;

}


const renderFilteredCatalog = filtered_catalog => {
    filtered_catalog.forEach(product => {
        product_element = createProductElement(product);
        CATALOG_CONTAINER.appendChild(product_element);
    });
}

const cleanCatalogContainer = () => {
    CATALOG_CONTAINER.innerHTML="";
}

