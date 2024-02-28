'use strict';

// ELEMENT SELECTION
const input = document.querySelector('.user-input')
const toFahrenheit = document.querySelector('.to-fahrenheit');
const outputDiv = document.querySelector('.output');
const output = document.querySelector('.output input');
const convertButton = document.querySelector('.convert-button');


// TEMPERATURE CONVERSION
function celsiusToFahrenheit(celsius) {
  return ((celsius * (9 / 5)) + 32).toFixed(2);
}
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * (5 / 9)).toFixed(2);
} 

const convertTemperature = () => {
  let inputValue = parseFloat(input.value.trim());
  let result = '';
  
  if (!isNaN(inputValue)) {
    if (toFahrenheit.checked) {
      result = fahrenheitToCelsius(inputValue);
    } else {
      result = celsiusToFahrenheit(inputValue)
    }
  }

  else {
    result = 'Enter a valid number';
  }
  
  output.value = result;
}

convertButton.addEventListener('click', convertTemperature);