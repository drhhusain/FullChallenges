// Returns every element that exists in any of the two arrays once 

// Input
// [1,2,5] and [2,3,4,6]

// Output
// [1,2,3,4,5,6]


// Sol 1: We can change in either one of the existing array (I chose arrTwo)
// Sol 2: We can make another array and fill it up by unique numbers from both array

const arrOne = [1,2,5];
const arrTwo = [2,3,4,6];

console.log("Array 1 : \n");
console.log(arrOne);
console.log("Array 2 : \n");
console.log(arrTwo);

var index = arrTwo.length;

// using for lopp

for (let i = 0; i < arrOne.length; i++) {
  if (arrTwo.indexOf(arrOne[i]) == -1) {
    arrTwo[index++] = arrOne[i];
  }
}

console.log("Output : \n");
console.log(arrTwo);

// using forEach loop

// arrOne.forEach(currentElement => {
//   if (arrTwo.indexOf(currentElement) == -1 ) {
//     arrTwo[index++] = currentElement;
//   }
// });

// console.log("Output : \n");
// console.log(arrTwo);