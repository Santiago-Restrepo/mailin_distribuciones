class SingletonModal{
    static #productInstance;
    static #distributorInstance;
    static #wholesaleInstance;
    
    _constructor(){

    }
    
    static getInstance(type){
        let options={
            'product': this.getProductInstance(),
            'distributor': this.getDistributorInstance(),
            'wholesale': this.getWholesaleInstance()
        }
        return options[type];
        
        
    }
    static getProductInstance(){
        if (!SingletonModal.#productInstance) {
            //Definición de la instancia del modal de los productos con todos sus elementos HTML y métodos. Dentro de la definición el this hará referencia a esa instancia en específico
            SingletonModal.#productInstance = { 
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
                'link': document.querySelector(".productModal").children[2].children[4].children[1].children[0],
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
                    this.background.addEventListener('click',function(event){
                        if (event.target != this.window && event.target.parentNode != this.window && event.target.parentNode.parentNode != this.window && event.target.parentNode.parentNode.parentNode != this.window && event.target.parentNode.parentNode.parentNode.parentNode != this.window && event.target != this.link) {
                            this.closeModal();
                        }
                    }.bind(this));

                    //renderizado de elementos del modal
                    this.image.setAttribute('src',product.imagesUrl.modal);
                    this.image.classList.remove('loadgif');
                    this.name.innerHTML = product.name;
                    this.description.innerHTML = product.description;
                    this.size.innerHTML = `x ${product.size}`;
                    this.prices.current.innerHTML = product.prices.current;
                    this.prices.old.innerHTML = product.prices.old;
                    this.link.setAttribute('href',`https://api.whatsapp.com/send?phone=+573208762984&text=Hola, estoy interesado en el producto ${product.name}, podrías darme más información por favor`)
                    this.link.setAttribute('target',`_blank`)
                },
                //Función encargada de cerrar el modal

                'closeModal':function() {
                    //P rimero cierrra el modal y quita visibilización al background
                    this.window.classList.remove("modal-visible");
                    this.background.classList.remove("is-visible");
                    document.querySelector("#html").style.overflow="scroll";
                    //Luego resetea los valores que se encontraban en el modal
                    setTimeout(()=>{
                        this.image.setAttribute("src","../assets/load.gif");//colocación de imagen
                        this.image.classList.add('loadgif');
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
        return SingletonModal.#productInstance;
    }
    static getDistributorInstance(){
        if (!SingletonModal.#distributorInstance) {
            //Definición de la instancia del modal del distributor con todos sus elementos HTML y métodos. Dentro de la definición el this hará referencia a esa instancia en específico
            SingletonModal.#distributorInstance = { 
                'background': document.querySelectorAll(".modal")[1], //background de la ventana modal
                'window': document.querySelector(".distributorModal"), //Ventana modal propia
                'closeButton': document.querySelector(".distributorModal").children[0],
                //función que recibe por parámetro el producto que va a renderizar en la ventana modal
                'openModal':function(){
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
                    this.background.addEventListener('click',function(event){
                        if (event.target != this.window && event.target.parentNode != this.window) {
                            this.closeModal();
                        }
                    }.bind(this));
                },
                //Función encargada de cerrar el modal

                'closeModal':function() {
                    //P rimero cierrra el modal y quita visibilización al background
                    this.window.classList.remove("modal-visible");
                    this.background.classList.remove("is-visible");
                    document.querySelector("#html").style.overflow="scroll";
                }
            };
        }
        return SingletonModal.#distributorInstance;
    }
    static getWholesaleInstance(){
        if (!SingletonModal.#wholesaleInstance) {
            //Definición de la instancia del modal del wholesale con todos sus elementos HTML y métodos. Dentro de la definición el this hará referencia a esa instancia en específico
            SingletonModal.#wholesaleInstance = { 
                'background': document.querySelectorAll(".modal")[2], //background de la ventana modal
                'window': document.querySelector(".wholesaleModal"), //Ventana modal propia
                'closeButton': document.querySelector(".wholesaleModal").children[0],
                //función que recibe por parámetro el producto que va a renderizar en la ventana modal
                'openModal':function(){
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
                    this.background.addEventListener('click',function(event){
                        if (event.target != this.window && event.target.parentNode != this.window) {
                            this.closeModal();
                        }
                    }.bind(this));
                },
                //Función encargada de cerrar el modal

                'closeModal':function() {
                    //P rimero cierrra el modal y quita visibilización al background
                    this.window.classList.remove("modal-visible");
                    this.background.classList.remove("is-visible");
                    document.querySelector("#html").style.overflow="scroll";
                }
            };
        }
        return SingletonModal.#wholesaleInstance;
    }
}

export default SingletonModal;