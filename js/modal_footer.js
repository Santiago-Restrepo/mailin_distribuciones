var MODAL_BACKGROUND= document.querySelectorAll(".modal");
var DISTRIBUTOR_MODAL= document.querySelector(".distributorModal");
var DISTRIBUTOR_BUTTON= document.querySelector(".buttons__container > .footer__button:nth-of-type(1)");
var WHOLESALE_MODAL= document.querySelector(".wholesaleModal");
var WHOLESALE_BUTTON= document.querySelector(".buttons__container > .footer__button:nth-of-type(2)");


const openDistributorModal =()=>{
    HTML_ELEMENT.style.overflow="hidden";
    MODAL_BACKGROUND[1].classList.add("is-visible");
    DISTRIBUTOR_MODAL.classList.add("modal-visible");

}
const closeDistributorModal= ()=>{
    DISTRIBUTOR_MODAL.classList.remove("modal-visible");
    MODAL_BACKGROUND[1].classList.remove("is-visible");
    HTML_ELEMENT.style.overflow="auto";
}
const openWholesaleModal =()=>{
    HTML_ELEMENT.style.overflow="hidden";
    MODAL_BACKGROUND[2].classList.add("is-visible");
    WHOLESALE_MODAL.classList.add("modal-visible");
}
const closeWholeModal= ()=>{
    WHOLESALE_MODAL.classList.remove("modal-visible");
    MODAL_BACKGROUND[2].classList.remove("is-visible");
    HTML_ELEMENT.style.overflow="auto";
}

DISTRIBUTOR_MODAL.firstElementChild.addEventListener("click",closeDistributorModal);
WHOLESALE_MODAL.firstElementChild.addEventListener("click",closeWholeModal);
DISTRIBUTOR_BUTTON.addEventListener("click",openDistributorModal);
WHOLESALE_BUTTON.addEventListener("click",openWholesaleModal);
