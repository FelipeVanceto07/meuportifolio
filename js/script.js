// tres constantes para referenciar as ITEM nas Divs Projetos
const formulario = document.getElementById('formulario');
const site = docuemnt.getElementById('Site');
const prot = document.getElementById('Meuportifolio');

const videoformulario = document.querySelector('.videoformulario');
const videoSite = document.querySelector('.videoSite');
const videoMeuportifolio = document.querySelector('.videoMeuportifolio');

// evento de click
formulario.addEventListener('click',() =>{
   formulario.classList.toggle('active');
   videoformulario.classList.toggle('active');
});