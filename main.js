let toggle = document.querySelector('.toggle');
let close = document.querySelector('.close');
let link = document.querySelector('.nav-links');

toggle.addEventListener('click', ()=> {
    link.style.display = 'block'
    toggle.style.display ='none'
})

close.addEventListener('click', ()=> {
    link.style.display = 'none'
    toggle.style.display ='block'
})
