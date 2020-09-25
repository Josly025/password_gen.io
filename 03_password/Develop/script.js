// Assignment Code
//variable is indexing generate
var generateBtn = document.querySelector("#generate");
console.log("#generate");

var passLength = prompt(
  "New password: Choose a length between 8 and 128 characters. (Note: leave a space between values)"
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

if (charType === "lowercase uppercase" || "uppercase lowercase") {
  finalOptions = optionsLowerUpper;
} else if (charType === "lowercase special" || "special lowercase") {
  finalOptions = optionsLowerSpecial;
} else if (charType === "uppercase special" || "special uppercase") {
  finalOptions = optionsUpperSpecial;
} else if (charType === "lowercase") {
  finalOptions = optionsLower;
} else if (charType === "uppercase") {
  finalOptions = optionsUpper;
} else if (charType === "special") {
  finalOptions = optionsSpecial;
}

console.log(finalOptions); //testing final options

// var finalOptions;

for (i = 0; i < passLength; i++) {
  var passNum = Math.floor(Math.random() * passLength);
  ///////
  console.log(passNum); //ensures we are getting # random numbers
  //////
  passOne += finalOptions.substring(passNum, passNum + 1);
  //substring returns string while indexing between the string
  /////////charAt returns character at the specified index of the string
  // console.log(passOne);
  // alert("Your new password is: " + passOne); //ensures we are getting a string of passLength with random values
}
alert("This is your random password: " + passOne);
// ..addEventListener("click", passOne);

///Didnt get DOM to work
var generate = document.getElementById("generate");
console.log(generate);

generate.children[0].textContent = passOne;
