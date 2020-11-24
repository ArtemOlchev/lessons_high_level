'use strict';

function changeStr(varible){
    if (varible !== String(varible)){
        varible = "Аргумент в функции 'changeStr' не строка!";
        return varible;
    }

    varible = varible.replace(/\s+/g,' ' ).replace(/^\s/,'').replace(/\s$/,'');

    let varibleAfterChange;
    if (String(varible).length > 30){
        varibleAfterChange = varible.substr(0, 30) + " ...";
    } else {
        varibleAfterChange = varible;
    }

    return varibleAfterChange;
}

let bool = true;
console.log(changeStr(bool));

let str = prompt("Введите строку:");

console.log(changeStr(str));