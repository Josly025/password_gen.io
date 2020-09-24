// Assignment Code
//variable is indexing generate
// var generateBtn = document.querySelector("#generate");
// console.log("#generate");

var passLength = prompt(
  "New password: Choose a length between 8 and 128 characters."
);
var charType = prompt(
  "Character types to include: lowercase, uppercase, and special."
);

console.log("-----");
console.log(passLength); //prompt for password length
console.log(charType); //prompt answer for character type
console.log("------");

var optionsLower = "adcdefghijklmnopqrstuvwxyz";
var optionsUpper = "BCDEFGHIJKLMNOPQRSTUVWXYZ";
var optionsSpecial = "~!@#$%&-+=_";
var passOne = " ";
var finalOptions;

var optionsLowerUpper = "adcdefghijklmnopqrstuvwxyzBCDEFGHIJKLMNOPQRSTUVWXYZ";
var optionsLowerSpecial = "adcdefghijklmnopqrstuvwxyz~!@#$%&-+=_";
var optionsUpperSpecial = "BCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%&-+=_";

if (charType === ("lowercase" + "uppercase")) {
  finalOptions = optionsLowerUpper;
} else if (charType === ("lowercase" + "special")) {
  finalOptions = optionsLowerSpecial;
} else if (charType === ("uppercase" + "special") {
  finalOptions = optionsUpperSpecial;
}

if (charType === "lowercase") {
  finalOptions = optionsLower;
} else if (charType === "uppercase") {
  finalOptions = optionsUpper;
} else if (charType === "special") {
  finalOptions = optionsSpecial;
}

console.log(finalOptions); //testing final options

// var finalOptions;

for (i = 0; i < passLength; i++) {
  var passNum = Math.floor(Math.random() * passLength + 1);
  ///////
  console.log(passNum); //ensures we are getting # random numbers
  //////
  passOne += finalOptions.charAt(passNum);
  /////////charAt returns character at the specified index of the string
  console.log(passOne);
  // alert("Your new password is: " + passOne); //ensures we are getting a string of passLength with random values
}
