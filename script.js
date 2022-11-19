var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector(' nav .menu-icon ion-icon');

menuBar.addEventListener('click',function(){
    menu.classList.toggle('active');
});