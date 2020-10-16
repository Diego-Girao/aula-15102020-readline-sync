const terminal = require('readline-sync');
const guess = require('./guess');

// Exibe o titulo de abertura do jogo.
console.log(guess.showTitle());

//Gerador de numero secreto.
let secretNumber = guess.generateSecretNumber();

// Exibe mensagem que indica o que o usuário deve fazer.
console.log(guess.getQuestion());

// Ler o palpite do usuario
let tip = parseInt(terminal.prompt());

// Validar se o palpite está certo ou errado.
let ok = guess.validate(tip, secretNumber);

// Apresentar uma mensagem de sucesso ou erro.
if(ok){
    console.log(guess.getWinnerMessage());

}else{
    console.log(guess.getLooserMessage());
}
