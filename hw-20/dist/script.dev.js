"use strict";

// 1
var userName = prompt("Введіть ваше ім'я");
console.log("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(userName)); // 2

var userAge = prompt("Введи рік твого народження");
var YEAR = 2020;
console.log("\u0422\u043E\u0431\u0456 ".concat(YEAR - userAge, " \u0440\u043E\u043A\u0456\u0432")); // 3

var squareSide = prompt("Введи сторону квадрата в см");
console.log("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 ".concat(squareSide * 4, " \u0441\u043C")); // 4

var radius = prompt("Введи радіус кола");
var PI = 3.14;
console.log("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 ".concat(PI * Math.pow(radius, 2), " \u0441\u043C")); // 5

var distance = prompt("Скільки км до точки призначення?");
var time = prompt("Скільки годин у тебе на дорогу?");
console.log("\u0422\u0432\u043E\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u0431\u0443\u0442\u0438 ".concat(distance / time, " \u043A\u043C/\u0433\u043E\u0434")); // 6

var dollarAmount = prompt("Скільки $?");
var EXCH = 0.84;
console.log("\u0406\u0437 ".concat(dollarAmount, " \u0434\u043E\u043B\u043B\u0430\u0440\u0456\u0432 \u0432\u0438\u0439\u0434\u0435 ").concat(dollarAmount * EXCH, " \u0454\u0432\u0440\u043E ")); // 7

var memorySize = prompt("Скільки GB?");
var FILE = 820;
console.log("\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u0437 \u043F\u0430\u043C'\u044F\u0442\u044C\u044E ".concat(memorySize, " \u0413\u0411 \u0432\u043B\u0456\u0437\u0435 ").concat(Math.floor(memorySize / (FILE / 1024)), " \u0444\u0430\u0439\u043B\u0456\u0432 "));