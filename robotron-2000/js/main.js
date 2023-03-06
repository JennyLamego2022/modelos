const robotron = document.querySelector('#robotron')

const subtrair = document.querySelector('#subtrair')
const somar =  document.querySelector('#somar')
const braco =  document.querySelector('#braco')
const pecas = document.querySelectorAll(".peca-titulo")

const controle = document.querySelectorAll(".controle-ajuste")
console.log(controle)

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.textContent)

    })
})

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



function manipulaDados (operacao){
    if(operacao === '-'){
        braco.value = parseInt(braco.value) - 1
    }else {
        braco.value = parseInt(braco.value)+ 1
    }
}