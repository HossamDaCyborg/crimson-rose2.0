let grid=document.getElementById('grid');
let cards =document.getElementById('cards');
let cardPaths=document.querySelectorAll('.listPath');
let gridPaths=document.querySelectorAll('.gridPath');
let PC = document.querySelectorAll('.propCard');
let CD = document.querySelectorAll('.cardDis');
let cont = document.getElementById('cont');

grid.addEventListener('click',()=>{
    if (!grid.classList.contains('playing')){
        cards.classList.remove('border-crimson');
        cards.classList.add('border-middleGray');
        cards.classList.remove('playing');

        cont.classList.add('lg:flex-nowrap');
        

        for(let card of PC){
            card.classList.remove('flex');
        }

        for(let item of CD){
            item.classList.remove('smm:w-60');
            item.classList.remove('w-56');
            item.classList.remove('flex-col');
            item.classList.remove('space-y-3')
        }
        

        for(let path of cardPaths){
            path.classList.remove('fill-crimson');
            path.classList.add('fill-middleGray');
        }
        grid.classList.add('playing');
        grid.classList.remove('border-middleGray');
        grid.classList.add('border-crimson');
       
        
        for(let path of gridPaths){
            path.classList.remove('fill-middleGray');
            path.classList.add('fill-crimson');
        }
        
    }
});
cards.addEventListener('click',()=>{
    if (!cards.classList.contains('playing')){
        grid.classList.remove('border-crimson');
        grid.classList.add('border-middleGray');
        grid.classList.remove('playing');
        
        cont.classList.remove('lg:flex-nowrap');


        for(let item of CD){
            item.classList.add('smm:w-60');
            item.classList.add('w-56');
            item.classList.add('flex-col');
            item.classList.add('space-y-3')
        }
        for(let card of PC){
            card.classList.add('flex');
        }

        for(let path of gridPaths){
            path.classList.remove('fill-crimson');
            path.classList.add('fill-middleGray');
        }
        cards.classList.add('playing');
        cards.classList.remove('border-middleGray');
        cards.classList.add('border-crimson');
        for(let path of cardPaths){
            path.classList.remove('fill-middleGray');
            path.classList.add('fill-crimson');
        }
        
    }
});