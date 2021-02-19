const hamburguer_button = document.querySelector('.hamburguer_button');
const mobile_menu = document.querySelector('.mobile_menu');


hamburguer_button.addEventListener("click", ()=>{
    mobile_menu.classList.toggle("show");
    if(mobile_menu.classList.contains('show')){
        hamburguer_button.setAttribute('src', '../images/close_button.svg');
        hamburguer_button.style.transform="rotateY(360deg)";
    }else{
        hamburguer_button.setAttribute('src', '../images/hamburguer_menu.svg')
        hamburguer_button.style.transform="rotateY(0deg)";
    }
});