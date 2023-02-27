// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating password object.
var pwdCriteria = {

  //Property for length of password
  pwdLength: 0,

  //array to hold lowercase letters
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //array to hold uppercase letters
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array to hold numbers
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //array to hold special characters
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
     "/", "\\", ":", ";", "<", ">", "=", "?", "@", "~"]//32
}

// Write password to the #password input on index.html
function writePassword() {
  //call generatePassword function
  var password = generatePassword();
  
  //set passwordText = to the textArea on index.html witht he ID of password
  var passwordText = document.querySelector("#password");

  //update the textArea with the new password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate a new password
function generatePassword() {
 
  var result = "";

  //variables to collect input from user prompts
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  //check password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? Must be between 8 and 128 characters.");

    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      if (!isFinite(passwordLength)) {
        alert("Please enter a number");
        return "Your secure password";
      }
      else {
        //check password to be the right length length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {
          showPrompts();

          //keep adding characters 
          while (pwdCriteria.pwdLength < passwordLength) {
            //make sure the user selects at least one of the criteria  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random()* 2)]
                result = result + lc;
                pwdCriteria.pwdLength++;
              }

                          
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random()* 2)]
                result = result + sc;
                pwdCriteria.pwdLength++;
              }

            
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random()* 2)]
                result = result + uc;
                pwdCriteria.pwdLength++;
              }

              
              if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdCriteria.pwdLength++;
              }
            }
          }
        }
      }
    }

    //return the password back to the calling function
    return result;

  
    function showPrompts() {
      lowerCase = confirm("Do you want lower case letters in your password?");
      upperCase = confirm("Do you want upper case letters in your password?");
      numbers = confirm("Do you want numbers in your password?");
      specialChar = confirm("Do you want any special characters in your password?");
    }
  }
}