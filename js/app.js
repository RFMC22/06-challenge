const share = document.querySelector('#share');
const list = document.querySelector('#share-list');

share.addEventListener('click',()=>{
  if (list.style.display === 'none') {
    Mostrar();
  }
  else{
    Ocultar();
  }
});

function Mostrar(){
  list.style.display = 'flex';
  share.style.background = 'hsl(217, 19%, 35%)';
  
}

function Ocultar(){
  list.style.display = 'none';
  share.style.background ='hsl(210, 46%, 95%)';
}