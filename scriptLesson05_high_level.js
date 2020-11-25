'use strict';

function twoAndFour(array){
    for (let i = 0; i < array.length; i++){
        if ((array[i].substr(0, 1) === "2") || (array[i].substr(0, 1) === "4")){
            console.log(array[i]);
        }
    }
}

let arr = ["23474", "658748", "5436", "46468", "34758", "2964", "42787"];
twoAndFour(arr);
let num;
let value;
for (let i = 1; i <= 100; i++){
    value = 0;
    for (let n = 1; n <= i; n++){
        num = i;
        num /= n;
        if(Number.isInteger(num)){
            value++;
        }
    }
    if(value === 2){
        console.log("Простое число: " + i + " делители этого числа 1 и " + i);
    }
}