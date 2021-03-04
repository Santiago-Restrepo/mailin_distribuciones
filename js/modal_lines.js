const OFFERS_ARRAY= document.querySelectorAll(".offer");
const PRODUCTS_ARRAY= document.querySelectorAll(".product");
var LINES_MODAL= document.querySelector(".offerModal");

const openOfferProductModal = (e)=>{
    //Guardamos la oferta que fue seleccionada accediendo al abuelo de la imagen clickeada
    let offerProduct_selected= e.target.parentElement.parentElement;
    
    //Retiro de información
    let offerProduct_image_url= offerProduct_selected.firstElementChild.firstElementChild.src; //Url de la imagen
    let offerProduct_image_urlSplitted= offerProduct_image_url.split("/");//url partida por slashes
    let offerProduct_image_name=offerProduct_image_urlSplitted[offerProduct_image_urlSplitted.length-1].split(".")[0]; //nombre de la imagen sacado de la url partida
    let offerProduct_name= offerProduct_selected.lastElementChild.firstElementChild.innerHTML; //Nombre de la oferta
    let offerProduct_link= offerProduct_selected.lastElementChild.lastElementChild.href;//Descripción de la oferta
    let offerProduct_description;
    if (offerProduct_selected.classList.contains("product")) {
        let offerProduct_price= offerProduct_selected.lastElementChild.childNodes[2].innerHTML; //Precios del producto
        LINES_MODAL.childNodes[4].childNodes[5].lastElementChild.innerHTML=offerProduct_price;
        offerProduct_description= offerProduct_selected.lastElementChild.childNodes[4].innerHTML;//Descripción de la oferta
    }else{
        let offerProduct_prices= offerProduct_selected.lastElementChild.childNodes[3]; //Precios antes y nuevo
        let offerProduct_price_before= offerProduct_prices.firstElementChild.firstElementChild.innerHTML;//Precio antes
        let offerProduct_price_new= offerProduct_prices.lastElementChild.innerHTML;//Precio nuevo
        LINES_MODAL.childNodes[4].childNodes[5].firstElementChild.firstElementChild.innerHTML=offerProduct_price_before;
        LINES_MODAL.childNodes[4].childNodes[5].lastElementChild.innerHTML=offerProduct_price_new;
        offerProduct_description= offerProduct_selected.lastElementChild.childNodes[5].innerHTML;//Descripción de la oferta
    }
    
    //colocación de información en modal
    
    LINES_MODAL.childNodes[2].firstElementChild.setAttribute("src","../images/"+offerProduct_image_name+"_modal.jpg");//colocación de imagen
    LINES_MODAL.childNodes[4].childNodes[1].innerHTML= offerProduct_name;
    LINES_MODAL.childNodes[4].childNodes[3].innerHTML= offerProduct_description;
    LINES_MODAL.childNodes[4].childNodes[7].lastElementChild.firstElementChild.setAttribute("href",offerProduct_link);
    
    //Hacer aparecer ventana modal
    HTML_ELEMENT.style.overflow="hidden";
    MODAL_BACKGROUND[0].classList.add("is-visible");
    LINES_MODAL.classList.add("modal-visible");
    document.addEventListener("keyup",(e)=>{
        if(e.key=="Escape"){
            closeOfferModal();
        }
    });

}
const closeOfferModal= ()=>{
    LINES_MODAL.classList.remove("modal-visible");
    MODAL_BACKGROUND[0].classList.remove("is-visible")
    HTML_ELEMENT.style.overflow="auto";
}

LINES_MODAL.firstElementChild.addEventListener("click",closeOfferModal);

if (window.matchMedia("(min-width: 1024px)").matches) {
    OFFERS_ARRAY.forEach(element => {
        element.firstElementChild.childNodes[3].addEventListener(("click"),openOfferProductModal)
    });
    PRODUCTS_ARRAY.forEach(element => {
        element.firstElementChild.childNodes[3].addEventListener(("click"),openOfferProductModal)
    });
} else {
    OFFERS_ARRAY.forEach(element => {
        element.firstElementChild.firstElementChild.addEventListener(("click"),openOfferProductModal)
    });
    PRODUCTS_ARRAY.forEach(element => {
        element.firstElementChild.firstElementChild.addEventListener(("click"),openOfferProductModal)
    });
}
