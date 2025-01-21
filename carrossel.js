let currentIndex = 0; // Começa no primeiro slide real
const carouselWrapper = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Duplicar os itens para criar continuidade
carouselWrapper.innerHTML += carouselWrapper.innerHTML;
const updatedItems = document.querySelectorAll('.carousel-item');
const updatedTotalItems = updatedItems.length;

// Ajustar a largura do carrossel com base no total de itens
carouselWrapper.style.width = `${carouselItems.length * 33.33}%`; // Ajusta a largura

// Mover o carrossel para o início com o índice correto
function moveSlide(direction) {
  currentIndex += direction;

  // Movimentação suave
  carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
  const offset = -(currentIndex * (100 / 3));
  carouselWrapper.style.transform = `translateX(${offset}%)`;

  // Verificar se atingiu os limites e ajustar sem transição
  setTimeout(() => {
    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
      carouselWrapper.style.transition = 'none';
      const resetOffset = -(currentIndex * (100 / 3));
      carouselWrapper.style.transform = `translateX(${resetOffset}%)`;
    } else if (currentIndex >= totalItems) {
      currentIndex = 0;
      carouselWrapper.style.transition = 'none';
      const resetOffset = -(currentIndex * (100 / 3));
      carouselWrapper.style.transform = `translateX(${resetOffset}%)`;
    }
  }, 500); // Igual ao tempo da transição
}

