// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery")

const markup = galleryItems
.map(({preview, original, description}) => 
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)
  .join("");


  gallery.insertAdjacentHTML("afterbegin", markup);
  
  gallery.addEventListener("click", lightboxModal)

  gallery.onclick = function lightboxModal (e){
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG"){
        return;
    };
    
    const instance = basicLightbox.create(
        `<img width="1400" height="900" src = ${e.target.dataset.source}>`
    );
    instance.show();

    document.addEventListener("keydown", (e) =>{
        if (e.key === "Escape") {
          instance.close();
          }
        });
    }
