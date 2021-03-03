const OFFERS_ARRAY= document.querySelectorAll(".offer");
var OFFER_MODAL= document.querySelector(".offerModal");

const openOfferModal = (e)=>{
    //Guardamos la oferta que fue seleccionada accediendo al abuelo de la imagen clickeada
    let offer_selected= e.target.parentElement.parentElement;
    
    //Retiro de información
    let offer_image_url= offer_selected.firstElementChild.childNodes[0].src; //Url de la imagen
    let offer_image_urlSplitted= offer_image_url.split("/");//url partida por slashes
    let offer_prices= offer_selected.firstElementChild.childNodes[5]; //Precios antes y nuevo
    let offer_image_name=offer_image_urlSplitted[offer_image_urlSplitted.length-1].split(".")[0]; //nombre de la imagen sacado de la url partida
    let offer_name= offer_selected.firstElementChild.childNodes[3].innerHTML; //Nombre de la oferta
    let offer_description= offer_selected.lastElementChild.firstElementChild.innerHTML;//Descripción de la oferta
    let offer_price_before= offer_prices.firstElementChild.firstElementChild.innerHTML;//Precio antes
    let offer_price_new= offer_prices.lastElementChild.innerHTML;//Precio nuevo
    let offer_link= offer_selected.lastElementChild.lastElementChild.href;//Descripción de la oferta
    
    //colocación de información en modal
    
    OFFER_MODAL.childNodes[2].firstElementChild.setAttribute("src","images/"+offer_image_name+"_modal.jpg");//colocación de imagen
    OFFER_MODAL.childNodes[4].childNodes[1].innerHTML= offer_name;
    OFFER_MODAL.childNodes[4].childNodes[3].innerHTML= offer_description;
    OFFER_MODAL.childNodes[4].childNodes[5].firstElementChild.firstElementChild.innerHTML=offer_price_before;
    OFFER_MODAL.childNodes[4].childNodes[5].lastElementChild.innerHTML=offer_price_new;
    OFFER_MODAL.childNodes[4].childNodes[7].lastElementChild.firstElementChild.setAttribute("href",offer_link);
    
    //Hacer aparecer ventana modal
    HTML_ELEMENT.style.overflow="hidden";
    MODAL_BACKGROUND[0].classList.add("is-visible");
    OFFER_MODAL.classList.add("modal-visible");
    document.addEventListener("keyup",(e)=>{
        if(e.key=="Escape"){
            closeOfferModal();
        }
    });
    // document.addEventListener("click",(e)=>{
    //     if (e.target) {
            
    //     }
    // })
    // if (window.matchMedia("(min-width: 768px)").matches) {
        //     /* La pantalla tiene al menos 768 píxeles de ancho */
        
        //     MODAL_BACKGROUND.style.display="flex";
        // } else {
            //     /* La pantalla tiene menos de 768 píxeles de ancho */
            //     OFFER_MODAL.style.opacity="1";
            //     MODAL_BACKGROUND.style.display="block";
            //   }
}
const closeOfferModal= ()=>{
    OFFER_MODAL.classList.remove("modal-visible");
    MODAL_BACKGROUND[0].classList.remove("is-visible")
    HTML_ELEMENT.style.overflow="auto";
}


OFFER_MODAL.firstElementChild.addEventListener("click",closeOfferModal);
OFFERS_ARRAY.forEach(element => {
    //Ciclo para agregar evento a cada imagen de cada oferta
    element.firstElementChild.firstElementChild.addEventListener(("click"),openOfferModal);
});
