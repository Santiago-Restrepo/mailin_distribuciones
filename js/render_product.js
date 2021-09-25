const API= "https://mailindistribucionesapi-default-rtdb.firebaseio.com/product";
const PRODUCT_NODELIST= document.querySelectorAll(".product");
const PRODUCT_ARRAY = Array.apply(null, PRODUCT_NODELIST);
let loaded_products= [];
let windowSize= (window.innerHeight * 2 );

const fetchProduct = async (product_number) => {
    let product = await firebase.database().ref().child("product").child(product_number).get().then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    }).catch((error) => {
        console.error(error);
        return null;
    });
    return product;    
}

const renderProduct= async (element)=>{
    try {
        let product_number= element.classList[1];
        let productPromise = await fetch(`${API}/${product_number}.json`);//llamado a la base de datos
        let product = await productPromise.json();//llamado a la base de datos
        // let product = await fetchProduct(product_number);//llamado a la base de datos
        loaded_products.push(product);//Hacemos push al array loaded_products para no volver a cargar esos productos luego
        let oldPrice = parseInt(product.prices.old.replace(".",""));
        let currentPrice = parseInt(product.prices.current.replace(".",""));
        let discount= Math.round(( oldPrice - currentPrice ) * 100 / oldPrice);
        
        //renderizado de producto
        
        // element.firstElementChild.firstElementChild.setAttribute("src", product.images.catalog); //renderizado de imagen
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
        console.error(error);
    }

}

const renderVisibleProduct = () =>{
    //Result va ser el array que contenga todos los productos que se están "viendo en el momento"
    let result = PRODUCT_ARRAY.filter(catalog_product => windowSize > catalog_product.getBoundingClientRect().top && !catalog_product.classList.contains("fadeIn"));
    result.forEach(element => {
        if(!element.classList.contains("fadeIn")){
            renderProduct(element);  
        } 
    });
}

window.addEventListener('scroll', ()=>{
    renderVisibleProduct();
});

renderVisibleProduct();
