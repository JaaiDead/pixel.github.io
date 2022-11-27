let list = document.querySelectorAll('li');
for (let i=0; i<list.length;i++){
    list[i].onmouseover = function(){
        let j =0;
        while (j <list.length){
            list[j++].className ='list';

        }
        list[i].className='list active';

    }
}
//change body colour for each element  accoording to indicator
list.forEach(elements =>{
    elements.addEventListener('mouseenter',function(event){
        let bg = document.querySelector('body');
        let colour = event.target.getAttribute('data-colour');
        bg.style.backgroundColor = colour;
    })
})