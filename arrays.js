"use strict";

// for (var i = 0;i<101; i++){
// 	console.log(i);

// if (i % 3 === 0 && i % 5 === 0){
// 	console.log(i,"fizzbuzz");
// }
// else if (i % 3 === 0 ) {
// 	console.log(i,"fizz");
// }
// else if (i % 5 === 0){
// 	console.log(i,"buzz");
// }}













// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// var result = reverseString('this can be confusing');
// console.log(result);












// function uppercase(str) {
//   str = str.split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   return str.join(' ');
// }
// var result = uppercase("Im not really understanding how to do this!!!");
// console.log(result);











function compression(str) {

    var count = 1;
    var previousChar = str.charAt(0);
    var compressedStr = '';
    var strLength = str.length;
    
    for (var i = 1; i < strLength; i++) {
        var currentChar = str[i];
        if(previousChar === currentChar) {
            count++;
        } else if (count === 1) {
            compressedStr += previousChar;
            previousChar = currentChar;
        } else {
            compressedStr += previousChar + count;
            previousChar = currentChar;
            count = 1;
        }
    }

    if (count === 1) {
        compressedStr += currentChar;
    } else {
        compressedStr += currentChar + count;
    }
    return compressedStr;
}

console.log(compression('aaaaaaabbbbbbcccccccdddddddeeeeeeee'));














// function checkPalindrome(word) {    
//     var x = word.length;
//     for (var i = 0; i < x / 2; i++) {
//         if (word.charAt(i) !== word.charAt(x - 1 - i)) {
//             return false;
//         }
//     }
//     return true;
// }

// if (checkPalindrome("racecar")) {
//     console.log("The word is a palindrome");
// } else {
//     console.log("The word is NOT a palindrome");
// }







// var fibonacciSeries = function (i)
// {
//   if (i===2) 
//   {
//     return [1, 2];
//   } 
//   else 
//   {
//     var s = fibonacciSeries(i - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

//  console.log(fibonacciSeries(10));




 

// prime:
//  for (var i = 2; i < 100; i++){
//     for (var x = 2; x < i; x++){
//         if (i % x === 0) continue prime;
//     }
//     console.log(i);
// }


























