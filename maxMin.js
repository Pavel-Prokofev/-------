// В этом небольшом задании вам дается строка чисел, 
// разделенных пробелами, 
// и вы должны вернуть наибольшее и наименьшее число.

// Примеры
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Примечания
// Все номера действительны Int32, проверять их не нужно .
// Во входной строке всегда будет хотя бы одно число.
// Выходная строка должна состоять из двух чисел,
//  разделенных одним пробелом, 
//  причем первым должно быть наибольшее число.

function highAndLow(numbers){
  let numbersArr = numbers.split(' ');
  let maxMin = [Math.max(...numbersArr), Math.min(...numbersArr)];
  return maxMin[0] + ' ' + maxMin[1];
}

console.log(highAndLow("1 2 3 4 5"));