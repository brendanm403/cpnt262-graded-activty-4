const reverseString = function(input) {
  let targetedElement = document.getElementById("reversed-string");
  // get each individual letter into an array //
  let lettersArray = input.split("");
  // only accept input longer than 1 character //
  if (lettersArray.length >= 2) {
    // create new empty array to store letters after splice //
    let reversedArray = [];
    // loop through array from index 0 to get all letters //
    for (let i = 0; i <= lettersArray.length - 1; i++) {
      // store removed letter in variable, add string in place to avoid skipping letters //
      let removedLetter = lettersArray.splice(i, 1, "spliced");
      // get removed letter into different array with unshift so letters are reversed //
      reversedArray.unshift(removedLetter[0]);
    }
    // remove commas to its a single string again//
    let finalResult = reversedArray.join("");
    // render final value in html //
    targetedElement.innerHTML = finalResult;
    // handles input that is less than 2 characters //
  } else {
    targetedElement.innerHTML = "your word is too short, must be 2+ characters";
  }
}

reverseString("abra kadbra alakazam");