const ico = document.querySelector('.burger');
const nav = document.querySelector('nav');

ico.addEventListener('click',function(){
    this.classList.toggle('active');
    nav.classList.toggle('biggerNav');
})