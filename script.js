// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let randomPassword = ''
  let randomCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910!@#%$%^&*()'
  const windowLength = window.prompt('What is your desired password length?');

  if (Number(windowLength) < 5 || Number(windowLength) > 128) {
    window.alert('You must choose a number between 5 and 128.');
    generatePassword();
  }

  var promptLowercase = window.confirm('Do you want to include lowercase letters in your password?');

  if (promptLowercase) {
    window.alert('Lowercase letters will be included in your password!');
  }

  if (!promptLowercase) {
    window.alert('Lowercase letters will not be included in your password!');
    randomCharacters = randomCharacters.replaceAll(/[a-z]/g, '');
  }

  var promptUppercase = window.confirm('Do you want to include uppercase letters in your password?');

  if (promptUppercase) {
    window.alert('Uppercase letters will be included in your password!');
  }

  if (!promptUppercase) {
    window.alert('Uppercase letters will not be included in your password!');
    randomCharacters = randomCharacters.replaceAll(/[A-Z]/g, '');
  }

  var promptNumber = window.confirm('Do you want to include numbers in your password?');

  if (promptNumber) {
    window.alert('Numbers letters will be included in your password!');
  }

  if (!promptNumber) {
    window.alert('Numbers will not be included in your password!');
    randomCharacters = randomCharacters.replaceAll(/[0-9]/g, '');
  }

  var promptSpecial = window.confirm('Do you want to include special characters in your password?');

  if (promptSpecial) {
    window.alert('Special characters letters will be included in your password!');
  }

  if (!promptSpecial) {
    window.alert('Special Characters will not be included in your password!');
    randomCharacters = randomCharacters.replaceAll(/[^A-Za-z0-9]/g, '');
  }



  
  console.log(randomCharacters);
  console.log(promptLowercase);
  for (let i = 0; i < Number(windowLength); i ++) {
    randomPassword += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length
    ))
  }
  return randomPassword;
}



