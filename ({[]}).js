var isValid = function (s) {

  if (s.length % 2) { return false }

  const sArr = s.split('');

  let result = false;

  let i = 0

  while (sArr.length > 0) {

      if (sArr[i] === '(' || sArr[i] === '{' || sArr[i] === '[') {
          i = i + 1;
          continue
      } else {
          if (i === 0) {
              result = false;
              break;
          }
          let target;
          switch (sArr[i]) {
              case ')':
                  target = '(';
                  break;
              case '}':
                  target = '{';
                  break;
              case ']':
                  target = '[';
                  break;
          }
          if (sArr[i - 1] === target) {
              sArr.splice(i, 1);
              sArr.splice(i - 1, 1);
              i = i - 1;
              result = true;
              continue;
          } else {
              result = false;
              break;
          }
      }

  };

  return result;
};

console.log(isValid("(){}}{"));
