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


const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.questions__header');
    const accordionContent = item.querySelector('.questions__content');

    // Set initial height to 0 and overflow to hidden for smooth transition
    accordionContent.style.height = '0';
    accordionContent.style.overflow = 'hidden';

    accordionHeader.addEventListener('click', () => {
        item.classList.toggle('accordion-open'); // Use toggle instead of if/else

        if (item.classList.contains('accordion-open')) {
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.height = '0';
        }
    });
});






/*=============== STYLE SWITCHER ===============*/
const addToCartButtons = document.querySelectorAll('.shop__button');
const cartContainer = document.querySelector('.cart__container');
const cartItemCount = document.querySelector('.cart__prices-item');
const cartTotalPrice = document.querySelector('.cart__prices-total');

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName;
        const productPrice = parseFloat(button.dataset.productPrice);
        const productImage = button.dataset.productImage;

        const existingProduct = cartItems.find(item => item.name === productName);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartItems.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }

        updateCart();
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Save even if cart isn't shown
    });
});

function updateCart() {
    cartContainer.innerHTML = '';
    let totalPrice = 0;
    let totalItems = 0;

    cartItems.forEach(item => {
        const cartCard = document.createElement('article');
        cartCard.classList.add('cart__card');
        cartCard.innerHTML = `
            <div class="cart__box">
                <img class="cart__img" src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart__details">
                <h3 class="cart__title">${item.name}</h3>
                <span class="cart__price">$${item.price.toFixed(2)}</span>
                <div class="cart__amount">
                    <div class="cart__amount-content">
                        <span class="cart__amount-box decrease" data-product-name="${item.name}">
                            <i class="bx bx-minus"></i>
                        </span>
                        <span class="cart__amount-number">${item.quantity}</span>
                        <span class="cart__amount-box increase" data-product-name="${item.name}">
                            <i class="bx bx-plus"></i>
                        </span>
                    </div>
                    <i class="bx bx-trash-alt cart__amount-trash remove-from-cart" data-product-name="${item.name}"></i>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartCard);

        totalPrice += item.price * item.quantity;
        totalItems += item.quantity;
    });

    cartItemCount.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
}

// REMOVE showCart() function call from addToCartButtons event listener
// The cart will now only open when the user manually triggers it (e.g., by clicking a cart icon)

cartClose.addEventListener('click', () => {
    cart.classList.remove('show-cart');
});

cartContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('decrease') || target.parentElement.classList.contains('decrease')) {
        const productName = (target.classList.contains('decrease') ? target : target.parentElement).dataset.productName;
        const product = cartItems.find(item => item.name === productName);
        if (product && product.quantity > 1) {
            product.quantity--;
            updateCart();
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    } else if (target.classList.contains('increase') || target.parentElement.classList.contains('increase')) {
        const productName = (target.classList.contains('increase') ? target : target.parentElement).dataset.productName;
        const product = cartItems.find(item => item.name === productName);
        if (product) {
            product.quantity++;
            updateCart();
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    } else if (target.classList.contains('remove-from-cart') || target.parentElement.classList.contains('remove-from-cart')) {
        const productName = (target.classList.contains('remove-from-cart') ? target : target.parentElement).dataset.productName;
        cartItems = cartItems.filter(item => item.name !== productName);
        updateCart();
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
});

updateCart();


// aadd home shop to cart 

const newContentContainers = document.querySelectorAll('.new__content');

newContentContainers.forEach(container => {
    const addToCartButton = container.querySelector('.new__button');
    if (addToCartButton) { // Check if the button exists within the container
        addToCartButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the link from navigating

            const productName = container.querySelector('.new__title').textContent;
            const productPrice = parseFloat(container.querySelector('.new__price').textContent.replace('$', ''));
            const productImage = container.querySelector('.new__img').src;

            const existingProduct = cartItems.find(item => item.name === productName);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cartItems.push({
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                });
            }

            updateCart();
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Optional: Show a quick "Added to Cart" message or animation
            // Or trigger the cart to open if desired.
            // Example:
            // showAddToCartMessage(productName); 
            // cart.classList.add('show-cart');

        });
    }
});


function updateCart() {
    cartContainer.innerHTML = '';
    let totalPrice = 0;
    let totalItems = 0;

    cartItems.forEach(item => {
        const cartCard = document.createElement('article');
        cartCard.classList.add('cart__card');
        cartCard.innerHTML = `
            <div class="cart__box">
                <img class="cart__img" src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart__details">
                <h3 class="cart__title">${item.name}</h3>
                <span class="cart__price">$${item.price.toFixed(2)}</span>
                <div class="cart__amount">
                    <div class="cart__amount-content">
                        <span class="cart__amount-box decrease" data-product-name="${item.name}">
                            <i class="bx bx-minus"></i>
                        </span>
                        <span class="cart__amount-number">${item.quantity}</span>
                        <span class="cart__amount-box increase" data-product-name="${item.name}">
                            <i class="bx bx-plus"></i>
                        </span>
                    </div>
                    <i class="bx bx-trash-alt cart__amount-trash remove-from-cart" data-product-name="${item.name}"></i>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartCard);

        totalPrice += item.price * item.quantity;
        totalItems += item.quantity;
    });

    cartItemCount.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
}

