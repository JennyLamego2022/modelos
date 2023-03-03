const element = document.querySelector("#robotron");

element.addEventListener('click', trocaText)

function trocaText(){
    document.querySelector('.titulo').innerHTML = "Deu certo"
    console.log(trocaText)
}