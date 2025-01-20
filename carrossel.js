let currentIndex = 0;

function moveSlide(direction) {
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  // Calcula o novo índice, com comportamento cíclico
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // Aplica a transformação para mostrar os 3 cards corretos
  const offset = -(currentIndex * (100 / 3)); // 100% da largura dividido por 3 cards visíveis
  carouselWrapper.style.transform = `translateX(${offset}%)`;
}
