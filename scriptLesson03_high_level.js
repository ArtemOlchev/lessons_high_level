'use strict';

let lang = prompt("Введите одно из двух значений \"ru\" или \"en\"");

let ru = ("ru");
let en = ("en");

let daysOfTheWeek = [
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    ["Вы ввели не корректное значение!"]
];

//1)console.log("");
console.log("1)");
//1.1 Через if
console.log("Через if");
if(lang === ru){
    console.log(daysOfTheWeek[0]);
} else if(lang === en){
    console.log(daysOfTheWeek[1]);
} else{
    console.log(daysOfTheWeek[2][0]);
}

//1.2 Через switch-case
console.log("Через switch-case");
switch(lang){
    case ru:
        console.log(daysOfTheWeek[0]);
        break;
    case en:
        console.log(daysOfTheWeek[1]);
        break;
    default:
        console.log(daysOfTheWeek[2][0]);
}

//1.3 Через многомерный массив без использования if или switch
console.log("Без использования if или switch");
let boolRu = Number(!(Boolean(lang === ru)));
let boolEn = Number(lang === en);
let boolIncorrect = Number((lang !== ru) && (lang !== en));

let ind = boolRu * boolEn + boolIncorrect * (!(Boolean(boolEn)) + boolRu);

console.log(daysOfTheWeek[ind]);

//2)
console.log("");
console.log("");
console.log("2)");

let namePerson = prompt("Введите имя:");

namePerson = namePerson === "Артем" ? "Директор" : namePerson;
namePerson = namePerson === "Максим" ? "Преподаватель" : namePerson;
namePerson = ((namePerson !== "Директор") && (namePerson !== "Преподаватель")) ? "Студент" : namePerson;

console.log(namePerson);