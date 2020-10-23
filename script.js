// Assignment Code
 // special character array
 var speChars = ["!","@","$","%","^","&","*","(",")"]; 

// number array
var numbers = ["1","2","3","4","5","6","7","8","9","10"];

// lower case array
var lowerCases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// upper case array 
var upperCases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

// prompts questions when generate password is clicked
function generatePassword() {

  
  // password length
  var pwrdLength = prompt("Choose password length, must be between 8 and 128 characters");
  if( pwrdLength < 8 || pwrdLength > 128){
    alert("Password length incorrect");
    return;
  }
  if(isNaN(pwrdLength)){
    alert("Please select a number for password length");
    return;
  }
  
  var pwdChar = [];

  var speChar = confirm("Would you like to use special characters for your password");

  if (speChar){
    pwdChar.push(speChars);
  }

  var number = confirm("Would you like to use numbers for your password");
 
  if (number){
    pwdChar.push(numbers);
  }

  var lowerCase = confirm("Would you like to use lowercase letters for your password");

   if (lowerCase){
    pwdChar.push(lowerCases);
  }

  var upperCase = confirm("Would you like to use uppercase letters for your password");

   if (upperCase){
    pwdChar.push(upperCases);
  }

console.log(pwdChar)

   
var password = "";
// while (password.length < pwrdLength){
   
// }
return password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
