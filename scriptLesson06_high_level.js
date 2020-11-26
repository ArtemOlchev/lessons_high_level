'use strict';




function playBot(){
    let num = prompt("Угадай число от 1 до 100");
    let n = 10;

    function guessNum(){
        let hidNum = 89;
        if (+num === +hidNum){
            let bool = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?");
            if (bool){
                playBot();
            } else if (!bool){
                return;
            }
        } else if (n === 1){
            let bool = confirm("Попытки закончились, хотите сыграть еще?");
            if (bool){
                playBot();
            } else if (!bool){
                return;
            }
        } else if (num === null || num === undefined){
            alert("Игра окончена");
            return;
        } else if (num < 1 || num > 100){
            num = prompt("Угадай число от 1 до 100");
            guessNum();
        } else if (hidNum < num){
            num = prompt("Загаданное число меньше. Осталось попыток " + (n - 1));
            n--;
            guessNum();
        } else if (hidNum > num){
            num = prompt("Загаданное число больше. Осталось попыток " + (n - 1));
            n -= 1;
            guessNum();
        } else if (isNaN(+num)){
            num = prompt("Введите число!");
            guessNum();
        } 
    }
    console.dir(guessNum);
    return guessNum();
}

playBot();