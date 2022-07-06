let togg = document.getElementById('toggler');
let menu = document.getElementById('navMenu');

togg.addEventListener('click',()=>{
    menu.classList.toggle("h-0");
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
    
    
})