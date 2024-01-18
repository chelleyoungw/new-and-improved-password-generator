// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var promptLengthComment = "Choose your password length. Input a number between 8 and 128.";
  var length = null;

  do {
    length = prompt(promptLengthComment);
  }
  while (!(length >= 8 && length <= 128)&&(length != null));
  
  var promptLowercaseComment = "Do you want lowercase character types included in the password? yes or no?";
  var lowercaseYes = true;
  var lowercaseNo = false;
  var lowercaseResponse;

  do {
    lowercaseResponse = prompt(promptLowercaseComment);
  }
  while (!(lowercaseResponse == "yes" || lowercaseResponse == "no")&&(lowercaseResponse != null));



  return (length + lowercaseResponse);
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
