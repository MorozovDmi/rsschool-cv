let burgerMenu = document.querySelector('.burger-menu ');
let closeButton = document.querySelector('.close-menu');
let menu = document.querySelector('.header-menu-mobile');
let links = document.querySelectorAll('.header-menu-mobile a')

burgerMenu.addEventListener('click', function(){
    menu.classList.add('visible');
});

closeButton.addEventListener('click', function(){
    menu.classList.remove('visible')
})
links.forEach(function (link) {
    link.addEventListener('click', function(){
        menu.classList.remove('visible')
    })
})

let popUpBtn = document.querySelector('.header-button');
let popUp = document.querySelector('.pop-up');

popUpBtn.addEventListener('click', function() {
    popUp.classList.add('visible')
});
let popSignIn = document.querySelector('.sign-in-btn');
let signUp = document.querySelector('.sign-up');
let closeSingUp = document.querySelector('.sing-up-close')

popSignIn.addEventListener('click', function (event) {
    event.preventDefault()
    popUp.classList.remove('visible')
    signUp.classList.add('visible')
    
});
closeSingUp.addEventListener('click', function() {
signUp.classList.remove('visible')
})



let index = 0;
let imgs = document.querySelectorAll('.popular-img');
let dots = document.querySelectorAll('.popular-dot');

let leftBtn = document.querySelector('.popular-arrows.left')
leftBtn.addEventListener('click', function() {
    changeImg(-1);
})
let rightBtn = document.querySelector('.popular-arrows.right')
rightBtn.addEventListener('click', function() {
    changeImg(1);
})

function changeImg(num) {
    imgs[index].classList.remove('active');
    dots[index].classList.remove('active');
    index=index+num;
    if(index > 2) {
        index = 0;
    }
    if(index < 0) {
        index = 2;
    }

    imgs[index].classList.add('active');
    dots[index].classList.add('active');
    
}
changeImg(0);

