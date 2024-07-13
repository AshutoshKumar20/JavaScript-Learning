// Variables

// var firstName = "Ashutosh";
// console.log(firstName);

// Datatypes

// var string = "Ashu";
// console.log(typeof string);

// var number = 12;
// console.log(typeof number);

// var bool = 12;
// if (bool == string) {
//     console.log("It is true")
// } else {
//     console.log("It is a false value")
// }

// var ashu;
// console.log(ashu);

// var fullName = "Ashutosh";
// console.log(typeof +fullName);

// var number = "ashu";
// console.log(typeof Number(number));

// var fullName = "12";
// console.log(parseInt(typeof fullName))

// Concatenation

// var number = "5" + 12;
// console.log(number)

// var fullName = "Ashutosh" + " " + "Kumar";
// console.log(fullName)

// Expressions

// Arithmetic

// var num = "hello" / 2;
// console.log(num);

// var result = 0.1 + 0.2;
// console.log(result);

// var resultToFix = 0.1 + 0.2;
// console.log(result.toFixed(1));

// String Operators

// var str1 = "Hello"
// var str2 = "World"

// var result = str1 + str2
// console.log(result);

// Logical Operators

// var a = 5;
// var b = 10;

// console.log(a < 10 && b > 15)

// var c = 5;
// var d = 10;

// console.log(c > 10 || d > 15)

// var isOpen = true;
// console.log(isOpen)

// Q1. Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license ?

// var age = 18;
// var hasDriverLicense = true;

// console.log(age >= 18 && hasDriverLicense);

// Q2. how would the result change if hasDriverLicense was set to false ?

// var age = 18;
// var hasDriverLicense = false;

// console.log(age >= 18 && hasDriverLicense)
// Conditional Operator

// Q3. Write a program to check if the candidates isEligibleForDrive or not ? Age must be equal to or greater than 18.

// var age = 20;
// console.log(age >= 20 ? "Eligible for drive" : "Not eligible for drive")

// Q4. Let's say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, the student passes; otherwise, they fail. use the conditional(ternary0) operator to determine the result and store it in a variable called result. log the result to the console ?

// var score = 50;
// console.log(score >= 60 ? "Pass" : "Fail");

// console.log("5" - 3);
// console.log(2 < 12 < 5);
// console.log("20" + 10 + 10);

// Loops

// Let's check the temperature

// var temp = 40;
// if (temp > 30) {
//     console.log("let's go on the beach");
// } else {
//     console.log("It's too hot");
// }

// If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.

// If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.

// If the person is 18 or older but not a citizen, display a message saying they are not eligible to vote due to citizenship status.

// If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.

// var age = 19;
// var isCitizen = true;
// var isRegisteredToVote = false;
// var isResident = false;

// if (age >= 18) {
//     if (isCitizen) {
//         if (isResident) {
//             if (isRegisteredToVote) {
//                 console.log("He/She is eligible to vote.")
//             } else {
//                 console.log("They are not eligible to vote due to registration status.")
//             }
//         } else {
//             console.log("They can not give vote as they are not enrolled from their resident side");
//         }
//     } else {
//         console.log("They are not eligible to vote due to citizenship status.")
//     }
// }
// else {
//     console.log("They are not eligible to vote.");
// }

// ** Important question **
// Extend voting eligibility checker with additional conditions ?
// Added Resident or Not

// Practice questions on if-else

// Write a program to check if a number is even or odd ?

// var givenNumber = 49;
// if (givenNumber % 2 == 0) {
//     console.log("Given Number is Even");
// } else {
//     console.log("Given Number is Odd");
// }

// Write a program to check if a number is prime?
// var num = 9;
// var isPrime = true;
// for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log("Number is Prime")
// } else {
//     console.log("Number is not Prime");
// }

// Write a program to check if a number is positive, negative or zero ?

// var num = -10;
// if (num > 0) {
//     console.log("Number is Positive");
// } else if (num == 0) {
//     console.log("Number is Zero");
// } else {
//     console.log("Number is Negative");
// }

// Switch Statement

// Q: Write a JavaScript switch statement that takes a variable areaOfShapes representing
// different shapes, and based on its value, calculates and logs the area of the corresponding
// shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a
// and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the
// side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not
// available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to
// 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

// var shapes = "triangle";
// var a = 5;
// var b = 10;
// var result;

// switch (shapes) {
//     case "square":
//         result = a * a;
//         console.log(result);
//         break;
//     case "rectangle":
//         result = a * b;
//         console.log(result);
//         break;
//     case "circle":
//         var r = 2;
//         result = 3.147 * r * r
//         console.log(result);
//         break;
//     default:
//         console.log("No Shapes Found")
// }

// While loop

//Count 1 to 10
// let i = 1;
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// Do while loop
// let i = 1;
// do {
//     console.log(i);
//     i++
// } while (i <= 10)


// Table of 5 using while loop
// let num = 15;
// let i = 1
// while (i <= 10) {
//     result = num * i
//     console.log("15 * " + i + " =", result)
//     i++
// }

// Table of 5 using do-while loop

// let num = 5;
// let i = 1;
// do {
//     result = num * i
//     console.log(result);
//     i++;
// } while (i <= 10)

// Q. Validating a userInput with a Do-while loop

// let userInput;
// let positiveNumber;
// do {
//     userInput = prompt("Enter a valid positive number: ")
//     positiveNumber = parseFloat(userInput)
// } while (isNaN(positiveNumber) || positiveNumber < 0)
// console.log(positiveNumber);

// Some Practice Questions

// Q1. Calculate the sum of numbers from 1 to 10 using for loop ?
// let num = 0;
// debugger;
// for (let i = 1; i <= 10; i++) {
//     num = num + i;
//     console.log(num)
// }

// Q2. Generating a table of 5 using for loop ?
// var num = 5
// for (var i = 1; i <= 10; i++) {
//     result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
// }

// Q3. Write a JS Program to print the table 0f (8, 9, 12, 13) using for loop ?

// var num = 8
// for (var i = 1; i <= 10; i++) {
//     result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
// }

// var num = 9
// for (var i = 1; i <= 10; i++) {
//     result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
// }

// var num = 12
// for (var i = 1; i <= 10; i++) {
//     result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
// }

// var num = 13
// for (var i = 1; i <= 10; i++) {
//     result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
// }

// Q4. Write a program to check if a year is a leap year, If a year is divisible by 4 and not divisible by 100 or if a year is divisible by 400, then it is a leap yar. Otherwise, it is not a leap year.

// var givenYear = 2024;
// if (givenYear % 4 === 0 && givenYear % 100 != 0 || givenYear % 400 === 0) {
//     console.log("This year is a Leap Year");
// } else {
//     console.log("This year is not a Leap Year");
// }

// Q5. Draw a pattern of asterisks using for loop

// var pattern = "";
// for (var i = 1; i <= 5; i++) {
//     for (var j = i; j <= i; j++) {
//         pattern = pattern + " *"
//         console.log(pattern);
//     }
// }

// Questions on Expressions and Loops

// 1. Write a JavaScript program that displays the largest integer among two integers.

// let num1 = 0;
// let num2 = -15;

// if (num1 > num2) {
//     console.log(num1);
// } else if (num2 > num1) {
//     console.log(num2);
// } else {
//     console.log("Both are equal");
// }

// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

// let result = ""
// let productOfNumbers = function myFunction(a, b, c) {
//     result = a * b * c
//     if (result < 0) {
//         alert("The sign of product of numbers is negative")
//     } else {
//         alert("The sign of product of numbers is positive")
//     }
//     return result
// }
// console.log(productOfNumbers(2, 5, -2))

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// let x = 5;
// let y = 6;
// let z = 7;

// if (x > y && x > z) {
//     if (y > z) {
//         alert(x + " , " + y + " , " + z)
//     } else {
//         alert(x + " , " + z + " , " + y)
//     }
// }
// if (y > x && y > z) {
//     if (x > z) {
//         alert(y + " , " + x + " , " + z)
//     } else {
//         alert(y + " , " + z + " , " + x)
//     }
// }
// if (z > x && z > y) {
//     if (x > y) {
//         alert(z + " , " + x + " , " + y)
//     } else {
//         alert(z + " , " + y + " , " + x)
//     }
// }
// if (x === y === z) {
//     console.log("Numbers are equal")
// }

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

// let a = -5;
// let b = -2;
// let c = -6;
//     console.log("Numbers are equal");
// }

// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even")
//     } else {
//         console.log(i + " is odd");
//     }
// }

// 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	Marks
// Tony 	98
// Steve	77
// Bruce	96
// Scarlet	75
// Clint	68
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

// let studentNames = [["Tony", 98], ["Steve", 87], ["Bruce", 96], ["Scarlet", 85], ["Clint", 68]];
// let average = 0
// for (let i = 0; i < studentNames.length; i++) {
//     average += studentNames[i][1]

// }
// console.log(average / studentNames.length);
// var avg = (average / studentNames.length)
// if (avg < 60) {
//     console.log("F");
// } else if (avg < 70) {
//     console.log("D");
// } else if (avg < 80) {
//     console.log("C");
// }
// else if (avg < 90) {
//     console.log("B");
// }
// else if (avg < 100) {
//     console.log("A");
// }

// 7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " FizzBuzz")
//     } else if (i % 5 === 0) {
//         console.log(i + " Buzz");
//     } else if (i % 3 === 0) {
//         console.log(i + " Fizz");
//     } else {
//         console.log(i);
//     }
// }

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

// function happyNumber(num) {
//     var m, n
//     var c = []

//     while (num !== 1 && c[num] !== true) {
//         c[num] = true;
//         m = 0;


//         // Calculating square  of digits

//         while (num > 0) {
//             n = num % 10;
//             m += n * n
//             num = (num - n) / 10
//         }
//         num = m
//     }
//     return (num === 1)
// }

// // Calculate track and count the number
// var cnt = 5;
// var num = 0;
// var f5 = '';

// while (cnt-- > 0) {
//     while (!happyNumber(num))
//         num++;
//     f5 = f5 + (num + ', ')
//     num++;
// }
// console.log("First 5 Happy Numbers are : " + f5);

// 9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

// function armstrongNumber() {
//     for (i = 1; i < 10; ++i) {
//         for (j = 0; j < 10; ++j) {
//             for (k = 0; k < 10; ++k) {
//                 var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3)

//                 var plusNumber = i * 100 + j * 10 + k;

//                 if (pow === plusNumber) {
//                     console.log(pow);
//                 }
//             }
//         }
//     }

// }
// armstrongNumber()

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * *
// * * *
// * * * *
// * * * * *

// for (i = 1; i <= 5; i++) {
//     var pattern = ""
//     for (j = 1; j <= i; j++) {
//         pattern = pattern + (" *")
//     }
//     console.log(pattern);
// }


// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

// var a = 2154
// var b = 458
// var gcd;

// while (a != b) {
//     if (a > b) {
//         a = a - b
//     } else {
//         b = b - a
//     }
// }
// gcd = a
// console.log(gcd);

// 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.

// var sum = 0;
// for (i = 0; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum = sum + i
//     }

// }
// console.log(sum);

// Functions

// Q1. Write a JS Program that defines a function called greet to welcome individuals to the Coder's Party. The function should take a name parameter and output the message "Hello [name], Welcome to the party". Call the function twice, once with the argument "Vinod" and once with the argument "Ashu".

// function greet(name) {
//     console.log("Hello " + name + ", Welcome to the party.")
// }
// greet("Ashutosh")
// greet("Vinod")

// Q2. Write a function to find the sum of two numbers with parameters.

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(10, 20))

// Q3. Write a javascript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication and division.

// function calculate(a, b, operator) {
//     let result;
//     switch (operator) {
//         case "+":
//             result = a + b;
//             return result
//             break;
//         case "-":
//             result = a - b;
//             return result
//             break;
//         case "/":
//             result = a / b;
//             return result
//             break;
//         case "*":
//             result = a * b;
//             return result
//             break;
//         default:
//             return "No Operators Found"
//     }
// }
// console.log(calculate(6, 3, "."))

// Q2. Write a function to reverse a given string without using built in reverse methods .

// let isReverse = (str) => {
//     let reverse = ""
//     for (let char = 0; char <= str.length - 1; char++) {
//         reverse = reverse + str[char]
//         // console.log(str[char]);
//     }
//     return reverse;
// }
// console.log(isReverse("Ashutosh"))

// let isReverse = (str) => {
//     let reverse = ""
//     for (let char = str.length - 1; char >= 0; char--) {
//         reverse = reverse + str[char]
//         // console.log(str[char]);
//     }
//     return reverse;
// }
// console.log(isReverse("Ashutosh"))

// Q3. Create a function to determine if a given string is palindrome(reads same as forward and backward) or not

// const isPalindrome = (str) => {
//     let reverse = ""
//     for (let char = str.length - 1; char >= 0; char--) {
//         reverse = reverse + str[char]
//         // console.log(str[char]);
//     }
//     // return reverse;
//     if (str === reverse) {
//         return true
//     } else {
//         return false
//     }
//     return reverse
// }
// console.log(isPalindrome("sos"))

// Questions on Functions

// 1. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
// Click me to see the solution

// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// Click me to see the solution


// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// Click me to see the solution

// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
// Click me to see the solution

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
// Click me to see the solution

// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
// Click me to see the solution

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
// Click me to see the solution

// 8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Click me to see the solution

// 9. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// Click me to see the solution

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// Click me to see the solution

// 11. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
// Click me to see the solution.

// 12. Write a JavaScript function that checks whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
// Click me to see the solution.

// 13. Write a JavaScript function to compute the factors of a positive integer.
// Click me to see the solution.

// 14. Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// Click me to see the solution.

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.
// Click me to see the solution.

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
// Click me to see the solution.

// 17. Write a JavaScript function to get the number of occurrences of each letter in a specified string.
// Click me to see the solution.

// 18. Write a function for searching JavaScript arrays with binary searches.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Click me to see the solution.

// 19. Write a JavaScript function that returns array elements larger than a number.
// Click me to see the solution.

// 20. Write a JavaScript function that generates a string ID (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// Click me to see the solution.

// 21. Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[1,2],[1,3],[2,3]]
// Click me to see the solution.

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2
// Click me to see the solution

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
// Click me to see the solution

// 24. Write a JavaScript function to apply the Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
// Click me to see the solution

// 25. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
// Click me to see the solution

// 26. Write a JavaScript function to find the longest substring in a given string without repeating characters.
// Click me to see the solution

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
// Click me to see the solution

// 28. Write a JavaScript program to pass a 'JavaScript function' as a parameter.
// Click me to see the solution

// 29. Write a JavaScript function to get the function name.
// Click me to see the solution