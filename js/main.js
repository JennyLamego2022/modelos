const robotron = document.querySelector('#robotron')
const controle = document.querySelectorAll("[data-controle]")
console.log(controle)

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})


function manipulaDados (operacao, controle){
    const peca =  controle.querySelector('[data-contador]')

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1
    }else {
        peca.value = parseInt(peca.value)+ 1
    }
}



// MEMORIA DE FUNÇÕES______________________

// const subtrair = document.querySelector('#subtrair')
// const somar =  document.querySelector('#somar')

// robotron.addEventListener('click',(evento) => {
//     console.log(evento)
// })

// function dizOi(nome){
//     console.log("Oi " + nome)
//     console.log('Seja bem-vindo ao Robotron 2000')
// }

// dizOi('Jennyfer')
//_______________________________________
//SOMAR e SUBTRAIR

// somar.addEventListener('click', (evento) => {
//      braco.value = parseInt(braco.value)+ 1
// })

// subtrair.addEventListener('click', (evento) => {
//      braco.value = parseInt(braco.value) - 1
// })

//_____________ RECONFIRANDO A FUNÇÃO ANTERIOR______________
// somar.addEventListener('click', () => {manipulaDados("somar")})
// subtrair.addEventListener('click', () => {manipulaDados("subtrair")})



