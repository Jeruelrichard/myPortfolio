//DARK MODE

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

if (darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active"? enableDarkMode() : disableDarkmode();})

const disableDarkmode =() => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}