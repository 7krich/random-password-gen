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
 ;
function generatePassword() {
  let randomPassword = ''
  let randomCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910!@#%$%^&*()'
  const windowLength = window.prompt('What is your desired password length?');

  if (Number(windowLength) < 8 || Number(windowLength) > 128) {
    window.alert('You must choose a number between 8 and 128.');
  }

  if (!/^\d+$/.test(windowLength)) {
    window.alert('You typed in a letter. You must choose a number between 8 and 128.');
    return generatePassword(); 
  }
  console.log(/^\d+$/.test(windowLength));

  if (Number(windowLength) < 8 || Number(windowLength) > 128) {
    return generatePassword();
  }

  var promptLowercase = window.confirm('Do you want to include lowercase letters in your password?');

  if (promptLowercase) {
    var promptLowercase = ('lowercase letters, ');
  }

  if (!promptLowercase) {
    var promptLowercase = ('');
    randomCharacters = randomCharacters.replaceAll(/[a-z]/g, '');
  }

  var promptUppercase = window.confirm('Do you want to include uppercase letters in your password?');

  if (promptUppercase) {
    var promptUppercase = ('uppercase letters, ');
  }

  if (!promptUppercase) {
    var promptUppercase = ('');
    randomCharacters = randomCharacters.replaceAll(/[A-Z]/g, '');
  }

  var promptNumber = window.confirm('Do you want to include numbers in your password?');

  if (promptNumber) {
    var promptNumber = ('numbers, ');
  }

  if (!promptNumber) {
    var promptNumber = ('');
    randomCharacters = randomCharacters.replaceAll(/[0-9]/g, '');
  }

  var promptSpecial = window.confirm('Do you want to include special characters in your password?');

  if (promptSpecial) {
    var promptSpecial = ('special characters');
  }

  if (!promptSpecial) {
    var promptSpecial = ('');
    randomCharacters = randomCharacters.replaceAll(/[^A-Za-z0-9]/g, '');
  }
  
  window.alert('Your password will be ' + windowLength + ' characters long. It will also include the following: ' + promptUppercase + promptLowercase + promptNumber + promptSpecial + '.');
  
  
  console.log(randomCharacters);
  console.log(promptLowercase);
  console.log(promptNumber);
  console.log(promptSpecial);
  for (let i = 0; i < Number(windowLength); i ++) {
    randomPassword += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length
    ))
  }
  return randomPassword;
}



