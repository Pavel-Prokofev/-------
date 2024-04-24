// Есть список неких договоров, которые имеют только дату начала и дату конца.
// Их периоды действий могут быть произвольными - могут пересекаться несколько раз,
// а могут и быть совсем независимыми.
// Надо вернуть список периодов, когда никакие договоры не действовали.

// А ещё они могут соприкасаться тоесть конец к примеру 15, а начало следующего 16. В таком случае интервал между ними тоже не существует.
// Так же непонятно до кокого числа ставить последний интервал. (усреднил, что последний 31)

// Например:

const contractValidityIntervals = [
  { begin: 1, end: 5 },

  { begin: 4, end: 9 },

  { begin: 13, end: 20 },

  { begin: 14, end: 18 },

  { begin: 22, end: 24 },

  { begin: 25, end: 30 },
];

// Правильный ответ будет

// [

// {begin: 10, end: 12},

// {begin: 19, end: 21} !!! это неверный ответ, есть договор { begin: 13, end: 20 } !!!


// Узнаём какие дни не заняты.
const unoccupiedNumbers = (numbersInRow, intervals) => {
  let unoccupiedNumbers = [];
  for (let elem = 1; elem <= numbersInRow; elem++) {
    unoccupiedNumbers.push(elem);
  }

  for (let interval in intervals) {
    if (unoccupiedNumbers.langth !== 0) {
      unoccupiedNumbers = unoccupiedNumbers.filter(
        (day) =>
          day < intervals[interval].begin || day > intervals[interval].end
      );
    } else {
      return [];
    }
  }

  return unoccupiedNumbers;
};


// Находим незанятые интервалы.
const unoccupiedIntervals = (intervals) => {
  // Нет условия определить сколько дней в проверяемом месяце, не передаётся какой месяц обрабатываем, потому захадкодил.
  const daysPerMonth = 31;

  if (intervals.length) {
    let unoccupiedDays = unoccupiedNumbers(daysPerMonth, intervals);

    if (unoccupiedDays.length === 0) {
      return [];
    }

    const unoccupiedIntervals = [];

    for (let i = 0; i < unoccupiedDays.length; ) {
      let begin = unoccupiedDays[i];
      let end;
      let j = i;
      for (; j < unoccupiedDays.length; j++) {
        if (Number(unoccupiedDays[j] + 1) === Number(unoccupiedDays[j + 1])) {
          end = unoccupiedDays[j + 1];
        } else {
          end = unoccupiedDays[j];
          break;
        }
      }
      unoccupiedIntervals.push({ begin, end });
      i = j + 1;
    }

    return unoccupiedIntervals;
  }

  return [{ begin: 1, end: daysPerMonth }];
};


// если свободен только один день, начало и конец интервала совпадают.
console.log(unoccupiedIntervals(contractValidityIntervals));
