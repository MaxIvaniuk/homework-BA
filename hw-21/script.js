// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
let age = 15;

if (age <= 2) {
  console.log("ребенок");
  
} else if (age >= 12 && age <=18) {
  console.log("подросток");
  
} else if (age >= 18 && age <= 60) {
  console.log("взрослый");
  
} else {
  console.log("пенсионер");
}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
let num = +prompt("Enter the number")
let result;

switch (num) {
  case 1: result = `!`;
    break;
  case 2: result = `@`;
    break;
  case 3: result = `#`;
    break;
  case 4: result = `$`;
    break;
  case 5: result = `%`;
    break;
  case 6: result = `^`;
    break;
  case 7: result = `&`;
    break;
  case 8: result = `*`;
    break;
  case 9: result = `(`;
    break;
  case 0: result = `)`;
    break;
}
console.log(result);

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
let data = +prompt(`Enter 3 numbers`)

let num1 = (data - (data % 100)) / 100;
let num2 = ((data % 100) - (data % 10)) / 10;
let num3 = (data % 10);

if (num1 === num2 || num1 === num3 || num2 === num3) {
  console.log(`Є однакові числа`);
} else {
  console.log(`Однакових чисел немає`);
}

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let year = +prompt(`Enter a year`);

if (year % 400 == 0 || year % 4 == 0 && year % 100 > 0) {
  console.log('Високосний рік');
} else {
  console.log('НЕ високосний рік');
}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
let palindrome = 10101;
let reverse = 0;
let number = palindrome;

number = number.toString();
let splitString = number.split('');
let reverseArray = splitString.reverse();
reverse = reverseArray.join('');

if (reverse == palindrome){
  console.log(`Its palindrome`);
} else {
  console.log(`Its not palindrome`);
}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// Працює з числами та словами напр. 'tenet' 'кит на морі романтик'(без пробілів)
let palindrome = '01010';
let reverse; // Оголошуємо змінну для перевірки
let number = palindrome;

number = number.toString(); //Переводимо змінну у строку, якщо дане число
let splitString = number.split(''); //Розбиваємо отримані дані на масив з окремими значеннями
let reverseArray = splitString.reverse(); //Перевертаємо цей масив для перевірки
reverse = reverseArray.join(''); //Перетворюємо перевернуті елементи масиву у строку

if (reverse == palindrome){ //Запускаємо перевірку
  console.log(`Its palindrome`);
} else {
  console.log(`Its not palindrome`);
}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
let palindrome = '12584';
let reverse;
let number = palindrome;

reverse = ((number % 10) * 10000) + ((number % 100 - number % 10) * 100) + (number % 1000 - number % 100) + ((number % 10000 - number % 1000) / 100) + (number % 100000 - number % 10000) / 10000;

if (palindrome === reverse) {
  console.log('This is palindrome');
} else {
  console.log('This is not palindrome');
}

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let sum = +prompt('Enter summ in USD'),
    currency = prompt('Enter your currency(EUR, UAH, AZN)'),
    result,
    currencyName;

switch (currency) {
  case 'EUR': 
    result =  sum * 0.82;
    currencyName = 'EUR';
    break;
  case 'UAH':
    result = sum * 28.28;
    currencyName = 'UAH';
    break;
  case 'AZN':
    result = sum + 1.70;
    currencyName = 'AZN';
    break;
}
console.log(result.toFixed(1) + currencyName);

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let sum = 450;
let result;

if (sum >= 200 && sum <= 300){
  result =  sum - (sum * 0.03);
} else if (sum >= 300 && sum <=500){
  result =  sum - (sum * 0.05);
} else if ( sum >= 500){
  result =  sum - (sum * 0.07);
}
console.log(result);

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let capital = prompt('What is the capital of Great Britain? 1 - London 2 - New York 3 - Paris'),
    currency = prompt('What is the currency of the USA? 1 - USD 2 - UAH 3 - RMB'),
    country = prompt('What is the most populated country? 1 - the USA 2 - Japan 3 - China'),
    score = 0;
if (capital == 1)
    score += 2;
if (currency == 1)
    score += 2;
if (country == 3)
    score += 2;
alert('Your score is ' + +score);

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const PI = 3.14;
let square = +prompt('Периметр квадрата'),
    squareSide = square / 4,
    circle = +prompt('Довжина кола'),
    circleRadius = circle / 2 * PI;

if (circleRadius * 2 <= squareSide) {
  console.log('окружность поместиться в указанный квадрат');
} else {
  console.log('окружность НЕ поместиться в указанный квадрат');
}