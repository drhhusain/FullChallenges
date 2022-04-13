// Returns every element that exists in any of the two arrays once 

// Input
// [1,2,5] and [2,3,4,6]

// Output
// [1,2,3,4,5,6]



const arrOne = [1,2,5];
const arrTwo = [2,3,4,6];

console.log("Array 1 : " + arrOne);
console.log("Array 2 : " + arrTwo);
var index = arrTwo.length;

arrOne.forEach(currentElement => {
  if (arrTwo.indexOf(currentElement) == -1 ) {
    arrTwo[index++] = currentElement;
  }
});

console.log("Output : " + arrTwo);