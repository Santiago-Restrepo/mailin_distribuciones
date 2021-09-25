class SingletonModal{
    
    static #instance;
    
    _constructor(){

    }
    
    static getInstance(){
        if (!SingletonModal.#instance) {
            //Definición de la instancia del modal con todos sus elementos HTML y métodos. Dentro de la definición el this hará referencia a esa instancia en específico
            SingletonModal.#instance = { 
                'background': document.querySelectorAll(".modal")[0], //background de la ventana modal
                'window': document.querySelector(".productModal"), //Ventana modal propia
                'closeButton': document.querySelector(".productModal").children[0],
                'image': document.querySelector(".productModal").children[1].children[0],
                'name': document.querySelector(".productModal").children[2].children[0],
                'description': document.querySelector(".productModal").children[2].children[1],
                'size': document.querySelector(".productModal").children[2].children[2],
                'prices': {
                    'old': document.querySelector(".productModal").children[2].children[3].children[0],
                    'current': document.querySelector(".productModal").children[2].children[3].children[1]
                },
                //función que recibe por parámetro el producto que va a renderizar en la ventana modal
                'openModal':function(product){
                    //Momento en el que el modal es abierto junto con su backgound opaco
                    document.querySelector("#html").style.overflow="hidden";
                    this.background.classList.add("is-visible");
                    this.window.classList.add("modal-visible");

                    //Se añaden los eventos para cerrar el modal a la tecla esc y al botón del modal

                    document.addEventListener("keyup",(e)=>{
                        if(e.key=="Escape"){
                            this.closeModal();
                        }
                    });
                    this.closeButton.addEventListener('click',this.closeModal.bind(this));

                    //renderizado de elementos del modal
                    this.image.setAttribute('src',product.imagesUrl.modal);
                    this.name.innerHTML = product.name;
                    this.description.innerHTML = product.description;
                    this.size.innerHTML = product.size;
                    this.prices.current.innerHTML = product.prices.current;
                    this.prices.old.innerHTML = product.prices.old;
                },
                //Función encargada de cerrar el modal

                'closeModal':function() {
                    //P rimero cierrra el modal y quita visibilización al background
                    this.window.classList.remove("modal-visible");
                    this.background.classList.remove("is-visible");
                    document.querySelector("#html").style.overflow="scroll";
                    //Luego resetea los valores que se encontraban en el modal
                    setTimeout(()=>{
                        this.image.setAttribute("src","../images/load.gif");//colocación de imagen
                        this.name.innerHTML= "Cargando...";
                        this.description.innerHTML= "Cargando...";
                        this.size.innerHTML= "Cargando...";//colocación del tamaño
                        this.prices.current.innerHTML= "Cargando...";
                        this.prices.old.style.display= "none";
                        this.prices.old.innerHTML= "Cargando...";
                    },300);
                }
            };
        }
        return SingletonModal.#instance;
    }
}

export default SingletonModal;