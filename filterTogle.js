let btn =document.getElementById('filterTogler');
let toggleMenu=document.getElementById('filters');
let mainMenu = document.getElementById('mainMenu');
let arrow = document.getElementById('timesArrow');

btn.addEventListener('click',()=>{
    toggleMenu.classList.toggle('hidden');
    toggleMenu.classList.toggle('flex');
    mainMenu.classList.toggle('rounded-b-none');
    arrow.classList.toggle('rotate-180')
    
});

let upper =document.getElementById('upper');
let lower =document.getElementById('lower');
let vall=document.getElementById('vall');
upper.addEventListener('mousemove',()=>{
    
    vall.innerHTML=`From ${lower.value}$ - to ${upper.value}$`;

});
upper.addEventListener('touchmove',()=>{
    
    vall.innerHTML=`From ${lower.value}$ - to ${upper.value}$`;

});
lower.addEventListener('mousemove',()=>{
    vall.innerHTML=`From ${lower.value}$ - to ${upper.value}$`;
});
lower.addEventListener('touchmove',()=>{
    vall.innerHTML=`From ${lower.value}$ - to ${upper.value}$`;
});