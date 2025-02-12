/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')


/* Validate if constant exists */

if(navToggle){
  navToggle.addEventListener("click" , () => navMenu.classList.add('show-menu')
)
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
  navClose.addEventListener("click" , () => navMenu.classList.remove('show-menu')
)
}


/*=============== SHOW CART ===============*/
const cart =document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose =document.getElementById('cart-close')


/*===== CART SHOW =====*/
if(cartShop){
  cartShop.addEventListener("click" , ()=>{
  cart.classList.add('show-cart')
})
}

/*===== CART HIDDEN =====*/
if(cartClose){
  cartClose.addEventListener("click" , ()=>
  cart.classList.remove('show-cart'))
}


/*=============== SHOW LOGIN ===============*/
const login =document.getElementById('login'),
    loginButton = document.getElementById('login-button')
    loginClose =document.getElementById('login-close')

/*  LOGIN SHOW  */

if(loginButton){
  loginButton.addEventListener("click" , ()=>
  login.classList.add('show-login'))
}
/*===== LOGIN HIDDEN =====*/

if(loginClose){
  loginClose.addEventListener("click" , ()=>
  login.classList.remove('show-login'))
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween:30,
    loop:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header =document.getElementById('header')

    if(this.scrollY >=20) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)
/*=============== NEW SWIPER ===============*/

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween:12,
    slidesPerView:'auto',
    centeredSlides:true,
    loop:'true',

});


/*=============== SHOW SCROLL UP ===============*/
function scrollup() {
  const scrollup = document.getElementById('scroll-up');

  if (window.scrollY >= 350) {
    scrollup.classList.add('show-scroll');
  } else {
    scrollup.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollup);

/*=============== QUESTIONS ACCORDION ===============*/


const accordionItem = document.querySelectorAll('.questions_item');

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector('.questions_header');

  accordionHeader.addEventListener('click', () => {
    toggleItem(item);
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions_content')

  if(item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}






/*=============== STYLE SWITCHER ===============*/

