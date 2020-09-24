// Assignment Code
//variable is indexing generate
var generateBtn = document.querySelector("#generate");
console.log("#generate");

var passLength = prompt(
  "New password: Choose a length between 8 and 128 characters."
);
var charType = prompt(
  "Character types to include: lowercase, uppercase, and special characters."
);
var pass1 = " ";

console.log("-----");
console.log(pass1);
console.log(passLength);
console.log(charType);
console.log("------");

var options = "adcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%&-+=_";
console.log(options);

for (i = 0; i < length.passLength; i++) {
  var passNum = Math.round(Math.random() * passLength + 1);

  var pass1 = options.charAt(passNum);
}

console.log(passNum);

// if (charType === "lowercase") {
//      var passChar = (toLowerCase);
// } if else (charType === "uppercase") {
//     var passChar = (toUpperCase)

// } if else (charType === "special characters"){
//        var passChar = ()
// }

//  var options = "abcdefghijklmnopqrstuvwxyz~!@#$%&-+=_"

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// var specialChar = ["~", ""
// ]

//

// alert("Here is your new password" + ...)
