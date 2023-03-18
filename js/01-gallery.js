import { galleryItems } from "./gallery-items.js";
// Change code below this line

const cardsMarkup = createCardsMakrup(galleryItems);
const galleryUlRef = document.querySelector(".gallery");

galleryUlRef.addEventListener("click", onCardClick);

galleryUlRef.insertAdjacentHTML("beforeend", cardsMarkup);

function createCardsMakrup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onCardClick(event) {
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

console.log(galleryItems);
