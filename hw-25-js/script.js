// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
let auto = {
   madeIn: 'Germany',
   model: 'BMW',
   year: 2020,
   averageSpeed: 120
 }

// Функция для вывода на экран информации об автомобиле;
function showInfo(massive){
  console.log(`Info about car ${massive}`);
}
showInfo(auto);

function showInfo(){
  let result =  ``;
  for(let item of auto) {
    result += item + ': ' + auto.item +'; ';
    console.log(result);
  }
}
showInfo();

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
function timeCalc(distance){
  let time = (distance / auto.averageSpeed) + Math.trunc(distance / auto.averageSpeed / 4);
  console.log(`time to cover the distance ${distance} is ${time} hour`)
}
timeCalc(120);



// 2. Создать объект, хранящий в себе отдельно чисельник (numerator) и знаменник (denominator) дроби (fraction), и следующие функции для работы с этим объектом: 

function fraction(numerator, denominator){
  return{
    numerator,
    denominator
  }
}

let fractionA = new fraction(4, 5);
let fractionB = new fraction(2, 6);


// Функция додавання 2-х объектов-дробей;
function summ(f1, f2) {
  let numeratorSum = (f1.numerator * f2.denominator) + (f2.numerator * f1.denominator);;
  let denominatorSum = f1.denominator * f2.denominator;
  return console.log(`Додавання: чисельник: ${numeratorSum}, знаменник:  ${denominatorSum}`);
}
summ(fractionA, fractionB);


// Функция віднімання 2-х объектов-дробей;
function subtraction(f1, f2) {
  let numeratorSub = (f1.numerator * f2.denominator) - (f2.numerator * f1.denominator);
  let denominatorSub = f1.denominator * f2.denominator;
  return console.log(`Віднімання: чисельник: ${numeratorSub}, знаменник:  ${denominatorSub}`);
}
subtraction(fractionA, fractionB);


// Функция множення 2-х объектов-дробей;
function multiplication(f1, f2) {
  let numeratorMult = f1.numerator * f2.numerator;
  let denominatorMult = f1.denominator * f2.denominator;
  return new fraction(numeratorMult, denominatorMult);
  // return console.log(`Множення: чисельник: ${numeratorMult}, знаменник:  ${denominatorMult}`);
}
multiplication(fractionA, fractionB);


// Функция ділення 2-х объектов-дробей;
function division(f1, f2) {
  let numeratorDiv = f1.numerator * f2.denominator;
  let denominatorDiv = f1.denominator * f2.numerator;
  // return new fraction(numeratorDiv, denominatorDiv);
  return console.log(`Ділення: чисельник: ${numeratorDiv}, знаменник:  ${denominatorDiv}`);
}
division(fractionA, fractionB);


// Функция сокращения объекта-дроби.
function reduction(f) {
    let a = Math.abs(f.numerator);
    let b = Math.abs(f.denominator);

    while(a != 0 && b != 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    let n = a + b;

    let numeratorReduct = f.numerator / n;
    let denominatorReduct = f.denominator / n;

    return console.log(`Скорочення: чисельник: ${numeratorReduct}, знаменник: ${denominatorReduct}`)
}
reduction(fraction);
  
let mult = multiplication(fractionA, fractionB);
console.log(reduction(mult));

let time = new Date();

const timeNow = {
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
}
// Функция вывода времени на экран;
timeNow.show = function() {
  let hr = this.hour >= 10 ? this.hour : `0${this.hour}`;
  let mn = this.minute >= 10 ? this.minute : `0${this.minute}`;
  let sec = this.second >= 10 ? this.second : `0${this.second}`;
  
  console.log(`${hr}:${mn}:${sec}`);
}
// Функция изменения времени на переданное количество секунд;

timeNow.changeSec = function (seconds){
  let sec = this.second + seconds;
  this.second = sec % 60;
  
  this.changeMin(Math.trunc(sec / 60));
  
}
// Функция изменения времени на переданное количество минут;

timeNow.changeMin = function(minutes){
  let min = this.minute + minutes;
  this.minute = min % 60;
  
  this.changeHours(Math.trunc(min / 60));
}


timeNow.changeHours = function (hours) {
  this.hour = (this.hour + hours) % 24;

  this.show();
}

timeNow.show();
timeNow.changeSec(10);
timeNow.changeMin(10); 
timeNow.changeHours(10);