/* tres constantes para referenciar as ITEM nas Divs Projetos
as Item nas divs Projetos
*/

// 3 constantes para referenciar os Id das Divs no Projetos
const album = document.getElementById('album');
const casamentos= document.getElementById('casamentos');
const  buffet= document.getElementById('Buffet');


// 3 constantes para referenciar os Id das Divs no Projetos
const videoAlbum = document.querySelector('#videoAlbum');
const videocasamentos = document.querySelector('#videocasamaentos');
const videoBuffet = document.querySelector('#videoBuffet');

// evento de click
album.addEventListener('click',() =>{
   album.classList.toggle('active'); //para iframe */
   videoAlbum.classList.toggle('active');
}); 
casamentos.addEventListener('click',() =>{
   casamentos.classList.toggle('active'); //para iframe */
   videoCasamentos.classList.toggle('active');
});
buffet.addEventListener('click',() =>{
buffet.classList.toggle('active'); //para iframe */
   videoBuffet.classList.toggle('active');
});