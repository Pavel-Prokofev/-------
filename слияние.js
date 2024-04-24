var mergeTwoLists = function (list1, list2) {
  if (!list1.length) {
    return list2;
  }

  if (!list2.length) {
    return list1;
  }

  const result = [];

  for (let i = 0; i < list1.length; i++) {
    // если второй массив закончился а первый нет, дописываем его остаток в результат
    if (!list2.length) {
      const remains = list1.splice(i);
      Array.prototype.push.apply(result, remains);
      break;
    }

    for (let j = 0; j < list2.length; j++) {
      if (list1[i] < list2[j]) {
        result.push(list1[i]);
        // удаляем отработавшие элементы второго массива.
        list2.splice(0, j);
        break;
      } else {
        result.push(list2[j]);
      }

      // если мы дошли до конца второго массива не встретив элемента больше,
      // чем проверяемый элемент первого массива, записываем в результат
      // тот который проверяли из первого (а то он смениться) и удаляем ненужные уже элементы второго.
      if (j === list2.length - 1) {
        result.push(list1[i]);
        list2.splice(0);
      }
    }

    // если первый массив закончился а второй нет, дописываем его остаток в результат
    if (i === list1.length - 1 && list2.length) {
      Array.prototype.push.apply(result, list2);
    }
  }
  return result;
};

console.log(mergeTwoLists([2, 2, 4, 5, 6], [1, 3, 4, 6]));

const a = [2, 2, 4, 5, 6];
const b = [1, 3, 4, 6];

a.push(...b);
console.log(a)

// не проверенна, литкод глючит =(