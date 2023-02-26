// get filter element
const filterElement = document.querySelector('header input')
// get cards elements
const cards = document.querySelectorAll('.cards li')

// add input event for the filter element
filterElement.addEventListener('input', filtertitle)

// filter function
function filtertitle(){
  // if the filter is not empty
  if(filterElement.value != ''){

    // for each card of cards
    for(let card of cards){
      // get card heading (title)
      let title = card.querySelector('h2')
      // tranform to lower case
      title = title.textContent.toLowerCase()
      console.log(title)
      // transform filter text to lower case
      let filterText = filterElement.value.toLowerCase()
      // if card title does not include the filter text
      if(!title.includes(filterText)){
        card.style.display = 'none'
        console.log(filterText)
        // hide the card element
      }else{
        card.style.display = "block" 
      }
      // else
    }
  }else{
    for (let card of cards){
      card.style.display = 'block'
    }
        // unhide the card element
  }
  // else
    // for each card of cards
      // unhide the card element
}