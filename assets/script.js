// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get random element from an array function
function getRandomElement(array) {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

// Generate password function
function generatePassword() {
  // Options for password to be generated from
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
  // Where user choices will be stored
  let userChoices = [];
  // Where generated password will be stored
  let userPassword = [];
  // Ask user for password length
  let userChoiceLength = prompt(
    "How long would you like your password to be? (8–128 characters) (Numbers only)"
  );
  // Validate user choice
  userChoiceLength = parseInt(userChoiceLength);
  if (userChoiceLength < 8 || userChoiceLength > 128) {
    return;
  }
  // Ask user if password should contain lowercase letters
  let userChoiceLowercase = confirm(
    "Would you like to include lowercase letters? Click OK if yes."
  );
  // Validate user choice
  if (userChoiceLowercase) {
    userChoices = userChoices.concat(lowercaseOptions);
  }
  // Ask user if password should contain uppercase letters
  let userChoiceUppercase = confirm(
    "Would you like to include uppercase letters? Click OK if yes."
  );
  // Validate user choice
  if (userChoiceUppercase) {
    userChoices = userChoices.concat(uppercaseOptions);
  }
  // Ask user if password should contain numbers
  let userChoiceNumbers = confirm(
    "Would you like to include numbers? Click OK if yes."
  );
  // Validate user choice
  if (userChoiceNumbers) {
    userChoices = userChoices.concat(numericalOptions);
  }
  // Ask user if password should contain special characters
  let userChoiceSpecialCharacters = confirm(
    "Would you like to include special characters? (Including !@#$%^&*) Click OK if yes."
  );
  // Validate user choice
  if (userChoiceSpecialCharacters) {
    userChoices = userChoices.concat(specialCharacterOptions);
  }
  //
  for (let i = 0; i < userChoiceLength; i++) {
    userPassword.push(getRandomElement(userChoices));
  }
  // Return generated password
  return userPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
