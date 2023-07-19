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
// An array that will be used to store characters for generating random strings
  var choiceRandomArr = [];

// Open Console to see:
  console.log ("You Touched the Button!");


//  Password Length
  var passwordLength = prompt("To begin the process, please specify the amount of characters you want in your password?");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert ("Uh, Oh! \nYou must choose an integer/number value between 8 and 128. \nSorry, please try again. 😖");
// This return will display in the box if the user selects character choices outside of the given range
    return "Please start over by choosing a number between 8 and 128.😊";
};


// Prompts for Lowercase, Uppercase, Numbers, Special Characters
  var lower = "Do you want to include lower case 🔡 letters in your password? \nselect 'OK' for YES or 'CANCEL' for NO";
//When the user confirms ok for Lower only, the prompts will continue 
  var lowerOnly = confirm(lower);

  var upper = "Do you want to include UPPER case 🔠 letters in your password? \nselect 'OK' for YES or 'CANCEL' for NO";
//When the user confirms ok for upper only, the prompts will continue  
  var upperOnly = confirm(upper);

  var num = "Do you want to include Numbers 🔢 in your password? \nselect 'OK' for YES or 'CANCEL' for NO";
//When the user confirms ok for numbers only, the prompts will continue 
  var numOnly = confirm(num);

  var special = "Do you want to include Special characters 🔣 in your password? \nselect 'OK' for YES or 'CANCEL' for NO";
//When the user confirms ok for special characters only, the prompts will continue 
  var specialOnly = confirm(special);



//If the user DOES NOT select any of the given variables, then an alert will pop up informing them to restart 
  if (!lowerOnly && !upperOnly && !numOnly && !specialOnly) {
    alert ("Uh, Oh! \nYou must click '🆗' for atleast one of the previous prompts. \nSorry, please try again. 😖");
// This return will display in the box if the user does not select 'ok' for any of the given prompts
    return "Remember to select '🆗' for atleast one of the prompts. 😊";
  }

//The outer IF MUST be false, in order to proceed to these if statements
//There is an outer if statment, so if the user DOES select one of the variables- THE outer if statment will be false then the inner if statements must be true in order to proceed with the prompts.
    
      if (lowerOnly) {
        choiceRandomArr = choiceRandomArr.concat(lowerCase);
      }

      if (upperOnly) {
        choiceRandomArr = choiceRandomArr.concat(upperCase);
      }

      if (numOnly) {
        choiceRandomArr = choiceRandomArr.concat(numbers);
      }

      if (specialOnly) {
        choiceRandomArr = choiceRandomArr.concat(specialCharacters);
      }



// Looping the password
for (var i = 0; i < passwordLength; i++)
    finalPassword += choiceRandomArr[Math.floor(Math.random() * choiceRandomArr.length)];
// This return will display the final password
  return finalPassword;
}

