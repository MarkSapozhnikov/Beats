const openButton = document.querySelector("#openOverlay");
const body = document.body;
// const overlayElement = document.querySelector(".menu");

$(document).ready(() => {
    $('.hamburger').on('click', e => {
    
        $('.menu').addClass('menu__overlay');
    });
    $('.close').on('click', e => {
    
        $('.menu').removeClass('menu__overlay');
    });
    $('.menu__link').on('click', e => {
    
        $('.menu').removeClass('menu__overlay');
    });
});