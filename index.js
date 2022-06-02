function isPalindrome(word) {
  // reverse the input string
  const reversedWord = word.split('').reverse().join('');
  // compare the reversed string to the input and return true if they are the same and false if they are not
  return word === reversedWord;
}

/* 
  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  My palindrome function should be returning like a boolean either true or false. 
  when the input word is same as the reversed input word it returns true else it returns false
  so I need to return a boolean value. keep in mind that the input word is a string and the reversed word is a string.
  so I need to convert the input word to a string and then compare the reversed word to the input word.
  for example the word  cat is going to be reversed to tac. and it will return false.
  but the word mom is going to be reversed to mom and it will return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;