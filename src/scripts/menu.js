import hamburguerImage from "../assets/hamburguer_menu.svg"
import closeImage from "../assets/close_button.svg"
export const menu = ()=>{
    const hamburguer_button = document.querySelector('.hamburguer_button');
    const mobile_menu = document.querySelector('.mobile_menu');
    const hero = document.querySelector('#hero');
    const sales = document.querySelector('#sales');
    const lines = document.querySelector('#lines');
    const story = document.querySelector('#story');
    const location_section = document.querySelector('#location');
    const contact = document.querySelector('.footer');
    const home_button = document.querySelector(".mobile_menu > li:nth-of-type(1)");
    const contact_button = document.querySelector(".mobile_menu > li:nth-of-type(2)");
    const sales_button = document.querySelector(".mobile_menu > li:nth-of-type(3)");
    const lines_button = document.querySelector(".mobile_menu > li:nth-of-type(4)");
    const story_button = document.querySelector(".mobile_menu > li:nth-of-type(5)");
    const location_button = document.querySelector(".mobile_menu > li:nth-of-type(6)");
    const sections = [home_button,contact_button,lines_button,story_button,location_button,sales_button];

    //evento para cambiar de color el nav

    sections.forEach(element => {
        element.addEventListener('click', ()=>{
            sections.forEach(internalElement => {
                internalElement.classList.remove('active');
            });
            element.classList.add('active');
        })
    });

    //evento para cerrar menú mobile cada que se clickee una opción

    for (let i = 0; i < mobile_menu.children.length; i++) {
        const element = mobile_menu.children[i];
        element.addEventListener('click',()=>{
            closeMenu();
        })
        
    }
    const closeMenu = ()=>{
        hamburguer_button.click();
    }

    //evento para intercambiar hamburguer menu por close button

    hamburguer_button.addEventListener("click", ()=>{
        mobile_menu.classList.toggle("show");
        if(mobile_menu.classList.contains('show')){
            hamburguer_button.setAttribute('src', closeImage);
            hamburguer_button.style.transform="rotateY(360deg)";
        }else{
            hamburguer_button.setAttribute('src', hamburguerImage)
            hamburguer_button.style.transform="rotateY(0deg)";
        }
    });
}

