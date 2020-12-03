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