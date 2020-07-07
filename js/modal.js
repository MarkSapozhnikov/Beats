const openButton = document.querySelector("#openOverlay");
const body = document.body;

openButton.addEventListener("click", e => {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    overlayElement.addEventListener("click", e => {
        if(e.target == overlayElement){
            closeElement.click();
        }
        
    })


    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");

    const contentElement1 = document.createElement("div");
    contentElement1.classList.add("content");
    contentElement1.innerHTML = "О&nbsp;нас";

    const contentElement2 = document.createElement("div");
    contentElement2.classList.add("content");
    contentElement2.innerHTML = "Наушники";

    const contentElement3 = document.createElement("div");
    contentElement3.classList.add("content");
    contentElement3.innerHTML = "Команда";

    const contentElement4 = document.createElement("div");
    contentElement4.classList.add("content");
    contentElement4.innerHTML = "Цвета";

    const contentElement5 = document.createElement("div");
    contentElement5.classList.add("content");
    contentElement5.innerHTML = "Отзывы";

    const contentElement6 = document.createElement("div");
    contentElement6.classList.add("content");
    contentElement6.innerHTML = "Как&nbsp;мы&nbsp;работаем";

    const contentElement7 = document.createElement("div");
    contentElement7.classList.add("content");
    contentElement7.innerHTML = "Контакты";


    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.href = "#";

    closeElement.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    overlayElement.appendChild(closeElement);
    containerElement.appendChild(contentElement1);
    containerElement.appendChild(contentElement2);
    containerElement.appendChild(contentElement3);
    containerElement.appendChild(contentElement4);
    containerElement.appendChild(contentElement5);
    containerElement.appendChild(contentElement6);
    containerElement.appendChild(contentElement7);
    body.appendChild(overlayElement);
})