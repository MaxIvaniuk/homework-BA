// 1
let userName = prompt("Введіть ваше ім'я");
console.log (`Привіт, ${userName}`);

// 2
let userAge = prompt("Введи рік твого народження");
const YEAR = 2020;
console.log (`Тобі ${YEAR - userAge} років`);

// 3
let squareSide = prompt("Введи сторону квадрата в см");

console.log (`Периметр квадрата ${squareSide * 4} см`);

// 4
let radius = prompt("Введи радіус кола");
const PI = 3.14;

console.log (`Площа кола ${PI * radius ** 2} см`);

// 5
let distance = prompt("Скільки км до точки призначення?");
let time = prompt("Скільки годин у тебе на дорогу?");

console.log (`Твоя швидкість повинна бути ${distance / time} км/год`);

// 6
let dollarAmount = prompt("Скільки $?");
const EXCH = 0.84;

console.log (`Із ${dollarAmount} долларів вийде ${dollarAmount * EXCH} євро `);

// 7
let memorySize = prompt("Скільки GB?");
const FILE = 820;

console.log (`На флешку з пам'ятью ${memorySize} ГБ влізе ${Math.floor(memorySize / (FILE / 1024))} файлів `);

// 8
let sum = prompt("Сума грошей");
let cost = prompt("Скільки шоколадок?");
let amount = Math.floor(sum / cost);

console.log (`На суму ${sum} грн, при вартості однієї ${cost} грн, можна купити ${amount} шоколадок та залишиться ${Math.floor(sum - (amount * cost))} грн решти `);

// 9

let number = prompt ('enter 3 numbers');
let result = ((number % 10) * 100) + ((number % 100) - (number % 10)) + ((number - (number % 100)) / 100);
console.log(result);

123 = 300 + 20 + 1

// 10
let sum = prompt("Сума вкладень");
const RATE = 0.05 / 12;

console.log(`Сумма начислених відсотків ${(sum * RATE) * 2}`);

// Додатково 1
let name = 'Джон';
let admin = 'Джон';
alert (admin);

// Додатково 2
let a = prompt("Первое число?");
let b = prompt("Второе число?");

alert(+a + +b);