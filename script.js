// script.js
const image = document.getElementById('draggableImage');
const container = document.querySelector('.container');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Commence à traîner l'image lorsqu'on clique dessus
image.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - image.offsetLeft;
  offsetY = e.clientY - image.offsetTop;
  image.style.cursor = 'grabbing';
});

// Gère le mouvement de l'image
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const containerRect = container.getBoundingClientRect();
    let left = e.clientX - offsetX;
    let top = e.clientY - offsetY;

    // Limite le mouvement de l'image dans le conteneur
    left = Math.max(containerRect.left, Math.min(left, containerRect.right - image.offsetWidth));
    top = Math.max(containerRect.top, Math.min(top, containerRect.bottom - image.offsetHeight));

    image.style.left = `${left - containerRect.left}px`;
    image.style.top = `${top - containerRect.top}px`;
  }
});

// Arrête de traîner l'image lorsqu'on relâche le bouton de la souris
document.addEventListener('mouseup', () => {
  isDragging = false;
  image.style.cursor = 'grab';
});
