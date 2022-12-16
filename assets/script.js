"use strict";

// Get references to the #generate element, which is the Generate Password button
const generateBtn = document.querySelector("#generate");

// Get generated password to the #password element, which is the textbox
const passwordText = document.querySelector("#password");

// Get random value from an array with this function
function getRandomValue(array) {
  const randomValue = array[Math.floor(Math.random() * array.length)];
  return randomValue;
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
    "How long would you like your password to be? (8–128 characters) (Digits only)"
  );

  // Validate user choice
  if (
    userChoiceLength < 8 ||
    userChoiceLength > 128 ||
    isNaN(userChoiceLength)
    // !/^[0-9]+$/.test(userChoiceLength)
  ) {
    alert(
      "You must enter a number between 8–128 characters. Please try again."
    );
    textarea.placeholder = "Your Secure Password";
    return;
  }

  // Ask user if password should contain lowercase letters
  let userChoiceLowercase = confirm(
    "Would you like to include lowercase letters? Click OK if yes. Click Cancel if no."
  );

  // If user choses to include lowercase letters, add lowercase letters from the array to the user choices array
  if (userChoiceLowercase) {
    userChoices = userChoices.concat(lowercaseOptions);
  }

  // Ask user if password should contain uppercase letters
  let userChoiceUppercase = confirm(
    "Would you like to include uppercase letters? Click OK if yes. Click Cancel if no."
  );

  // If user choses to include uppercase letters, add uppercase letters from the array to the user choices array
  if (userChoiceUppercase) {
    userChoices = userChoices.concat(uppercaseOptions);
  }

  // Ask user if password should contain numbers
  let userChoiceNumbers = confirm(
    "Would you like to include numbers? Click OK if yes. Click Cancel if no."
  );

  // If user choses to include numbers, add numbers from the array to the user choices array
  if (userChoiceNumbers) {
    userChoices = userChoices.concat(numericalOptions);
  }

  // Ask user if password should contain special characters
  let userChoiceSpecialCharacters = confirm(
    "Would you like to include special characters? (!@#$%^&*) Click OK if yes. Click Cancel if no."
  );

  // If user choses to include special characters, add special characters from the array to the user choices array
  if (userChoiceSpecialCharacters) {
    userChoices = userChoices.concat(specialCharacterOptions);
  }

  // Validate user choices
  if (
    !userChoiceLowercase &&
    !userChoiceUppercase &&
    !userChoiceNumbers &&
    !userChoiceSpecialCharacters
  ) {
    alert(
      "You must choose at least one set of critera for your password, either lowercase letters, uppercase letters, numbers, or special characters. Please try again."
    );
    textarea.placeholder = "Your Secure Password";
    return;
  }

  // Take user's password length choice and loop it over the user choices array
  for (let i = 0; i < userChoiceLength; i++) {
    userPassword.push(getRandomValue(userChoices));
  }

  // Join and return the generated password array
  return userPassword.join("");
}

// Write the password to the #password input
function writePassword() {
  const password = generatePassword();
  // const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to Generate Password button
generateBtn.addEventListener("click", writePassword);
