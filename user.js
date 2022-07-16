let userButton=document.getElementById('userButton');
let userMenu=document.getElementById('userMenu');



userButton.addEventListener('click',()=>{
    userMenu.classList.toggle('hidden');
    userMenu.classList.toggle('flex');
    mainMenu.classList.toggle('-z-10');
})
let userButtonToo=document.getElementById('userButtonToo');
let userMenuToo=document.getElementById('userMenuToo');

userButtonToo.addEventListener('click',()=>{
    userMenuToo.classList.toggle('hidden');
    userMenuToo.classList.toggle('flex');
    
    mainMenu.classList.toggle('-z-10');
})