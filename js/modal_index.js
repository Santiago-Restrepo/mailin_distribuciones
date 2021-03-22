const API= "https://mailindistribucionesapi-default-rtdb.firebaseio.com/product/";
const OFFERS_ARRAY= document.querySelectorAll(".offer");
var OFFER_MODAL= document.querySelector(".offerModal");

const openOfferModal = async (e)=>{
    //Guardamos la oferta que fue seleccionada accediendo al abuelo de la imagen clickeada
    try {
        let offer_selected= e.target.parentElement.parentElement;
        let offer_number= offer_selected.classList[1];//obtención de número de hijo
        let productPromise = await fetch(`${API}${offer_number}.json`);//llamado a la base de datos
        let product = await productPromise.json();//llamado a la base de datos

        OFFER_MODAL.childNodes[2].firstElementChild.setAttribute("src",product.image);//colocación de imagen
        OFFER_MODAL.childNodes[4].childNodes[1].innerHTML= product.name;
        OFFER_MODAL.childNodes[4].childNodes[3].innerHTML= product.description;
        OFFER_MODAL.childNodes[4].childNodes[5].firstElementChild.firstElementChild.innerHTML= product.prices.old;
        OFFER_MODAL.childNodes[4].childNodes[5].lastElementChild.innerHTML=product.prices.current;

        //Hacer aparecer ventana modal
        HTML_ELEMENT.style.overflow="hidden";
        MODAL_BACKGROUND[0].classList.add("is-visible");
        OFFER_MODAL.classList.add("modal-visible");
        document.addEventListener("keyup",(e)=>{
            if(e.key=="Escape"){
                closeOfferModal();
            }
        });

    } catch (error) {
        
    }
}
const closeOfferModal= ()=>{
    OFFER_MODAL.classList.remove("modal-visible");
    MODAL_BACKGROUND[0].classList.remove("is-visible")
    HTML_ELEMENT.style.overflow="auto";
    setTimeout(300,()=>{
        OFFER_MODAL.childNodes[2].firstElementChild.setAttribute("src","images/loading.gif");//colocación de imagen
        OFFER_MODAL.childNodes[4].childNodes[1].innerHTML= "Cargando...";
        OFFER_MODAL.childNodes[4].childNodes[3].innerHTML= "Cargando...";
        OFFER_MODAL.childNodes[4].childNodes[5].firstElementChild.firstElementChild.innerHTML= "Cargando...";
        OFFER_MODAL.childNodes[4].childNodes[5].lastElementChild.innerHTML= "Cargando...";
    })
    
}


OFFER_MODAL.firstElementChild.addEventListener("click",closeOfferModal);

for (let i = 0; i < OFFERS_ARRAY.length; i++) {
    const element = OFFERS_ARRAY[i];
    element.firstElementChild.firstElementChild.addEventListener(("click"),openOfferModal);
}
