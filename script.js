// Assignment Code
 // special character array
 var speChars = ["!","@","#","$","%","^","&","*","(",")","`","<",">","?","~","[","]","{","}","|","/","+","-"]; 

// number array
var numbers = ["1","2","3","4","5","6","7","8","9"];

// lowercase array
var lowerCases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// uppercase array 
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

  // yes or no to special characters
  var speChar = confirm("Would you like to use special characters for your password");

  // yes or no to numbers
  var number = confirm("Would you like to use numbers for your password");
 
  // yes or no to lowercase letters
  var lowerCase = confirm("Would you like to use lowercase letters for your password");

  // yes or no to Uppercase letters
  var upperCase = confirm("Would you like to use uppercase letters for your password");
  
  // if yes to special characters add one special character to password then push special character array to chosen characters array
  if (speChar){
    var randomSpeChar = speChars[Math.floor(Math.random()*speChars.length)];
    password+=randomSpeChar;
    pwdChar.push.apply(pwdChar,speChars);
    }

  // if yes to lowercase letters add one lowercase letter to password then push lowercase array to chosen characters array
  if (lowerCase){
    var randomLowerCases = lowerCases[Math.floor(Math.random()*lowerCases.length)];
    password+=randomLowerCases;
    pwdChar.push.apply(pwdChar,lowerCases);
  }

  // if yes to numbers add one number to password then push numbers array to chosen characters array
  if (number){
    var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
    password+=randomNumber;
    pwdChar.push.apply(pwdChar,numbers);
  }

  // if yes to uppercase letters add one uppercase letter to password then push uppercase array to characters array
   if (upperCase){
    var randomUpperCases = upperCases[Math.floor(Math.random()*upperCases.length)];
    password+=randomUpperCases;
    pwdChar.push.apply(pwdChar,upperCases);
  }

  // checks to see if at least one character type has been chosen
   if (pwdChar.length < 1 || pwdChar == undefined){
     alert("Please select at least one character type for password");
     return;
   }
// loop to randomly grab characters from chosen characters array
while (password.length < pwrdLength){
  var randomNum = pwdChar[Math.floor(Math.random()*pwdChar.length)];
  password+=randomNum;
}

return password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
