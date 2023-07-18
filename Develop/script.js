// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Alert to press the button to begin
(alert ("To BEGIN, PRESS 'Generate Password' 😄 \n***Press 🆗 to close this alert***"));


// Function to click the button to begin to process
function generatePassword () {
  // Open Console to see:
  console.log ("You Touched the Button!");


  // 1. Password Length
  var passwordLength = prompt("How many characters do you want in your password?");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert ("Uh, Oh! You must choose an integer/number between 8 and 128. \nSorry, please try again. 😖");
      var passwordLength = prompt ("Please choose a number between 8 and 128.😊");

}

// 2. Variables for lowerCase, upperCase, Numbers, and Special Characters
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[\\]_`{|}~"];
// used to concatonate when selecting these other variables
var choiceCharacters = [];
var password = "";
		

// Selecting the variables- confirming or denying the input using Boolean
if (confirm ("Do you want to include lower case 🔡 letters in your password? \nselect '🆗' for YES or 'CANCEL' for NO")) {
  choiceCharacters = choiceCharacters.concat(lowerCase);
}
if (confirm ("Do you want to include UPPER case 🔠 letters in your password? \nselect '🆗' for YES or 'CANCEL' for NO")) {
  choiceCharacters = choiceCharacters.concat(upperCase);
}
if (confirm ("Do you want to include Numbers 🔢 in your password? \nselect '🆗' for YES or 'CANCEL' for NO")) {
  choiceCharacters = choiceCharacters.concat(numbers);
}
if (confirm ("Do you want to include Special characters 🔣 in your password? \nselect '🆗' for YES or 'CANCEL' for NO")) {
  choiceCharacters = choiceCharacters.concat(specialCharacters);
}


// 3 - validate the input




// 4 generate password based on criteria







  // Display the generated password to the page
  return "final password";
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

