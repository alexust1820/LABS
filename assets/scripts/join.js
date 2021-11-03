const devBtn = document.querySelectorAll('.headline__more');

function openMiniDesk(currentBtn) {
    devBtn[currentBtn].classList.toggle('-active');
}