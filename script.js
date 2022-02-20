// Assignment code here
//const cardl = document.getElementById('card');
//const uppercaseEl = document.getElementById('uppercase');
//const lowercaseEl = document.getElementById('lowercase');
//const numbersEl = document.getElementById('numbers');
//const symbolsEl = document.getElementById('symbols');
//const generateEl = document.getElementById('generate');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//random character functions
function getRandomLower () {
  var confirmLowercase = window.confirm('Would you like the password to include lowercase letters?');

  if (confirmLowercase) {
    window.alert('Lowercase letters will be included in your random password!');
  return String.fromCharCode(Math.floor(Math.random() * 26 +97));
  } 
  return false;
}

function getRandomUpper () {
  var confirmUppercase = window.confirm('Would you like the password to include uppercase letters?');

  if (confirmUppercase) {
    window.alert('Uppercase letters will be included in your random password!');
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  } 
  return false;
}

function getRandomNumber () {
  var confirmNumbers = window.confirm('Would you like the password to include numbers?');

  if (confirmNumbers) {
    window.alert('Numbers will be included in your random password!');
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  }
  return false;
}

function getRandomSymbol () {
  var confirmSymbols = window.confirm('Would you like the password to include symbols?');

  if (confirmSymbols) {
    window.alert('Symbols will be included in your random password!');
  const symbols = "!@#%$%^&*()"
  return symbols[Math.floor(Math.random() * symbols.length)];
  }
  return false;
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword {
 // const hasLower = lowercaseEl.confirm;
  //const hasUpper = uppercaseEl.confirm;
  //const hasNumber = numbersEl.confirm;
  //const hasSymbol = symbolsEl.confirm;
//});
