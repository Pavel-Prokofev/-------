// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

function aclean(arr) {
  // const workArr = arr;
  let map = new Map();

  for (let word of arr) {
    // const sort = word.toLowerCase().split('').sort((a, b) => { return a.localeCompare(b) }).join('');
    const sort = word.toLowerCase().split('').sort().join('');
    map.set(sort, word);

  };

// return map.values();
return Array.from(map.values());
// return Object.values(obj);
  
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

aclean(arr);

console.log(aclean(arr));

// alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.