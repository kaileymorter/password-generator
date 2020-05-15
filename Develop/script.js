
//This assigns the "generate button" in HTML to a variable
var generateBtn = document.querySelector("#generate");
 
//This is a function that will write the password in the password box when the generatePassword() is executed
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This tells js that when the button "generate password" is clicked, start generating the prompts/password
generateBtn.addEventListener("click", writePassword);

//possible password characters
var number = "0123456789";
var lowerCase = "abcdefghigklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter = "!@#$%^&*()";


//After you click the "generate password" button, the generatePassword() will start
function generatePassword (){

  //possible password length
  var length = prompt("How many characters do you want it to be? Must be more than 8 but less than 128.");
  console.log(length);

  //if user picks an invalid number 
  if (length < 8 || length > 128 || length === null) {
    alert("Must choose a number between 8 and 128!");
    return generatePassword();
  }

  //if valid number, run criteria prompts
  if (length = true) {
    number = confirm("Do you want numbers in your password?");
    console.log(number);

    lowerCase = confirm("Do you want lowercase characters?");
    console.log(lowerCase);
  
    upperCase = confirm("Do you want uppercase characters?");
    console.log(upperCase);
  
    specialCharacter = confirm("Do you want special characters?")
    console.log(specialCharacter);
    
    if (number === false && lowerCase === false && upperCase === false && specialCharacter === false) {
      alert("Must choose ONE character type")
      return generatePassword();
    }
  }

  //password array
  var passwordArray = [
    function getNumbers() {
      return number.charAt(Math.floor(Math.random() * Math.floor()))
    }
  ]

}

//create a for loop to generate password based on criteria chosen
//for (var i = 0; i = length; i++){
  //writePassword () = password + [
    //number.charAt(Math.floor(Math.random() * Math.floor(length.value - 1)))];}

