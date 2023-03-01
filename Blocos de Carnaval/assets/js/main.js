// const filterElement = document.querySelector('header input')
// const cards = document.querySelectorAll('.cards li')

// filterElement.addEventListener('input', filterTitle)

// function filterTitle(){
//    if(filterElement.value != ''){
//     for(let card of cards){
//         let title = card.querySelector('h3')
//         title = title.textContent.toLowerCase()
//         console.log(title)

//         let filterText = filterElement.value.toLowerCase()
//         if(!title.includes(filterText)){
//             card.style.display = 'none'
//             console.log(card)
//         }else{
//             card.style.display = 'block'
//         }
//     }
//    }else{
//     for(let card of cards){
//         card.style.display = 'block'
//     }
//    }
// }
const filterElement = document.querySelector('header select')
const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterTitle)

function filterTitle(){
   if(filterElement.value != ''){
    for(let card of cards){
        let title = card.querySelector('.location')
        title = title.textContent.toLowerCase()
        console.log(title)

        let filterText = filterElement.value.toLowerCase()
        if(!title.includes(filterText)){
            card.style.display = 'none'
            console.log(card)
        }else{
            card.style.display = 'block'
        }
    }
   }else{
    for(let card of cards){
        card.style.display = 'block'
    }
   }
}



// function rio(){
//     alert('clicado')
// }