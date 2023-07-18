// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for upperCase, lowerCase, Numbers, and Special Characters
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var specialCharacters = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

// Function to click the button to begin to process
function generatePassword () {
  // Open Console to see:
  console.log ("You Touched the Button!");

  


  alert ("To Begin, Press OK");
  alert ("Password must be between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
		
	}


//   1 - prompt the user for the password criteria
//   A - password length 8 <128
//  B- lowercase, uppercase, numbers, special characters
// 2 - validate the input
// 3 generate password based on criteria







  // Display the generated password to the page
  return "Final Password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
