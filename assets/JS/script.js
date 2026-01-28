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

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 64,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.navLinks a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('activeLink')
        }else{
            sectionsClass.classList.remove('activeLink')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.homeDeets, .abtDeets, .card',{}); 
sr.reveal('.homeImg',{delay: 400}); 
sr.reveal('.homeSocials',{ interval: 200}); 
sr.reveal('.workCard, .contact__input',{interval: 200}); 