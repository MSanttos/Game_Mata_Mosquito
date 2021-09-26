var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
//alert(nivel.replace('?', ''))// ** alert(nivel) mostra o ? passado, para retirar o caracter usa-se => alert(nivel.replace('?', ''))
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
  //tempo de 1500 milissegundos
  criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
  //tempo de 1000 milissegundos
  criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
  //tempo de 750 milissegundos
  criaMosquitoTempo = 750
}

function ajustaTela(){
  altura = window.innerHeight
  largura = window.innerWidth

  console.log(largura, altura)
}

ajustaTela()

var cronometro = setInterval(function(){
  tempo -=1
  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criaMosca)
    //alert('Vitória')
    window.location.href='vitoria.html'
  }else{
  //tudo dentro da tag é innerHTML
  document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)


function posicao_Randomica_Mosquito(){

  //remover mosquito anterior caso exista
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    //após executar essa instrução vem o auto incremento de mais uma unidade dessa variável
    console.log('v' + vidas)
    if(vidas > 3){
      clearInterval(criaMosca)
      //alert('Uhm... que pena, GAME OVER')
      window.location.href='fim_de_jogo.html'
    }else{
      document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png"
      vidas++
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) -100
  var posicaoY = Math.floor(Math.random() * altura) -100

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.log(posicaoX, posicaoY)

  //criar elemento html
  var mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosquito.png'
  mosquito.className = mudaTamanho() + ' ' + ladoALadoB()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function() {
    console.log('Elemento clicado a tempo')
    //this. refere-se ao própio elemento HTML ou seja, `mosquito`
    this.remove()
  }

  document.body.appendChild(mosquito)
  
  ladoALadoB()
  console.log(ladoALadoB())


  mudaTamanho()
  console.log(mudaTamanho())
}

function mudaTamanho(){
  var classe = Math.floor(Math.random() * 3)
  //console.log(classe)
  if(classe == 0){
    return 'mosquito1'
  }else if(classe == 1){
    return 'mosquito2'
  }else {
    return 'mosquito3'
  }
}

function ladoALadoB(){
  var classe = Math.floor(Math.random() * 2)
  //console.log(classe)
  switch(classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}