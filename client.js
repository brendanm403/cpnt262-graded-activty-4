let targetedElement;

const reverseString = function(input) {
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
    // select element to render in //
    targetedElement = document.getElementById("reversed-string");
    // render final value in html //
    targetedElement.innerHTML = finalResult;
    // handles input that is less than 2 characters //
  } else {
    targetedElement.innerHTML = "your word is too short, must be 2+ characters";
  }
}

const myArray = ["hello", 0, 5, 14, "", false, true];

// This is the version that MUTATES THE ORIGINAL ARRAY //
const removeFalsy = function (inputArr) {
  // use map to loop through array and remove falsy values, replace with splice to show it was removed //
  inputArr.map( (element, index, arr) => {
    // statement that checks if the element is falsy //
    if (!element) {
      // use arr argument from map method to splice at the index of the falsy value, insert spliced //
      arr.splice(index, 1, "spliced");
      console.log("mapped array", arr);
      console.log("original array", myArray);
    }
  });
}

// this is the version that DOES NOT MUTATE THE ORIGINAL ARRAY //
const removeFalsyWithoutMutating = function (inputArr) {
  // create clone of original array //
  const clonedArray = inputArr.map( x => x);
  // use map on the clone to avoid mutating original array //
  clonedArray.map( (element, index) => {
    //check if falsy value //
    if (!element) {
      // remove falsy values at its index, insert spliced //
      clonedArray.splice(index, 1, "spliced");
      // select element to render in //
      targetedElement = document.getElementById("remove-falsy-original");
      // render original array //
      targetedElement.innerHTML = myArray;
      // select element to render in //
      targetedElement = document.getElementById("remove-falsy-clone");
      // render cloned array //
      targetedElement.innerHTML = clonedArray;
    }
  });
}

const capitalizeWords = function(input) {
  // define an array that can be accessed within loop to combine strings into one //
  let rejoinedArray = []
  // create an array of the words in the string //
  const wordsArray = input.split(" ");
  // create loop to work with each value //
  for (let i = 0; i <= wordsArray.length - 1; i++) {
    // store word at current loop value in variable //
    let item = wordsArray[i];
    // create an array of the letters that make up that word //
    let letters = item.split("");
    // store first letter of array in variable and change to uppercase //
    let firstChar = letters[0].toUpperCase();
    // splice first letter in array, insert uppercase letter stored in variable //
    letters.splice(0, 1, firstChar);
    // join the letters back together, store in variable //
    let rejoined = letters.join("");
    // push to new array //
    rejoinedArray.push(rejoined);
  }
  // join words into one string //
  let finalResult = rejoinedArray.join(" ");
  targetedElement = document.getElementById("capitalize-words");
  targetedElement.innerHTML = finalResult;
}

reverseString("abra kadabra alakazam");
removeFalsyWithoutMutating(myArray);
capitalizeWords("these were some lower case words");