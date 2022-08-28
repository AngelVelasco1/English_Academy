const hamburgerButton = document.querySelector('#hamburger-button');
const mobileItems = document.querySelector('#menu-mobile-items');

hamburgerButton.addEventListener('click', e => {
    mobileItems.classList.toggle('menu-mobile-close');
});