// Книготорговец имеет множество книг, отнесенных к 26 категориям с маркировкой A, B, ... Z.
// Каждая книга имеет код, cсостоящий из 3, 4, 5 или более символов. 
// Первый символ кода — заглавная буква, определяющая категорию книги .

// В списке книготорговца за каждым кодом cследует пробел
// и целое положительное число n (int n >= 0), которое указывает количество книг с этим кодом на складе.

// Например, выдержка из номенклатуры может быть такой:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// Вам будет предоставлен список товаров (например: L) и список категорий заглавными буквами, например:

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// и ваша задача — найти все книги L с кодами, принадлежащими каждой категории M, 
// и просуммировать их количество по каждой категории.

// Для списков L и M примера вам нужно вернуть строку (в Haskell/Clojure/Racket/Prolog список пар):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// где A, B, C, W — категории, 20 — сумма уникальной книги категории A, 114 — сумма,
// соответствующая «BKWRK» и «BTSQZ», 50 — «CDXEF» и 0 — категории «W». поскольку нет кода, начинающегося с W.

// Если L или M пусты, возвращаемая строка равна ""(Clojure/Racket/Prolog вместо этого должен возвращать пустой массив/список).

// Примечания:
// В результирующих кодах и их значениях тот же порядок, что и в М.

function stockList(listOfArt, listOfCat) {
  // ... 
  if (!listOfArt.length || !listOfCat.length) {
    return '';
  }
  const workListOfArt = listOfArt.slice();
  const res = listOfCat.map((litera) => {
    let counter = 0;
    let index = 0;

    while (index < workListOfArt.length) {
      if (litera === workListOfArt[index][0]) {
        counter += Number(workListOfArt[index].slice(workListOfArt[index].indexOf(' ') + 1));
        workListOfArt.splice(index, 1);
      } else {
        index++;
      }
    }

    return '(' + litera + ' : ' + counter + ')';
  });
  return res.join(' - ');
};


let b, c, res
b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D"]
res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
console.log(stockList(b, c), res)
// console.log(b, c)

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c), res)
// console.log(b[0][0])

b = []
c = ["A", "B"]
res = ""
console.log(stockList(b, c), res)

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = []
res = ""
console.log(stockList(b, c), res)