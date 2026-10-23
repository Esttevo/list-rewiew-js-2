// Exercício 3: Compartilhamento de Métodos de Robôs
// 1. Crie uma função construtora RoboGantry que receba posicaoX e posicaoY.
// 2. Adicione o método moverOrigem ao RoboGantry.prototype alterando posicaoX e posicaoY para 0.
// 3. Crie duas instâncias (robo1 e robo2).
// 4. Execute moverOrigem em ambas e confirme que o método é compartilhado via protótipo.

function RoboGantry(posicaoX, posicaoY) {
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
}

RoboGantry.prototype.moverOrigem  = function() {
    this.posicaoX = 0;
    this.posicaoY = 0;
}

let robo1 = new RoboGantry(10,20);
let robo2 = new RoboGantry(40,10);

console.log(robo1);
console.log(robo2);


robo1.moverOrigem();
robo2.moverOrigem();

console.log(robo1);
console.log(robo2);