const PRODUCTS = document.querySelectorAll(".product");
const OFFERS = document.querySelectorAll(".offer");

for (let i = 0; i < PRODUCTS.length; i++) {
    const element = PRODUCTS[i];
    element.addEventListener('mouseenter',()=>{
        element.childNodes[1].childNodes[3].style.opacity='1';//agregando estilos al .viewMore
    })
    element.addEventListener('mouseleave',()=>{
        element.childNodes[1].childNodes[3].style.opacity='0';
    })
}
for (let i = 0; i < OFFERS.length; i++) {
    const element = OFFERS[i];
    element.addEventListener('mouseenter',()=>{
        element.childNodes[1].childNodes[3].style.opacity='1';//agregando estilos al .viewMore
    })
    element.addEventListener('mouseleave',()=>{
        element.childNodes[1].childNodes[3].style.opacity='0';
    })
}