

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {
  // Use Intersection Observer to determine if objects are within the viewport

  const Objoptions = {
    root: null,
    threshold: 0.1,
    // rootMargin: "-50px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("in-view"); //it gets removed only on page reload
      } 
      
    //   else {
    //     entry.target.classList.remove("in-view");
    //   }
      
     //stops the animation to repeat everytime user scrolls the page
    });
  }, Objoptions);

  // Get all the elements with the .animate class applied
  const allAnimatedElements = document.querySelectorAll(".animate");

  // Add the observer to each of those elements

  allAnimatedElements.forEach((element) => observer.observe(element));

   // Check if the page is scrolled to the top
  //  window.addEventListener('scroll', () => {
  //   if (window.scrollY === 0) {
  //     allAnimatedElements.forEach((element) => element.classList.remove("in-view"));
  //   }
  // });
});

// Mobile view Hamburger Menu

const mobileButton = document.querySelector('.mb-btn-trigger');
const navLinks = document.querySelector('.f-screen-wrapper');
const navLink = document.querySelectorAll('.mobile-navi-link')

function mobileMenu () {
    // event.currentTarget.classList.toggle('rotate');
    mobileButton.classList.toggle('rotate');
    // console.log('it was clicked')
  }

mobileButton.addEventListener('click', mobileMenu);
mobileButton.addEventListener('click', navContent);
// navLink.addEventListener('click', test);

navLink.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    mobileButton.classList.toggle('rotate');
    if (mobileButton.classList.contains('rotate')) {
      navLinks.style.display = 'block'
    }
    else {
      navLinks.style.display = 'none'
    }
  })
})


function navContent () {
  if (mobileButton.classList.contains('rotate')) {
    navLinks.style.display = 'block'
  }
  else {
    navLinks.style.display = 'none'
  }
}

// Navigation Link Active Swicth Mode

const projectPage = document.querySelector('.project-page');
const homePage = document.querySelector('.home-page');
const aboutPage = document.querySelector('.about-page');
const contactPage = document.querySelector('.contact-page');

projectPage.addEventListener('click', () => {
  projectPage.classList.add('current-page');
  projectPage.classList.remove('inactive-page');
  homePage.classList.remove('current-page')
  homePage.classList.add('inactive-page');
  aboutPage.classList.remove('current-page')
  aboutPage.classList.add('inactive-page');
  contactPage.classList.remove('current-page')
  contactPage.classList.add('inactive-page');
})

homePage.addEventListener('click', () => {
  homePage.classList.add('current-page');
  homePage.classList.remove('inactive-page');
  projectPage.classList.remove('current-page')
  projectPage.classList.add('inactive-page');
  aboutPage.classList.remove('current-page')
  aboutPage.classList.add('inactive-page');
  contactPage.classList.remove('current-page')
  contactPage.classList.add('inactive-page');
})

aboutPage.addEventListener('click', () => {
  aboutPage.classList.add('current-page');
  aboutPage.classList.remove('inactive-page');
  homePage.classList.remove('current-page')
  homePage.classList.add('inactive-page');
  projectPage.classList.remove('current-page')
  projectPage.classList.add('inactive-page');
  contactPage.classList.remove('current-page')
  contactPage.classList.add('inactive-page');
})

contactPage.addEventListener('click', () => {
  contactPage.classList.add('current-page');
  contactPage.classList.remove('inactive-page');
  homePage.classList.remove('current-page')
  homePage.classList.add('inactive-page');
  aboutPage.classList.remove('current-page')
  aboutPage.classList.add('inactive-page');
  projectPage.classList.remove('current-page')
  projectPage.classList.add('inactive-page');
})
