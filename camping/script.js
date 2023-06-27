let navBtn = document.querySelector('.nav__btn')
let navOpen = false
let navMenu = document.querySelector('.nav-menu')

navBtn.addEventListener('click' ,function(){
    if(navOpen){
        navBtn.classList.remove('nav__btn--open')
        navMenu.style.left = '-25rem'
        navOpen = false

    }else{
        navBtn.classList.add('nav__btn--open')
        navMenu.style.left = 0

        navOpen = true

    }
})