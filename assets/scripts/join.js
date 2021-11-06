const listBtn = document.querySelectorAll('.headline__more');
const list = document.querySelectorAll('.list');


function openMiniDesk(currentBtn) {
    listBtn[currentBtn].classList.toggle('-active');
    listBtn[currentBtn].parentNode.classList.toggle('-noBorder');
    list[currentBtn].classList.toggle('-hidden');
    console.log(currentBtn);
}