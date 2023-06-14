function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, xAtor, yAtor, 30,30)
  movimentaAtor();
  mostraCarro();
  movimentaCarro()
  voltaPosicaoInicialDoCarro()
  verificaColisao()
  incluiPontos()
  marcaPonto()
}