
// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you
// beforehand. (i.e.,
// [0,1,2,4,5,6,7]
// might become
// [4,5,6,7,0,1,2]
// ).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on
// Arrays to aid in working through this problem.

// var num = [4, 5, 6, 7, 0, 1, 2]
// var target1 = 5
// var target2 = 1

// var output1 = num.indexOf(target1);
// var output2 = num.indexOf(target2);

// console.log(`${target1} is the index of ${output1}`);
// console.log(`${target2} is the index of ${output2}`);

 
const nums=[4,5,6,7,0,1,2]
function findNum(numbers, target){
    let targetFound= -1
    for (let i = 0; i<numbers.length; i++){
        if(target === numbers[i]){
             targetFound=i
        }
    }
    return targetFound
}
console.log(findNum(nums ,6))