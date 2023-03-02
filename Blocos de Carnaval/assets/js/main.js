const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterTitle)

function filterTitle(){
   if(filterElement.value != ''){
    for(let card of cards){
        let title = card.querySelector('h3')
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


const filterElementCity = document.querySelector('header select')

filterElementCity.addEventListener('input', filterLocation)

function filterLocation(){
   if(filterElementCity.value != ''){
    for(let card of cards){
        let location = card.querySelector('.location')
        location = location.textContent.toLowerCase()
        console.log(location)

        let filterText = filterElementCity.value.toLowerCase()
        if(!location.includes(filterText)){
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


//_________________________________________________________


const lista = document.querySelector('#lista')
const blocos = document.querySelector(" .blocos ")


const mapa = document.querySelector('#mapa')
const imgMapa = document.querySelector(".mapa")



lista.addEventListener('click', () => {
    imgMapa.style.display = 'none';
    blocos.style.display = 'block'
})

mapa.addEventListener('click', () => {
    blocos.style.display = 'none';
    imgMapa.style.display = 'initial'
})

