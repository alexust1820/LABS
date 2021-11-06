const teamTitle = document.querySelector('.team-title');

changeTeamTitle();

function changeTeamTitle() {
    if (document.documentElement.scrollWidth < 950) {
        teamTitle.innerHTML = `Присоединяйтесь <br/> к команде`;
    } else {
        teamTitle.innerHTML = `Присоединяйтесь <br/> к нашей команде`;
    }
}

function HeaderMenu() {
    document.querySelector(".header__menu").classList.toggle("-hidden");
    document.querySelector(".header__burger").classList.toggle("-active");
}
