// 1) Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function numbers(num1, num2){
  if (num1 < num2) {
    return console.log(-1);
  } else if (num1 > num2){
    return console.log(1);
  } else {
    return console.log(0);
  }
}
numbers(7, 6)

// 2) Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(n){
  if (n != 1){
  return n * factorial(n - 1);
  } else {
  return 1;
  }
}
console.log(factorial(5));

// 4) Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function square(a, b) {
  return (arguments.length == 2) ? a * b : a * a;
}
console.log(square(5));

// 5) Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function perfectNumber(n) {
  let result = 0;
  for(let i = 0; i < n; i++) {
    if(n % i == 0){
      result += i;
    }
  }
  return (result == n) ? console.log(n + ` Досконале число`) : console.log(n + ` Не досконале число`);
}

perfectNumber(5);

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function perfectNumber(n) {
  let result = 0;
  for(let i = 0; i < n; i++) {
    if(n % i == 0){
      result += i;
    }
  }
  return (result == n) ? console.log(n + ` Досконале число`) : console.log(n);
}

function diapasone(n1, n2) {
  let result = 0;
  for(let number = n1; number <= n2; number++) {
    perfectNumber(number);
  }
}
diapasone(1, 8);

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00
function time(hour, minute, second){
  if (minute == undefined && second == undefined) {
    minute = `00`;
    second = `00`;
  } else if (second == undefined){
    second = `00`;
  } else if (minute == undefined ) {
    minute = `00`;
  }
  return console.log(hour + `:` + minute + `:` + second);
}
time(12)

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function time(hour, minute, second){
  let secondsInMinute = 60;
  let secondsInHour = 3600;
  return console.log(hour * secondsInHour + minute * secondsInMinute + second + ` секунд`);
}
time(12, 12, 30)

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function time(second){
  
  let hourInSeconds = Math.trunc(second / 3600);
  let minuteInSeconds = Math.trunc((second - hourInSeconds * 3600) / 60);
  let leftSeconds = Math.trunc(second - ((hourInSeconds * 3600) + (minuteInSeconds * 60)))
  return console.log(hourInSeconds + ':' + minuteInSeconds + ':' + leftSeconds);
}
// time(12, 12, 30)
time(43950);

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
function timeDifference(hour1, minute1, seconds1, hour2, minute2, seconds2){
  //     hours to seconds
    let secondsInMinute = 60;
    let secondsInHour = 3600;
    let totalTime1 = hour1 * secondsInHour + minute1 * secondsInMinute + seconds1;
    console.log(totalTime1);
    let totalTime2 = hour2 * secondsInHour + minute2 * secondsInMinute + seconds2;
    console.log(totalTime2);
    let differenceInTime = totalTime2 - totalTime1;
    console.log(differenceInTime);
  // seconds to hour
    let hourInSeconds = Math.trunc(differenceInTime / 3600);
    let minuteInSeconds = Math.trunc((differenceInTime - hourInSeconds * 3600) / 60);
    let leftSeconds = Math.trunc(differenceInTime - ((hourInSeconds * 3600) + (minuteInSeconds * 60)))
    return console.log('Difference in time is: ' + hourInSeconds + ':' + minuteInSeconds + ':' + leftSeconds);
  
  }
  timeDifference(01, 20, 59, 20, 14, 30);