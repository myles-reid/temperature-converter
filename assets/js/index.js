'use strict';
// sun class - fa-solid fa-sun

const form = document.querySelector('form');
const input = document.querySelector('.input');
const convert = document.querySelector('.convert');
const toFahrenheit = document.querySelector('#f');
const toCelsius = document.querySelector('#c');
const output = document.querySelector('.result');
const toggle = document.querySelector('.button');
const styleSymbol = document.querySelector('.symbol');


/*
  TODO for conversion
VALIDATE
  1) Receive input from radio buttons - .checked = t/f
  2) base on buttons, have the correct formula
  3) take input from field, use the formula
  4) print output in empty <p> with input = output
  5) clear input
*/
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






/*
  TODO for style change

  1)evenListener on click toggle?
*/
