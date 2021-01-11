// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let min = 5,
    max = 10,
    result = 0;

for (let i = min; i <= max; i++){
  result += i;
}
console.log(result);

// Запросить 2 числа и найти только наибольший общий делитель.
let a = 80,
    b = 40,
    i = a % b;

while (i > 0) {
  a = b;
  b = i;
  i = a % b;
}
console.log(b);

// Запросить у пользователя число и вывести все делители этого числа.
let a = 800,
    b = 40,
    i;

if (a > b) {
  i = b;
} else {
  i = a;
}
while (i > 0) {
  if (a % i == 0 && b % i == 0) {
    console.log(i);
  }
  i--
} 