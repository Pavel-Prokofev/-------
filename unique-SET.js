// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// Например:

function myUnique(arr) {
  /* ваш код */
   let unique = new Set(arr);
  let i = 0;
  let uniqueArr = [];
  for (let value of unique) {
    uniqueArr[i] = value;
    ++i;
  }
  return uniqueArr;
}

function topuUnique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


console.log(myUnique(values));
console.log(topuUnique(values));
// alert(unique(values)); // Hare,Krishna,:-O


// P.S. Здесь мы используем строки, но значения могут быть любого типа.

// P.P.S. Используйте Set для хранения уникальных значений.