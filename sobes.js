const list = [
  { name: "Иван", age: 18 },
  { name: "Денис", age: 30 },
  { name: "Дима", age: 41 },
  { name: "Даша", age: 15 },
  { name: "Наташа", age: 34 },
  { name: "Рустам", age: 22 },
  { name: "Егор", age: 27 },
  { name: "Лена", age: 55 },
  { name: "Катя", age: 34 },
  { name: "Вася", age: 67 },
  { name: "Женя", age: 13 },
  { name: "Андрей", age: 5 }
];


// const [actualList, setActualList] = useState(list);
    
    
const sortAge = ()=> {
    const newActualList = [...list]
    newActualList.sort((a, b) => {return a.age - b.age})
return newActualList

};

const sortName = ()=> {
  const newActualList = [...list]
  newActualList.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  })

return newActualList

};

console.log(sortAge());
console.log(sortName());