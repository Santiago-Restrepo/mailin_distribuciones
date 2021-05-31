const API= "https://mailindistribucionesapi-default-rtdb.firebaseio.com/product/";
const PRODUCT_NODELIST= document.querySelectorAll(".product");
const PRODUCT_ARRAY = Array.apply(null, PRODUCT_NODELIST);
let windowSize= (window.innerHeight);

const renderProduct= async (element)=>{

    try {
        let product_number= element.classList[1];
        let productPromise = await fetch(`${API}${product_number}.json`);//llamado a la base de datos
        let product = await productPromise.json();//llamado a la base de datos
        let oldPrice = parseInt(product.prices.old.replace(".",""));
        let currentPrice = parseInt(product.prices.current.replace(".",""));
        let discount= Math.round(( oldPrice - currentPrice ) * 100 / oldPrice);
    
        //renderizado de producto
    
        element.firstElementChild.firstElementChild.setAttribute("src", product.images.catalog); //renderizado de imagen
        if(product.prices.old){
            element.firstElementChild.lastElementChild.style.display="block";
            element.firstElementChild.lastElementChild.innerHTML= `${discount}%` //renderizado de descuento
            element.lastElementChild.lastElementChild.firstElementChild.style.display="block";
            element.lastElementChild.lastElementChild.firstElementChild.innerHTML= `<strike>$${product.prices.old}</strike>` //renderizado de descuento
        }
        element.lastElementChild.firstElementChild.innerHTML= product.name //renderizado de descuento
        element.lastElementChild.lastElementChild.lastElementChild.innerHTML= `$${product.prices.current}` //renderizado de descuento
        element.classList.add("fadeIn");
        
    } catch (error) {
        
    }

}

const renderVisibleProduct = () =>{
    let result = PRODUCT_ARRAY.filter(catalog_product => windowSize > catalog_product.getBoundingClientRect().top && !catalog_product.lastElementChild.firstElementChild.textContent);
    if (result) {
        result.forEach(element => {
            renderProduct(element);
        });
    }
}

window.addEventListener('scroll', ()=>{
    renderVisibleProduct();
});

renderVisibleProduct();
