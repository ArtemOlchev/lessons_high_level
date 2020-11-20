let num = 266219;
let arrayNum = String(num);
let result = 1;

for (let i = 0; i < arrayNum.length; i++){
    result *= arrayNum[i];
}

console.log("Результат перемножения цифр числа " + num + ": " + result);

result = result**3;
console.log("Возведение полученного числа в 3-ю степень используя (**): " + result);

console.log("Первые две цифры полученного числа в результате возведения в степень 3: " + String(result).slice(0, 2));