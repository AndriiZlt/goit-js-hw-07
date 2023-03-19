import { galleryItems } from "./gallery-items.js";
// Change code below this line
const cardsMarkup = createCardsMakrup(galleryItems);
const galleryUlRef = document.querySelector(".gallery");

galleryUlRef.insertAdjacentHTML("beforeend", cardsMarkup);

function createCardsMakrup(galleryItems) {
  console.log("ok");
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

console.log(galleryItems);
