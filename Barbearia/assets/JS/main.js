const enviar = document.querySelector('#botao');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('#fechar');


enviar.addEventListener('click', enviarMensagem);
fechar.addEventListener('click', fecharModal);


    function enviarMensagem (){
        modal.style.display = 'block'
        document.querySelector('form').reset()
    }
    

    function fecharModal(){
        modal.style.display = 'none' 
    }