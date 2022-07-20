let sorted=document.querySelector('#sorted');
let options=document.querySelectorAll('.optsion');
let collapsed = document.getElementById('distrac')

for (let optsion of options){
    optsion.addEventListener('click',()=>{
        sorted.innerHTML=optsion.innerHTML;
        collapsed.focus()
    });
    
}