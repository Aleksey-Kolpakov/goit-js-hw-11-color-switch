import './styles.css';
import colors from './colors.js'

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeBodyColor = function () {
     timerId = setInterval(() => {
        const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
        refs.body.style.backgroundColor = color;
    }, 1000);
    refs.stratButton.disabled = true;
};
const stopChangeBodyColor = function () { 
     clearTimeout(timerId);
    refs.stratButton.disabled = false;
};
const refs = {
    stratButton:document.querySelector('[data-action="start"]'),
    stopButton :document.querySelector('[data-action="stop"]'),
    body :document.querySelector('body'),
};
let timerId = null;

refs.stratButton.addEventListener('click',changeBodyColor);
refs.stopButton.addEventListener('click', stopChangeBodyColor);