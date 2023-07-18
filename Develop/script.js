// Assignment Code
var generateBtn = document.querySelector("#generate");

// Alert to press the button to begin
(alert ("To BEGIN - PRESS 'Generate Password' 😄                                            ***Press 🆗 to close this alert***"));


// Function to click the button to begin to process
function generatePassword () {
  // Open Console to see:
  console.log ("You Touched the Button!");

  // 1. Password Length
  var passwordLength = prompt("How many characters would you like your password to have?");
    if (passwordLength < 8 || passwordLength > 128) {
        prompt("Uh, Oh! Your password must be between 8 and 128 characters.       Sorry, please try again. 😖");
        return;
        
}

// 2. Variables for upperCase, lowerCase, Numbers, and Special Characters
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[\\]_`{|}~"];
		


//   
//  
// 2 - validate the input
// 3 generate password based on criteria







  // Display the generated password to the page
  return "final password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
