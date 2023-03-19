import { galleryItems } from "./gallery-items.js";
// Change code below this line
const cardsMarkup = galleryItems
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

const galleryUlRef = document.querySelector(".gallery");
galleryUlRef.insertAdjacentHTML("beforeend", cardsMarkup);

galleryUlRef.addEventListener("click", onCardClick);

function onCardClick(e) {
  var instance = basicLightbox.create(
    `
  <img src="${e.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onKeyPress);
      },
    }
  );
  instance.show();

  function onKeyPress(e) {
    console.log(e.key);
    if (e.key === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
