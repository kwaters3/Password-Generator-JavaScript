// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Variables for lowerCase, upperCase, Numbers, and Special Characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!","#","$","%","&","(",")", "*","+","-",".","/", ":",";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];



// Alert to press the button to begin
(alert ("To BEGIN, 👉'Generate Password'👈 \n***Press 🆗 to close this alert*** 😄"));



// Function to click the button to begin to process
function generatePassword () {

// This is used to validate the input for the final password
  var finalPassword = "";
  var choiceRandomArr = [];

// Open Console to see:
  console.log ("You Touched the Button!");


//  Password Length
  var passwordLength = prompt("To begin the process, please specify the amount of characters you want in your password?");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert ("Uh, Oh! \nYou must choose an integer/number value between 8 and 128. \nSorry, please try again. 😖");
    var passwordLength = prompt ("Please choose a number between 8 and 128.😊");
    // return;
};


// Prompts for Lowercase, Uppercase, Numbers, Special Characters
  var lower = "Do you want to include lower case 🔡 letters in your password? \nselect 'OK' for YES or 'CANCEL' for NO";
  lowerOnly = confirm(lower);

  var upper = "Do you want to include UPPER case 🔠 letters in your password? \nselect 'OK' for YES or 'CANCEL' for NO";
  upperOnly = confirm(upper);

  var num = "Do you want to include Numbers 🔢 in your password? \nselect 'OK' for YES or 'CANCEL' for NO";
  numOnly = confirm(num);

  var special = "Do you want to include Special characters 🔣 in your password? \nselect 'OK' for YES or 'CANCEL' for NO";
  specialOnly = confirm(special);

	
  if (!lowerOnly && !upperOnly && !numOnly && !specialOnly) {
    alert ("Uh, Oh! \nYou must click '🆗' for atleast one of the previous prompts. \nSorry, please try again. 😖");
  }






  // Display the generated password to the page
  return finalPassword;
}


