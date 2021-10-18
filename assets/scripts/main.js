function HeaderMenu() {
    document.querySelector(".header__menu").classList.toggle("-hidden");
    document.querySelector(".header__burger").classList.toggle("-active");
}

function moveOnTop() {
    if (window.pageYOffset != 0) {
        window.scrollBy(0, -80);
        setTimeout(moveOnTop, 0);
    }
}