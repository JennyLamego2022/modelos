const robotron = document.querySelector('#robotron')
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)
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

function atualizaEstatisticas(operacao, peca){
    // console.log(pecas[peca])

    estatisticas.forEach((elemento) =>{
        // console.log(elemento.dataset.estatistica)
        // console.log(elemento.textContent)
       
        if(operacao === '-'){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
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



