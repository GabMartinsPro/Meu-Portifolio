document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Função para mostrar o slide atual
    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    // Botão Anterior
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Botão Próximo
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Inicializa o slider
    showSlide(currentIndex);

    // Opcional: Auto-play do slider
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
});