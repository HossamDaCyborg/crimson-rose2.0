let button1 = document.getElementById('button1st');
let button2 = document.getElementById('button2nd');
let button3 = document.getElementById('button3rd');

let mover = document.getElementById('hiddenPlayer');
let sc= document.getElementById('scrollable');

button1.addEventListener('click',()=>{
    // if (!button1.classList.contains('on')){
    //     if(button2.classList.contains('on')){
    //         button2.classList.remove('text-crimson','on');
    //         button2.classList.add('text-middleGray');
    //     }
    //     if(button2.classList.contains('on')){
    //         button2.classList.remove('text-crimson','on');
    //         button2.classList.add('text-middleGray');
    //     }
    // }
    button2.classList.remove('font-bold');
    button2.classList.add('font-medium');
    button2.classList.remove('text-crimson');
    button2.classList.add('text-middleGray');
    
    button3.classList.remove('font-bold');
    button3.classList.add('font-medium');
    button3.classList.remove('text-crimson');
    button3.classList.add('text-middleGray');

    button1.classList.remove('text-middleGray');
    button1.classList.add('text-crimson');
    button1.classList.remove('font-medium');
    button1.classList.add('font-bold');
    mover.classList.remove('w-1/3','w-2/3');
    mover.classList.add('w-0');
    
    let scs=sc.scrollWidth;
    sc.scrollTo(0,0)
      
});
button2.addEventListener('click',()=>{
    // if (!button1.classList.contains('on')){
    //     if(button2.classList.contains('on')){
    //         button2.classList.remove('text-crimson','on');
    //         button2.classList.add('text-middleGray');
    //     }
    //     if(button2.classList.contains('on')){
    //         button2.classList.remove('text-crimson','on');
    //         button2.classList.add('text-middleGray');
    //     }
    // }
    button3.classList.remove('font-bold');
    button3.classList.add('font-medium');
    button3.classList.remove('text-crimson');
    button3.classList.add('text-middleGray');
    
    button1.classList.remove('font-bold');
    button1.classList.add('font-medium');
    button1.classList.remove('text-crimson');
    button1.classList.add('text-middleGray');

    button2.classList.remove('text-middleGray');
    button2.classList.add('text-crimson');
    button2.classList.remove('font-medium');
    button2.classList.add('font-bold');

    mover.classList.remove('w-0','w-2/3');
    mover.classList.add('w-1/3');
    
    let scs=sc.scrollWidth;
    sc.scrollTo(scs/3,0);
});
button3.addEventListener('click',()=>{
    // if (!button1.classList.contains('on')){
    //     if(button2.classList.contains('on')){
    //         button2.classList.remove('text-crimson','on');
    //         button2.classList.add('text-middleGray');
    //     }
    //     if(button2.classList.contains('on')){
    //         button2.classList.remove('text-crimson','on');
    //         button2.classList.add('text-middleGray');
    //     }
    // }
    button2.classList.remove('font-bold');
    button2.classList.add('font-medium');
    button2.classList.remove('text-crimson');
    button2.classList.add('text-middleGray');
    
    button1.classList.remove('font-bold')
    button1.classList.add('font-medium')
    button1.classList.remove('text-crimson');
    button1.classList.add('text-middleGray');

    button3.classList.remove('text-middleGray');
    button3.classList.add('text-crimson');
    button3.classList.remove('font-medium');
    button3.classList.add('font-bold');
    
    mover.classList.remove('w-0','w-1/3');
    mover.classList.add('w-2/3');
    
let scs=sc.scrollWidth;
    sc.scrollTo(scs,0)
      
})