const API= "https://mailindistribucionesapi-default-rtdb.firebaseio.com/product/";
var PRODUCTS_ARRAY= document.querySelectorAll(".offer");

const renderProduct= async (element)=>{
    let product_number= element.classList[1];
    let productPromise = await fetch(`${API}${product_number}.json`);//llamado a la base de datos
    let product = await productPromise.json();//llamado a la base de datos
    let oldPrice = parseInt(product.prices.old.replace(".",""));
    let currentPrice = parseInt(product.prices.current.replace(".",""));
    let discount= Math.round(( oldPrice - currentPrice ) * 100 / oldPrice);

    //renderizado de producto

    element.firstElementChild.firstElementChild.setAttribute("src", product.images.catalog); //renderizado de imagen
    element.firstElementChild.lastElementChild.innerHTML= `${discount}%` //renderizado de descuento
    element.lastElementChild.firstElementChild.innerHTML= product.name //renderizado de descuento
    element.lastElementChild.lastElementChild.firstElementChild.innerHTML= product.prices.old //renderizado de descuento
    element.lastElementChild.lastElementChild.lastElementChild.innerHTML= product.prices.current //renderizado de descuento

}


PRODUCTS_ARRAY.forEach(element => {
    renderProduct(element)
});

