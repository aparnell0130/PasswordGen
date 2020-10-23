// Assignment Code
// special character array
var speChar = ["!","@","$","%","^","&","*","(",")"];

// number array
var number = ["1","2","3","4","5","6","7","8","9","10"];

// lower case array
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// upper case array 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var generateBtn = document.querySelector("#generate");


// prompts questions when generate password is clicked
function generatePassword() {
  // password length
  var pwrdLength = prompt("Choose password length, must be between 8 and 128 characters");
  
  var speChar = confirm("Would you like to use special characters for your password")

  var number = confirm("Would you like to use numbers for your password");

  var lowerCase = confirm("Would you like to use lowercase letters for your password");

  var upperCase = confirm("Would you like to use uppercase letters for your password");


   
var password = "";
while (password.length < pwrdLength){

}
return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
