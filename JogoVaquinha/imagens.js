//imagens do jogo 

let imagemDaEstrada;
let imagemDoAtor
let imagemCarro
let imagemCarro2
let imgagemCarro3

//Sons do jogo
let somDaTrilha
let somDaColisao
let somDoPonto

function preload(){
  imagemDaEstrada = loadImage("estrada.png")
  imagemDoAtor = loadImage("ator-1.png")
  imagemCarro = loadImage("carro-1.png")
  imagemCarro2 = loadImage("carro-2.png")
  imagemCarro3 = loadImage("carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]

  somDaTrilha = loadSound("Sons/trilha.mp3")
  somDaColisao = loadSound("Sons/colidiu.mp3")
  somDoPonto = loadSound("Sons/pontos.wav")
}

