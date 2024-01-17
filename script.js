// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("Choose your password length. Input a number between 8 and 128.");
  var smallLength = (length >= 8);
  var largeLength = (length <= 128);
  

  if (smallLength && largeLength) {
    console.log('greater than 8');
  }else {
    console.log('wrong');
  }
  return "hello world";
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
