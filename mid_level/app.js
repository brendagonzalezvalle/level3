// Challenge 1: Sort Array with Preserved Index for -1 Values

// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.

function solution(arr){
    const sorted = arr.filter(item => item !== -1)
    
    sorted.sort((a,b) => {
        return a - b
    })
    // console.log(sorted)

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== -1){
            arr[i] = sorted[0]
            sorted.splice(0, 1)
        }
    }
    return arr
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))



// Challenge 2: **Count Vowels**

// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.

// const input = 'Hello, World!';
// ******************************************
// const input = 'COunting Vowels';

// function countVowels(str){
//     var vowelsCount = 0 //keeps track of how many vowels are in a string
//     const vowels = ["a", "e", "i", "o", "u"] // array that holds all vowles
//     for(let char of str){ 
//         //for..of executes a loop that operates on a sequence of values sourced from an iterable object. allows us to go through every character in out input string.
//         if(vowels.includes(char.toLowerCase())){ // use if statement to cjeck if vowel is included in each charactr in the string
//             vowelsCount++ // if character is a vowel it will increase the count
//         }
//     }
//     return vowelsCount
        
// }
// **********************************************
// const countVowels = input.findIndex(function(word){
//     if(word === (a, e, i , o, u)){
//         return word
//     }
// })
// console.log(countVowels(input)); // Output: 3

