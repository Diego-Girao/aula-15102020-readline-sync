describe ('TESTE GUESS MODULE',()=>{
    
    it('Quando eu executo a função showTitle ela deve retornar a mensagem "GUESS PLAY GAME"',()=>{
        const guess = require('./guess');
        expect (guess.showTitle()).toBe("GUESS PLAY GAME");
    })

    it('Quando eu executo a função generateSecretNumber ela deve retornar um número entre 0 e 10',()=>{
        const guess = require('./guess');
        const secretNumber = guess.generateSecretNumber();
        const inRange = secretNumber >= 0 && secretNumber <= 10;
        expect (inRange).toBe(true);
    })

    it('Quando eu executo a função getQuestion ela deve retornar a mensagem "Tente a sorte, informe um número entre 0 e 10"',()=>{
        const guess = require('./guess');
        expect (guess.getQuestion()).toBe("Tente a sorte, informe um número entre 0 e 10");
    })

    it('Quando eu executo a função validate passando dois valores iguais 7 e 7 deve retornar true',()=>{
        const guess = require('./guess');
        expect (guess.validate(7,7)).toBe(true);
    })

    it('Quando eu executo a função validate passando dois valores diferentes 3 e 9 deve retornar false',()=>{
        const guess = require('./guess');
        expect (guess.validate(3,9)).toBe(false);
    })

    it('Quando eu executo a função getLooserMessage deve retornar a mensagem "Que azar, tente outra vez !"',()=>{
        const guess = require('./guess');
        expect (guess.getLooserMessage()).toBe("Que azar, tente outra vez !");
    })

    it('Quando eu executo a função getWinnerMessage deve retornar a mensagem "WOW você acertou, muito bem !!!!"',()=>{
        const guess = require('./guess');
        expect (guess.getWinnerMessage()).toBe("WOW você acertou, muito bem !!!!");
    })
})