// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.

// Example 1:

// Input: [1 , 4 , 7]  Output: 4

// Input: [10, 5]  Output: 7.5

// Input: [1.5, 3, 2.5, 1]  Output: 2



const numArray = [1.5, 3, 2.5, 1];

function averageNum(numbers) {
    let numSum = numArray.reduce((pValue, cValue) => pValue + cValue)
    return numSum / numbers.length
    }
console.log(averageNum(numArray));
