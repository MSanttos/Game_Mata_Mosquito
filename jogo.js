var altura = 0
var largura = 0

function ajustaTela(){
  altura = window.innerHeight
  largura = window.innerWidth

  console.log(largura, altura)
}

ajustaTela()


function posicao_Randomica_Mosquito(){
  var posicaoX = Math.floor(Math.random() * largura) -90
  var posicaoY = Math.floor(Math.random() * altura) -90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.log(posicaoX, posicaoY)

  //criar elemento html
  var mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosquito.png'
  mosquito.className = 'mosquito'
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'

  document.body.appendChild(mosquito)
}