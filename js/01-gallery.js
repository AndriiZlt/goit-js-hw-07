import { galleryItems } from "./gallery-items.js";
// Change code below this line

const cardsMarkup = createCardsMakrup(galleryItems);
const galleryUlRef = document.querySelector(".gallery");
let backDrop = new Object();

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

function onCardClick(e) {
  backDrop = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  backDrop.show();
  window.addEventListener("keydown", onKeyPress);
}

function onKeyPress(e) {
  if (e.key === "Escape") {
    backDrop.close();
    window.removeEventListener("keydown", onKeyPress);
  }
}

console.log(galleryItems);
