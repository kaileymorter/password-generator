// Assignment code here 

var length = prompt("Choose a password length between 8 and 128");
console.log(length);

var specialCharacters = confirm("Do you want to include speial characters?")
console.log(specialCharacters);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
