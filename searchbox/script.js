let srcBtn = document.querySelector('.fa-search');
let search = document.querySelector('.search');
let closeBtn = document.querySelector('.close');
let input = document.querySelector('.input');

srcBtn.addEventListener('click', () => {
    srcBtn.style.display = 'none';
    search.classList.add('open');
    closeBtn.style.display = 'block';
    input.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    search.classList.remove('open');
    closeBtn.style.display = 'none';
    input.style.display = 'none';
    srcBtn.style.display = 'block';
})

















