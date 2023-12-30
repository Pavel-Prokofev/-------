function getProperty(obj, path) {
  // здесь предстоит написать код
  const pathArray = path.split('.');
  console.log(pathArray);

  let res = obj;
  console.log(res);

  for (let i = 0; i < pathArray.length; i += 1) {
    res = res[pathArray[i]];
    //console.log(res);
  };
  // pathArray.forEach(elem => res = res[elem]);

  console.log(obj[pathArray[0]][pathArray[1]][pathArray[2]]);

  return res
}

const object = {
  one: 1,
  two: {
    three: {
      ceyv: 32,
      ceyv1: 64,
      ceyv2: 96
    }
  },
  four: 4
};

//console.log(getProperty(object, 'one')); // 1
console.log(getProperty(object, 'two.three.ceyv2') + '  res'); // 3 
//console.log(getProperty(object, 'two'));
//console.log(getProperty(object, 'four'));





function capitalize(str) {
  // напишите код здесь
  //const strArray = str.split(' ')
  //const newStrArray = 
  return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
  //console.log(newStrArray.join(' '))
}

console.log(capitalize('Надоел, надоел, надоел ты')); // Надоел, Надоел, Надоел Ты
capitalize('Надоели, надоели, надоели вы все'); // Надоели, Надоели, Надоели Вы Все
capitalize('Прошу уходи, уходи'); // Прошу Уходи, Уходи
capitalize('Уходи прошу, уходи совсем'); // Уходи Прошу, Уходи Совсем





const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {
  // напишите код здесь
  //const strArray = str.split('');
  /*console.log(strArray.reduce((res, item)=>{
    if (vowels.includes(item)) {res += 1};
    return res;
  },0))*/
  return str.split('').reduce((res, item) => {
    if (vowels.includes(item)) { res += 1 };
    return res;
  }, 0);

}

findVowels('здравствуй'); // 2
findVowels('привет'); // 2
findVowels('хеллоу'); // 3



function highAndLow(numbers) {

  let numbersArr = numbers.split(' ');

  const numMax = numbersArr.reduce((resMax, number) => Math.max(resMax, number), -Infinity);
  const numMin = numbersArr.reduce((resMin, number) => Math.min(resMin, number), Infinity);

  return `${numMax} min=${numMin}`;
};

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"











function duplicateCount(text) {

  if (text === undefined) {
    return "переданная строка undefined";
  } else {

    let checkedArray = String(text).toLowerCase().split('');
    let counter = 0;
    let testingItem = '';

    while (checkedArray.length > 1) {

      testingItem = checkedArray[0];
      checkedArray.splice(0, 1);

      if (checkedArray.includes(testingItem)) {
        counter += 1;
        checkedArray = checkedArray.filter(item => item != testingItem);
      };

    };

    return counter;
  };
};

console.log(duplicateCount(3546667879)); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbc3de")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2






/*-----------------РАЗОБРАТЬСЯ-----------------*/

/*const [values, setValues] = useState({})

const handleChange = (event) => { 
  const { name, value } = event.target
    setValues((prev) => ({ 
    ...prev, 
    [name]: value
  })) 
} */

/*-------------------------------------------------*/

function validatePIN(pin) {

  let pinArr = pin.split('');
  console.log(pinArr);
  console.log(isNaN('\n'));

  let isOkNum = pinArr.some(item => isNaN(item) || item === ' ' || item === '\n');
  //console.log(isOkNum);

  if ((pin.length === 4 || pin.length === 6)/* && Number.isInteger(Number(pin)) && pin >= 0 */ && !isOkNum) {
    return true;
  } else {
    return false;
  }; // "123 ", "123" , " 123", "'123", "123'" ...
}
// && item === ' '
//console.log(validatePIN("1"));//false, "Wrong output for '1'")
//console.log(validatePIN("12"));//false, "Wrong output for '12'")
console.log(validatePIN("123\n"));//false, "Wrong output for '123'")
console.log(validatePIN("123"));//false, "Wrong output for '123'")
console.log(validatePIN(" 123"));//false, "Wrong output for '123'")
console.log(validatePIN("'123"));//false, "Wrong output for '123'")
console.log(validatePIN("123'"));//false, "Wrong output for '123'")
//console.log(validatePIN("12345"));//false, "Wrong output for '12345'")
//console.log(validatePIN("1234567"));//false, "Wrong output for '1234567'")
//console.log(validatePIN("-123"));//false, "Wrong output for '-1234'")
//console.log(validatePIN("1.23"));//false, "Wrong output for '1.234'")
//console.log(validatePIN("-1.234"));//false, "Wrong output for '-1.234'")
//console.log(validatePIN("00000000"));//false, "Wrong output for '00000000'")
//console.log(validatePIN("a234"));//false, "Wrong output for 'a234'")
//console.log(validatePIN(".234"));//false, "Wrong output for '.234'")
//console.log(validatePIN("1234"));//true, "Wrong output for '1234'");
//console.log(validatePIN("0000"));//true, "Wrong output for '0000'");
//console.log(validatePIN("1111"));//true, "Wrong output for '1111'");
//console.log(validatePIN("123456"));//true, "Wrong output for '123456'");
//console.log(validatePIN("098765"));//true, "Wrong output for '098765'");
//console.log(validatePIN("000000"));//true, "Wrong output for '000000'");
//console.log(validatePIN("123456"));//true, "Wrong output for '123456'");
//console.log(validatePIN("090909"));//true, "Wrong output for '090909'");



import React from 'react';



import PopupWithForm from './PopupWithForm.js';



function AddPlacePopup(props) {



  const [title, setTitle] = React.useState('');
  //  Можно сделать универсальный кастомный хук для контроля любого количества инпутов в любых формах:
  //   export function useForm(inputValues) {
  //     const [values, setValues] = useState(inputValues);

  //     const handleChange = (event) => {
  //       const { value, name } = event.target;
  //       setValues({ ...values, [name]: value });
  //     };
  //     return { values, handleChange, setValues };
  //   }

  // Этот код помещают в отдельный файл useForm.js в папке hooks и импортируют функцию туда, где нужно контролировать инпуты
  // МОЖНО ЛУЧШЕ
  // Отметить как выполненный
  // Михаил Барсегян
  //   ревьюер

  const [img, setImgUrl] = React.useState('');

  const [titleError, setTitleError] = React.useState('');

  const [imgError, setImgError] = React.useState('');

  const [titleValid, setTitleValid] = React.useState(false);

  const [imgValid, setImgValid] = React.useState(false);

  const [isValid, setisValid] = React.useState(false);


  // Если будет интересно, посмотрите, как можно сделать свой хук валидации. 
  // Этот код помещают в отдельный файл useFormAndValidation.js в папке hooks и импортируют функцию туда, где нужно валидировать:

  //   import { useState, useCallback } from 'react';

  //   export function useFormAndValidation() {
  //     const [values, setValues] = useState({});
  //     const [errors, setErrors] = useState({});
  //     const [isValid, setIsValid] = useState(true);

  //     const handleChange = (e) => {
  //       const { name, value } = e.target
  //       setValues({ ...values, [name]: value });
  //       setErrors({ ...errors, [name]: e.target.validationMessage });
  //       setIsValid(e.target.closest('form').checkValidity());
  //     };



  //     const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
  //       setValues(newValues);
  //       setErrors(newErrors);
  //       setIsValid(newIsValid);
  //     }, [setValues, setErrors, setIsValid]);

  //     return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
  //   }


  // одной строчкой запускается вся валидация:

  //   const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation()


  // МОЖНО ЛУЧШЕ
  // Отметить как выполненный
  // Михаил Барсегян
  //   ревьюер

  React.useEffect(() => {

    setTitle('');

    setImgUrl('');

    setTitleError('');

    setImgError('');

    setTitleValid(false);

    setImgValid(false);

    setisValid(false);

  }, [props.isOpen]);



  React.useEffect(() => {

    if (titleValid && imgValid) {

      setisValid(true);

    } else {

      setisValid(false);

    };

  }, [titleValid, imgValid]);



  const checkValid = async (evt, setError, setValid) => {

    setValid(evt.target.validity.valid);

    setError(evt.target.validity.valid ? '' : evt.target.validationMessage);

  };



  const handleChangeTitle = (evt) => {

    setTitle(evt.target.value);

    checkValid(evt, setTitleError, setTitleValid);

  };



  const handleChangeImg = (evt) => {

    setImgUrl(evt.target.value);

    checkValid(evt, setImgError, setImgValid);

  };



  const handleSubmit = () => {

    props.onAddPlace({

      name: title,

      link: img

    });

  };



  return (

    <PopupWithForm name='add' title='Новое место' buttonText={props.buttonText} errorText={props.errorText}

      isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} isValid={isValid}>

      <fieldset className="form__personal-data">

        <input type="text" name="title" id="title-input" className="form__text-box form__text-box_type_title"

          value={title} onChange={handleChangeTitle} placeholder="Название" required minLength="2" maxLength="30" />

        <span className="form__text-box-error title-input-error">{titleError}</span>

        <input type="url" name="img" id="img-src-input" className="form__text-box form__text-box_type_img-src"

          value={img} onChange={handleChangeImg} placeholder="Ссылка на картинку" required />

        <span className="form__text-box-error img-input-error">{imgError}</span>

      </fieldset>

    </PopupWithForm>

  );

}



export default AddPlacePopup;


/*8888888888888888888888888888888888888888888888888*/

import React from 'react';



function PopupWithForm(props) {



  React.useEffect(() => {

    if (props.isOpen) {

      document.addEventListener('click', props.onClose);

      document.addEventListener('keydown', props.onClose);

    };

    return () => {

      document.removeEventListener('click', props.onClose);

      document.removeEventListener('keydown', props.onClose);

    };

  }, [props.isOpen]);



  const hendleSubmit = (evt) => {

    evt.preventDefault();

    props.isValid && props.onSubmit(evt);

  };



  return (

    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>

      <div className="popup__content">

        <button type="button" className="popup__close-button button-opacity"></button>

        <h2 className="title title_popup">{`${props.title}`}</h2>

        <form name={`${props.name}`} className="form" noValidate onSubmit={hendleSubmit}>

          {props.children}

          <button type="submit" className={`form__submit-button ${!props.isValid && 'form__submit-button_disabled'}`}>{`${props.buttonText}`}</button>

        </form>

        <span className="form__text-box-error loading-error">{props.errorText}</span>

      </div>

    </div>

  );

}


// Если будет интересно, можно добавить универсальную обертку Popup для любых попапов, в которой будет обработка оверлея, крестика и Escape.
// import { useEffect } from "react";
// // создаем отдельный компонент `Popup` для обертки любых попапов
// const Popup = ({ isOpen, name, onClose, children }) => {
// // внутри указываем `useEffect` для обработчика `Escape`
//   useEffect(() => {
//     // ограничиваем навешивание обработчика: если не открыт, то не нужно навешивать
//     if (!isOpen) return;
// // объявляем внутри `useEffect` функцию, чтобы она не теряла ссылку при перерисовке компонента
//     const closeByEscape = (e) => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     }

//     document.addEventListener('keydown', closeByEscape)
//     // обязательно удаляем обработчик в `clean-up` функции
//     return () => document.removeEventListener('keydown', closeByEscape)
// // обязательно следим за `isOpen`, чтобы срабатывало только при открытии, а не всегда
// }, [isOpen, onClose])

// // создаем обработчик оверлея
//   const handleOverlay = (e) => {
//     if (e.target === e.currentTarget) {
//         onClose();
//     }
//   }

// // внутри верстка обертки любого попапа с классом `popup` и добавлением `popup_opened`. 
//   return (
//     <div
//       className={`popup ${isOpen ? "popup_opened" : ""} popup_type_${name}`}
//       // добавляем обработчик оверлея
//       onClick={handleOverlay}
//     >
//     {/* добавляем контейнер для контента попапа */}
//       <div className='popup__container'>
//         {/* тут может быть любой контент попапа в `children`: хоть для попапа картинки, хоть для `InfoToolTip`, 
//         хоть для `PopupWithForm` */}
//         {children}
//         {/* кнопка крестика есть у любого попапа */}
//         <button
//           className='popup__close'
//           type='button'
//           onClick={onClose}
//         />
//       </div>
//     </div>
//   );
// };

// export default Popup;


// И теперь можно использовать в любом компоненте, который является попапом: в  ImagePopup,  InfoTooltip и  PopupWithForm.


// function PopupWithForm({isOpen, name, onClose, ...props}) {
//   return (
//     <Popup isOpen={isOpen} name={name} onClose={onClose}>
//         <h2 className='popup__title'>{props.title}</h2>


// И теперь Вам не нужно дублировать верстку обертки попапа, навешивать обработчики оверлея, крестиков и Escape где-то еще. Все будет в одном компоненте Popup. Кстати, можете попробовать сделать компонент Form для любых форм, а так же Input для инпутов.
// МОЖНО ЛУЧШЕ
// Отметить как выполненный
// Михаил Барсегян
// ревьюер

export default PopupWithForm; 