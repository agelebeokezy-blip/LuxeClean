// hero section animation

const heroh3 = document.querySelector("#heroh3")
const heroh1 = document.querySelector(".hero-section-overlay h1")
const herobutton = document.querySelector(".hero-section-overlay a")
const navli = document.querySelectorAll(".navbar .navlink")
const subnavli = document.querySelectorAll(".navbar .subscribe")
const heroimg = document.querySelector(".hero-section img")

window.addEventListener("load", ()=>{

    heroimg.classList.toggle("show")

    setTimeout(() => {
        heroh1.classList.toggle("show")
    }, 3000);
    
    setTimeout(() => {
        heroh3.classList.toggle("show")
    }, 3500);

    setTimeout(() => {
        herobutton.classList.toggle("show")
    }, 4000);

    navli.forEach((nav) =>{
        setTimeout(() => {
        nav.classList.toggle("show")
    }, 3000);
    })

    subnavli.forEach((subnav) =>{
        setTimeout(() => {
        subnav.classList.toggle("show")
    }, 3000);
    })

});

// page scroll

const hiddenElements = document.querySelectorAll('.scroll');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

hiddenElements.forEach((el, index) => {

  el.style.transitionDelay = `${index * 0.1}s`;

  observer.observe(el);

});

// review section scroll

const leftbtn = document.querySelector(".fa-angle-left")
const rightbtn = document.querySelector(".fa-angle-right")
const reviewsbox = document.querySelectorAll(".reviews-box")

rightbtn.addEventListener("click", () => {
  reviewsbox.forEach((review) =>{
    review.scrollBy({
      left:review.clientWidth,
      behavior: "smooth",
      block: 'start'
    });
  });
});

leftbtn.addEventListener("click", () => {
  reviewsbox.forEach((review) =>{
    review.scrollBy({
      left:-review.clientWidth,
      behavior: "smooth"
    });
  });
});

//  partner section scroll

const partnerbox = document.querySelector(".partners-container")
const partner = document.querySelector(".partner")

window.addEventListener("load", () =>{
  partnerbox.scrollBy({
    left : partnerbox.clientWidth,
    behavior: "smooth"
  });
});