/*This file belongs to an html document index.html*/

const somesay = document.getElementById('masks-title');
const teamTitle = document.querySelector('.team-title');
const portfolioArrow = document.querySelectorAll('.portfolio__arrow');
const maskMini = document.getElementById('mask-mini');
const maskBig = document.getElementById('mask-big');
const cat = document.getElementById('cat');

changeTeamTitle();

function changeTeamTitle() {
    if (document.documentElement.scrollWidth < 950) {
        teamTitle.innerHTML = `Присоединяйтесь <br/> к команде`;
    } else {
        teamTitle.innerHTML = `Присоединяйтесь <br/> к нашей команде`;
    }
}

function masksActive() {
    somesay.classList.add('-active');
    maskMini.classList.add('-active');
    maskBig.classList.add('-active');
    portfolioArrow[0].classList.add('-active');
}

function masksPassive() {
    somesay.classList.remove('-active');
    maskMini.classList.remove('-active');
    maskBig.classList.remove('-active');
    portfolioArrow[0].classList.remove('-active');
}

function catActive() {
    cat.classList.add('-active');
    portfolioArrow[1].classList.add('-active');
}

function catPassive() {
    cat.classList.remove('-active');
    portfolioArrow[1].classList.add('-active');
}