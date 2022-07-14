let active = document.getElementById('pageActive');
let inActive = document.getElementById('pageInactive');
let state = document.getElementById('pageState');
let toggler = document.getElementById('lo');

active.addEventListener('click',()=>{
    state.classList.toggle('flex')
    state.classList.toggle('hidden')
    toggler.classList.toggle('z-40');
    toggler.classList.toggle('-z-10')
})

inActive.addEventListener('click',()=>{
    state.classList.toggle('flex')
    state.classList.toggle('hidden')
    toggler.classList.toggle('z-40');
    
    toggler.classList.toggle('-z-10')
})