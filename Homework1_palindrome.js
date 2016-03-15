// Create the function to receive a string and check whether it's a palindrome

function checkPalindrome(inputToCheck) {
// Call the function to reverse the input string
  var reversedInput = reverse(inputToCheck);
// Convert both the input and reversed strings to uppercase to negate any case issues
  if (reversedInput.toUpperCase() === inputToCheck.toUpperCase()) {
    return "is a palindrome";
  }
  else {
    return "is not a palindrome";
  }
}

// Reverse a given string
function reverse(s){
    return s.split("").reverse().join("");
}

// Try some sample strings

console.log("Racecar",checkPalindrome("Racecar"));
console.log("Elephant",checkPalindrome("Elephant"));
console.log("Able was I ere I saw Elba",checkPalindrome("Able was I ere I saw Elba"));
console.log("General Assembly",checkPalindrome("General Assembly"));
