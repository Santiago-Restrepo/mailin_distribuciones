var PRODUCT_MODAL= document.querySelector(".productModal");

const openProductModal = (e)=>{
    //Guardamos la oferta que fue seleccionada accediendo al abuelo de la imagen clickeada
    try {
        renderModal();
        let product_selected= e.target.parentElement.parentElement;
        let product_number= product_selected.classList[1];//obtención que representa en la base de datos firebase
        let product = loaded_products.filter(element => element.id==product_number)[0];//De aquí obtiene el elemento que coincida con ese numero buscando en el 
        //array de objetos "loaded_products" el cual guarda los elementos que han cargado
        // PRODUCT_MODAL.childNodes[2].firstElementChild.setAttribute("src",product.images.modal);//colocación de imagen
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

const closeProductModal= ()=>{
    PRODUCT_MODAL.classList.remove("modal-visible");
    MODAL_BACKGROUND[0].classList.remove("is-visible")
    HTML_ELEMENT.style.overflow="auto";
    setTimeout(()=>{
        PRODUCT_MODAL.childNodes[2].firstElementChild.setAttribute("src","../images/load.gif");//colocación de imagen
        PRODUCT_MODAL.childNodes[4].childNodes[1].innerHTML= "Cargando...";
        PRODUCT_MODAL.childNodes[4].childNodes[3].innerHTML= "Cargando...";
        PRODUCT_MODAL.childNodes[4].childNodes[5].innerHTML= "Cargando...";//colocación del tamaño
        PRODUCT_MODAL.childNodes[4].childNodes[7].firstElementChild.firstElementChild.innerHTML= "Cargando...";
        PRODUCT_MODAL.childNodes[4].childNodes[7].firstElementChild.style.display= "none";
        PRODUCT_MODAL.childNodes[4].childNodes[7].lastElementChild.innerHTML= "Cargando...";
    },300);
    
}

const renderModal= ()=>{
            //Hacer aparecer ventana modal
            HTML_ELEMENT.style.overflow="hidden";
            MODAL_BACKGROUND[0].classList.add("is-visible");
            PRODUCT_MODAL.classList.add("modal-visible");
            document.addEventListener("keyup",(e)=>{
                if(e.key=="Escape"){
                    closeProductModal();
                }
            });
}


PRODUCT_MODAL.firstElementChild.addEventListener("click",closeProductModal);

for (let i = 0; i < PRODUCT_ARRAY.length; i++) {
    const element = PRODUCT_ARRAY[i];
    element.firstElementChild.firstElementChild.addEventListener(("click"),openProductModal);
}
