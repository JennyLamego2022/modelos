const robotron = document.querySelector('#robotron')

robotron.addEventListener('click',(evento) => {
    console.log(evento)
})

function dizOi(nome){
    console.log("Oi " + nome)
    console.log('Seja bem-vindo ao Robotron 2000')
}

dizOi('Jennyfer')

