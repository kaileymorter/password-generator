//When you click the "generate password" button, prompts will begin
var generateBtn = document.querySelector("#generate");
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

//After you click the "generate password" button, the generatePassword() will start with the list of questions.
function generatePassword (){
  var length = prompt("Please enter the number of characters you want for you new password. It must be more than 8 but less than 128.");
  console.log(length);

  var number = confirm("Do you want numbers in your password?");
  console.log(number);

  var lowerCases = confirm("Do you want lowercase characters?");
  console.log(lowerCases);

  var upperCases = confirm("Do you want uppercase characters?");
  console.log(upperCases);

  var special = confirm("Do you want special characters?");
  console.log(special);
}

