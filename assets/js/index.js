'use strict';

// Connecting all needed elements
const body = document.querySelector('#body');
const form = document.querySelector('form');
const input = document.querySelector('.input');
const convert = document.querySelector('.convert');
const toFahrenheit = document.querySelector('#f');
const toCelsius = document.querySelector('#c');
const output = document.querySelector('.result');
const toggle = document.querySelector('.button');
const styleSymbol = document.querySelector('#symbol');

// Calculations
let inputSymbol = ' ';
let resultSymbol = ' ';
let value = '';

function isNumber(input) {
  if (input.length > 0 && !isNaN(input))
    return true;

  return false;
}

function radioInput() {
  let value = input.value.trim();

  if (toFahrenheit.checked) {
    inputSymbol = '°C';
    resultSymbol = '°F'
    return ((value * 1.8) + 32).toFixed(2);
  }

  if (toCelsius.checked) {
    inputSymbol = '°F';
    resultSymbol = '°C';
    return ((value - 32) * 5 / 9).toFixed(2);
  }
}

convert.addEventListener('click', function() {
  let value = input.value.trim();

  if (isNumber(value)) {
    let result = radioInput();
    output.innerText = `${value}${inputSymbol} = ${result}${resultSymbol}`
    input.value = '';
  } else {
    output.innerText = 'Please, enter a proper temperature.';
  }
});


// Style Change functions
function symbolSwap() {
  if (styleSymbol.classList.contains('fa-moon') && !styleSymbol.classList.contains('fa-sun')) {
    styleSymbol.classList.remove('fa-moon');
    styleSymbol.classList.add('fa-sun');
  } else {
    styleSymbol.classList.remove('fa-sun');
    styleSymbol.classList.add('fa-moon');
  }
}

toggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode'); 
  symbolSwap();
});