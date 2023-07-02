const burger = document.querySelector('.header__burger')
const open = document.querySelector('.menu__body')

burger.addEventListener('click', function() {
    this.classList.toggle('active');
    open.classList.toggle('open')
}) 