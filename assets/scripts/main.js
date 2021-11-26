/*This file belongs to an all html documents*/

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

function HeaderMenu() {
    menu.classList.toggle("-hidden");
    menuBtn.classList.toggle("-active");
}
