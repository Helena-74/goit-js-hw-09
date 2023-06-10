import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.min.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.setAttribute('data-source', original);
  galleryImage.alt = description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

export function renderGallery() {
  const galleryItemsMarkup = galleryItems.map(item => createGalleryItem(item));
  gallery.append(...galleryItemsMarkup);
}

renderGallery();

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${largeImageUrl}">`);
  instance.show();
}

gallery.addEventListener('click', openModal);

console.log(galleryItems);
