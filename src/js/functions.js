import { bodyRef } from './ref';
import { colors } from './template';
import { butOn } from './ref';




export const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


export const choseColor = function (array) {
  let number = randomIntegerFromInterval(0, array.length - 1)
  for (let i = 0; i < array.length; i += 1) {
    const randomColor = array[number];
    bodyRef.style.backgroundColor = randomColor;
    butOn.style.backgroundColor = randomColor;
  }
};



let timerId = null;


export const onChange = function () {
  timerId = setInterval(() => { choseColor(colors) }, 1000)
};


export const onStop = function () {
  clearInterval(timerId)
};

