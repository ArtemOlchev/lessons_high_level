'use strict';

const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let now = new Date();


for(let i = 0; i < 7; i++){
    
    if (i === now.getDay()){
        console.log(week[i].bold());
    } else if (i === 0 || i === 6){
        console.log(week[i].italics());
    } else {console.log(week[i]);
    }

}

