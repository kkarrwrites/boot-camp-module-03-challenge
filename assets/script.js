// Arrays of options for password to be generated from
const lowercaseOptions = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "q",
  "x",
  "y",
  "z",
];
const uppercaseOptions = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numericalOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacterOptions = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Get random element from an array function
function getRandomElement(array) {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

// Generate password function
function generatePassword() {
  // Ask user for password length
  const userChoiceLength = prompt(
    "How long would you like your password to be? (8–128 characters) (Numbers only)"
  );
  if (!userChoiceLength) {
    return;
  }
  // Ask user if password should contain lowercase letters
  const userChoiceLowercase = confirm(
    "Would you like to include lowercase letters? Click OK if yes."
  );
  // Ask user if password should contain uppercase letters
  const userChoiceUppercase = confirm(
    "Would you like to include uppercase letters? Click OK if yes."
  );
  // Ask user if password should contain numbers
  const userChoiceNumbers = confirm(
    "Would you like to include numbers? Click OK if yes."
  );
  // Ask user if password should contain special characters
  const userChoiceSpecialCharacters = confirm(
    "Would you like to include special characters? (Including !@#$%^&*) Click OK if yes."
  );
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
