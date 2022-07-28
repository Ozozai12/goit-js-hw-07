import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryList = galleryItems.map(item => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}";
            />
        </a>
    </div>
    `
}).join("");
    
gallery.insertAdjacentHTML('beforeend', galleryList);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    modalShow(event);
}

function modalShow(event) {
    window.addEventListener("keydown", onCloseModalEscape);

    const modalWindow = basicLightbox.create(`
        <div class="modal">
            <img src="${event.target.dataset.source}"
        </div>
        `,
        { onClose: (modalWindow) => {
            window.removeEventListener("keydown", onCloseModalEscape);
        }})
    
    modalWindow.show()

    function onCloseModalEscape(event) {
        if (event.code === 'Escape') {
            modalWindow.close();
        }
    }
}

        






    
