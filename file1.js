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