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
function scrollUp(){
  const scrollUp =document.getElementById('scroll-up')
  if(this.scrollY >=350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/