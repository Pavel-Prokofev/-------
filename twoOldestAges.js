// Необходимо выполнить две самые старые функции/метода age. 
// Он должен принимать массив чисел в качестве аргумента и возвращать два наибольших числа в массиве. 
// Возвращаемое значение должно быть массивом в формате [second oldest age,  oldest age].

// Порядок передаваемых чисел может быть любым. 
// Массив всегда будет включать как минимум 2 элемента. 
// Если есть два или более старших возраста, верните их оба в формате массива.

// Например (Ввод -> Выход):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

function twoOldestAges(ages) {
  if (ages.length >= 2) {

    const result = ages.slice(0, 2).sort((a, b) => a - b);

    for (let i = 2; i < ages.length; i++) {
      if (result[0] < ages[i]) {
        result[0] = ages[i];
        result.sort((a, b) => a - b);
      }
    }
    return result;
  } else {
    return 'Длиннаа переданного масива меньше 2ух, что не соответствует условию обработки';
  }
}


let results1 = twoOldestAges([1, 5, 87, 45, 8, 8]); // [45, 87]
let results2 = twoOldestAges([6, 5, 83, 5, 3, 18]); // [18, 83]
let results3 = twoOldestAges([-6, 5, -83, 5, 3, 18]); // [5, 18]
let results4 = twoOldestAges([6]); // 'Длиннаа переданного масива меньше 2ух, что не соответствует условию обработки'
let results5 = twoOldestAges([45, 8]); // [8, 45]
let results6 = twoOldestAges([-1, -5, -87, -45, -8, -8]); // [-5, -1]

console.log(results1);
console.log(results2);
console.log(results3);
console.log(results4);
console.log(results5);
console.log(results6);