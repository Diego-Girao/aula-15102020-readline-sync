function showTitle(){
    const title = "GUESS PLAY GAME";
    return title;
}

function generateSecretNumber(){
    const secret = Math.floor((Math.random() * 11));
    return secret;
}

function getQuestion(){
    const question = "Tente a sorte, informe um número entre 0 e 10";
    return question;
}

function validate(tip, secretNumber){
    const ok = tip === secretNumber;
    return ok;
}

function getLooserMessage(){
    const looserMessage = "Que azar, tente outra vez !";
    return looserMessage;
}

function getWinnerMessage(){
    const winnerMessage = "WOW você acertou, muito bem !!!!"
    return winnerMessage;
}


module.exports = {
    showTitle,
    generateSecretNumber,
    getQuestion,
    validate,
    getLooserMessage,
    getWinnerMessage
}