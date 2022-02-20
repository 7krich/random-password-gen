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
  const randomCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910!@#%$%^&*()'
  const windowLength = window.prompt('What is your desired password length?');

  var promptLowercase = window.confirm('Do you want to include lowercase letters in your password?');

  if (promptLowercase) {
    window.alert('Lowercase letters will be included in your password!');
  }

  if (!promptLowercase) {
    randomCharacters.replaceAll(/[a-z]/g, '')
  }
  console.log(randomCharacters);
  console.log(promptLowercase);
  for (let i = 0; i < Number(windowLength); i ++) {
    randomPassword += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length
    ))
  }
  return randomPassword;
}



