let divs = document.querySelectorAll('.item');
divs.forEach(item =>{
    item.addEventListener('click', () =>{
        divs.forEach(el => el.classList.remove('active'))
       item.classList.add('active')
    })
})