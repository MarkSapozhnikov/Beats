const openButton = document.querySelector("#openOverlay");
const body = document.body;

$(document).ready(() => {
    $('.hamburger').on('click', e => {
    
        $('.menu').addClass('menu__overlay');
    });
    $('.close').on('click', e => {
    
        $('.menu').removeClass('menu__overlay');
    });
    $('.specific').on('click', e => {
        
        $('.specific__elem').addClass('specific__elem-done');
    });
    
    

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.href = "#";
    

    closeElement.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    });

    overlayElement.appendChild(closeElement);
    body.appendChild(overlayElement);
});