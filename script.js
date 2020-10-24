// Assignment Code
 // special character array
 var speChars = ["!@#$%^&*()"]; 

// number array
var numbers = ["123456789"];

// lower case array
var lowerCases = ["abcdefghijklmnopqrstuvwxyz"];

// upper case array 
var upperCases = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

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

  // checks password length is within parameters 
  if( pwrdLength < 8 || pwrdLength > 128){
    alert("Password length incorrect");
    return;
  }

  // checks password length is a number
  if(isNaN(pwrdLength)){
    alert("Please select a number for password length");
    return;
  }
  
  // empty array for types of characters chosen
  var pwdChar = [];
  
  // empty password string for generated password
  var password = "";


  var speChar = confirm("Would you like to use special characters for your password");



  var number = confirm("Would you like to use numbers for your password");
 


  var lowerCase = confirm("Would you like to use lowercase letters for your password");



  var upperCase = confirm("Would you like to use uppercase letters for your password");

  if (speChar){

    pwdChar+=speChars;
  }

  if (lowerCase){
    pwdChar+=lowerCases;
  }

  if (number){
    pwdChar+=numbers;
  }

   if (upperCase){
    pwdChar+=upperCases;
  }
   if (pwdChar.length < 1 || pwdChar == undefined){
     alert("Please select at least one character type for password");
     return;
   }
console.log(pwrdLength, pwdChar);

   
while (password.length < pwrdLength){
  var randomNum = pwdChar[Math.floor(Math.random()*pwdChar.length)];
  password+=randomNum;
}

return password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
