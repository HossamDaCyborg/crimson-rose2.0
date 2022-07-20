let scrollable = document.getElementById('scrollable');
let scrollRight=document.getElementById('scrollRight');
let scrollLeft=document.getElementById('scrollLeft');
let scoll = document.getElementById('scoll');

let btnR=document.getElementById('btnR');
let BtnL=document.getElementById('btnL');

scrollRight.addEventListener('click',()=>{
    scrollable.scrollBy(285,0);
});
scrollLeft.addEventListener('click',()=>{
    scrollable.scrollBy(-285,0);
});

btnR.addEventListener('click',()=>{
    let sc =scoll.scrollWidth
    scoll.scrollTo(0,0);
});
BtnL.addEventListener('click',()=>{
    let sc =scoll.scrollWidth
    scoll.scrollTo(sc,0);
});