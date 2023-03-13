// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate the password
function generatePassword() {
  // Ask for password length
  var passwordLength = prompt("How many characters do you want your password to contain? (between 8 and 128)");

  // Validate password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be between 8 and 128 characters. Please enter a valid number.");
    return "";
  }

  // Ask which character sets to include
  var useSpecial = confirm("Click OK to confirm including special characters.");
  var useNumeric = confirm("Click OK to confirm including numeric characters.");
  var useLowercase = confirm("Click OK to confirm including lowercase characters.");
  var useUppercase = confirm("Click OK to confirm including uppercase characters.");

  // Validate that at least one character set is included
  if (!useSpecial && !useNumeric && !useLowercase && !useUppercase) {
    alert("You must select at least one character set for your password!");
    return "";
  }

  // Validate that at least one Uppercased character set is included
  if (!useUppercase) {
    alert("Your password must include at least one uppercase character set!");
    return "";
  }

  // Validate that at least one lowercased character set is included
  if (!useLowercase) {
    alert("Your password must include at least one lowercase character set!");
    return "";
  }

  // Validate that at least one numerical set is included
  if (!useNumeric) {
    alert("Your password must include at least one numeric character set!");
    return "";
  }

  // Concatenate the selected character sets
  var passwordChar = [];
  if (useSpecial) {
    passwordChar = passwordChar.concat(specialCharacters);
  }
  if (useNumeric) {
    passwordChar = passwordChar.concat(numericCharacters);
  }
  if (useLowercase) {
    passwordChar = passwordChar.concat(lowerCasedCharacters);
  }
  if (useUppercase) {
    passwordChar = passwordChar.concat(upperCasedCharacters);
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[randomIndex];
  }

  // Return the generated password
  return password;
}

// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
 var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [  'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z',];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z',];