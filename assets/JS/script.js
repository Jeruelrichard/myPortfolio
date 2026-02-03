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

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.querySelector(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            // Toggle hamburger icon between bars and X
            const icon = toggle.querySelector('i')
            if(nav.classList.contains('show')){
                icon.classList.remove('fa-bars')
                icon.classList.add('fa-xmark')
            } else {
                icon.classList.remove('fa-xmark')
                icon.classList.add('fa-bars')
            }
        })
    }
}
showMenu('navToggle','.navLinks')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.querySelector('.navLinks')
    const toggle = document.getElementById('navToggle')
    // When we click on each navLink, we remove the show-menu class
    navMenu.classList.remove('show')
    // Reset hamburger icon
    if(toggle){
        const icon = toggle.querySelector('i')
        icon.classList.remove('fa-xmark')
        icon.classList.add('fa-bars')
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction))

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

sr.reveal('.homeDeets, .abtDeets, .skillsCards',{}); 
sr.reveal('.homeImg',{delay: 400}); 
sr.reveal('.homeSocials',{ interval: 200}); 
sr.reveal('.workContainer, .contactFormDiv',{interval: 200});


//CONTACT FORM SCRIPT
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    //Using Formspree endpoint
    const response = await fetch("https://formspree.io/f/mlgnkyoo", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      showToast("Message sent successfully 🚀");
    } else {
      showToast("Something went wrong ❌");
    }
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
}