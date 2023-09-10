// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log('button clicked')
  var characters ='';
  
  var upperChoice = window.confirm('Click OK to include uppercase characters.')
  if (upperChoice) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  var lowerChoice = window.confirm('Click OK to include lowercase characters.')
  if (lowerChoice){
    characters += 'abcdefghijklmnopqrstuvwxyz'
  }
  var numberChoice = window.confirm('Click OK to include numbers.')
  if (numberChoice){
    characters += '0123456789'
  }
  var specialChoice = window.confirm('Click OK to include special characters.')
  if (specialChoice){
    characters += '!#$%&*+,-./:;<=>?@\^_{|}~'
  }
  
  console.log(characters)

  let lengthChoice = window.prompt('How many characters would you like your password to be? Please enter a value between 8 and 128.');
  const low = '8';
  const high = '128';
  while (isNaN(lengthChoice) || lengthChoice < 8 || lengthChoice > 128) {
    lengthChoice = window.prompt('Invalid input. Please enter a value between 8 and 128.');
  } 
    characters.length=lengthChoice;
  
  
const charactersLength = lengthChoice;
let password = '';

for (let i = 0; i < charactersLength; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  password += characters.charAt(randomIndex);
}

console.log(password);
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





