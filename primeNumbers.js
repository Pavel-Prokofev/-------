/*Элементы массива integersToCheck — натуральные числа, 
то есть целые числа больше нуля. Допишите код функции isPrime 
и передайте её колбэку метода every. Так вы проверите, 
все ли элементы массива — простые числа.
Простое число — это натуральное число больше единицы, 
у которого есть только два делителя: единица и само число. 
Например, число 5 — простое, потому что оно делится нацело только на 1 и на 5.*/

const integersToCheck = [2, 3, 193, 79, 7, 29];

/* нужно дополнить функцию isPrime, принимающую число на вход
и возвращающую true, если число простое, а иначе false */

function isPrime(num) {
  const halfNum = Math.floor(num / 2);
  for ( let i = 2; i <= halfNum; i++) {
    if (!(num % i)) {
      console.log(num);
      return false;
    }};
  return true;
  
  /* напишите здесь логику функции */
};

const integers = integersToCheck.every(isPrime);

console.log(integers);