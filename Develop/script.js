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

//character variables
var number = "0123456789";
var lowerCase = "abcdefghigklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()";

//After you click the "generate password" button, the generatePassword() will start
function generatePassword (){

  //user is presented with a prompt to enter a password length
  var length = prompt("How many characters do you want it to be? Must be more than 8 but less than 128.");
  console.log(length);

  //if user picks an invalid number 
  if (length < 8 || length > 128 || length === null) {
    alert("Must choose a number between 8 and 128!");
    return generatePassword();
  }

  //if password length is valid, then run these prompts
  var getNumber = confirm("Do you want numbers in your password?");
  console.log(getNumber);

  var getLowerCase = confirm("Do you want lowercase characters?");
  console.log(lowerCase);

  var getUpperCase = confirm("Do you want uppercase characters?");
  console.log(getUpperCase);

  var getSpecial = confirm("Do you want special characters?")
  console.log(getSpecial)
  
  //if user doesn't select ANY special characters, start the process over again.
  if (getNumber === false && getLowerCase === false && getUpperCase === false && getSpecial === false) {
    alert("Must choose ONE character type")
  }

  //if user confirms the use of a character, then add it to the possibleCharacters string
  var possibleCharacters = "";

  if (getNumber === true) {
    possibleCharacters += number;
  }

  if (getLowerCase === true) {
    possibleCharacters += lowerCase;
  }

  if (getUpperCase === true) {
    possibleCharacters += upperCase;
  }

  if (getSpecial === true) {
    possibleCharacters += special;
  }

  //calculate the password by creating a string in which the password can go
  var randomPassword = "";

  //for loop that will loop through the possibleCharacters at random at the length in which the user inputed
  for (var i = 0; i < length; i++){
    var randomNumber = Math.floor((Math.random() * possibleCharacters.length) + 1);

    var randomCharacter = possibleCharacters.charAt(randomNumber);

    randomPassword += randomCharacter;
  }

  //return the randomPassword generated in the password box
  console.log(randomPassword);
  return randomPassword;
}