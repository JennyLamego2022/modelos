// const lista = document.querySelector("ul");
// document.querySelector("#botao").addEventListener("click", () => {
//   lista.setAttribute("data-lista", "mostrar");
// });

// document.querySelector(".close").addEventListener("click", () => {
//   lista.setAttribute("data-lista", "esconder");
// });

// document.querySelector("#botao").addEventListener("click", mostrarTintas) {
//     lista.setAttribute("data-lista", "mostrar");
//   };


  const lista = document.querySelector("ul");
  const mostraLista = document.querySelector('#botao')
  const escondeLista = document.querySelector("#close")
  const controle = document.querySelector('[data-lista]')

  mostraLista.addEventListener('click', ()=>{
//    lista.style.display = "block"
    
        lista.setAttribute('data-lista', "mostrar")
  })

  escondeLista.addEventListener('click', ()=>{
    // lista.style.display = "none"
    lista.setAttribute("data-lista", "esconder")
   })

  

   