// script.js

// Fonction pour rendre une image déplaçable dans un conteneur
function makeImageDraggable(imageId, containerSelector) {
  const image = document.getElementById(imageId);
  const container = document.querySelector(containerSelector);

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Commence à traîner l'image lorsqu'on clique dessus
  image.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - image.offsetLeft;
    offsetY = e.clientY - image.offsetTop;
    image.style.cursor = 'grabbing';
    
    // Empêche le comportement par défaut
    e.preventDefault();
  });

  // Gère le mouvement de l'image
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      // Empêche le comportement par défaut
      e.preventDefault();
      
      const containerRect = container.getBoundingClientRect();
      let left = e.clientX - offsetX;
      let top = e.clientY - offsetY;

      // Limite le mouvement de l'image dans le conteneur
      left = Math.max(0, Math.min(left, containerRect.width - image.offsetWidth));
      top = Math.max(0, Math.min(top, containerRect.height - image.offsetHeight));

      image.style.left = `${left}px`;
      image.style.top = `${top}px`;
    }
  });

  // Arrête de traîner l'image lorsque le bouton de la souris est relâché
  document.addEventListener('mouseup', (e) => {
    if (isDragging) {
      isDragging = false;
      image.style.cursor = 'grab';
      
      // Empêche le comportement par défaut lors de la dépose
      e.preventDefault();
    }
  });
}

// Appelle la fonction pour chaque image et conteneur
makeImageDraggable('draggableImage1', '.container1');
makeImageDraggable('draggableImage2', '.container2');
