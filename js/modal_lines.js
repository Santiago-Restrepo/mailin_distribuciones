if (window.matchMedia("(min-width: 1024px)").matches) {
    PRODUCT_ARRAY.forEach(element => {
        element.firstElementChild.childNodes[3].addEventListener(("click"),openProductModal)
    });
}
