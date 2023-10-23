const reverseString = function(input) {
  // select element to render in //
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

reverseString("abra kadabra alakazam");

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
  // select element to render in //
  let targetedElement = document.getElementById("remove-falsy-original");
  // create clone of original array //
  const clonedArray = inputArr.map( x => x);
  // use map on the clone to avoid mutating original array //
  clonedArray.map( (element, index) => {
    //check if falsy value //
    if (!element) {
      // remove falsy values at its index, insert spliced //
      clonedArray.splice(index, 1, "spliced");
      // render original array //
      targetedElement.innerHTML = myArray;
      // render cloned array //
      targetedElement = document.getElementById("remove-falsy-clone");
      targetedElement.innerHTML = clonedArray;
    }
  });
}

removeFalsyWithoutMutating(myArray);