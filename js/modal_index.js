var PRODUCT_MODAL= document.querySelector(".productModal");

const openProductModal = async (e)=>{
    //Guardamos la oferta que fue seleccionada accediendo al abuelo de la imagen clickeada
    try {
        let product_selected= e.target.parentElement.parentElement;
        let product_number= product_selected.classList[1];//obtención de número de hijo
        let productPromise = await fetch(`${API}${product_number}.json`);//llamado a la base de datos
        let product = await productPromise.json();//llamado a la base de datos

        PRODUCT_MODAL.childNodes[2].firstElementChild.setAttribute("src",product.images.modal);//colocación de imagen
        PRODUCT_MODAL.childNodes[4].childNodes[1].innerHTML= product.name;//colocación de nombre
        PRODUCT_MODAL.childNodes[4].childNodes[3].innerHTML= product.description;//colocación de descripción
        if(product.prices.old){
            PRODUCT_MODAL.childNodes[4].childNodes[5].firstElementChild.style.display= "block";
            PRODUCT_MODAL.childNodes[4].childNodes[5].firstElementChild.innerHTML= `<strike>${product.prices.old}</strike>`;//colocación de precio antiguo
        }
        PRODUCT_MODAL.childNodes[4].childNodes[5].lastElementChild.innerHTML=product.prices.current;//colocación de precio actual

        renderModal();
        
    } catch (error) {
        renderModal();
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
        PRODUCT_MODAL.childNodes[4].childNodes[5].firstElementChild.firstElementChild.innerHTML= "Cargando...";
        PRODUCT_MODAL.childNodes[4].childNodes[5].firstElementChild.style.display= "none";
        PRODUCT_MODAL.childNodes[4].childNodes[5].lastElementChild.innerHTML= "Cargando...";
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

for (let i = 0; i < PRODUCTS_ARRAY.length; i++) {
    const element = PRODUCTS_ARRAY[i];
    element.firstElementChild.firstElementChild.addEventListener(("click"),openProductModal);
}
