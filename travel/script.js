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