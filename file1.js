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

// var num1 = 12;
// var num2 = 15;
// var addition = num1 + num2;
// console.log(addition);

// var num1 = 12;
// var num2 = 15;
// var subtraction = num1 - num2;
// console.log(subtraction);

// var num1 = 12;
// var num2 = 15;
// var product = num1 * num2;
// console.log(product);

// var num1 = 12;
// var num2 = 15;
// var division = num1 / num2;
// console.log(division);

// var num1 = 12;
// var num2 = 15;
// var modulus = num1 % num2;
// console.log(modulus);

// Comparison

// ==
// var num1 = 2;
// var num2 = "2";

// if (num1 == num2) {
//     console.log("Equal")
// } else {
//     console.log("Not Equal")
// }

// ===
// var num1 = 2;
// var num2 = "2";

// if (num1 === num2) {
//     console.log("Equal")
// } else {
//     console.log("Not Equal")
// }

// var str1 = "1";
// var str2 = "2";

// if (str1 === str2) {
//     console.log("Equal")
// } else {
//     console.log("Not Equal")
// }

//Logical

// &&(AND OPERATOR)

// var age = 15;
// hadDrivingLicense = true;

// console.log(age >= 18 && hadDrivingLicense);

// ||(OR OPERATOR)

// var num1 = 2;
// var num2 = 4;

// console.log(num1 > 0 || num2 > 0)

// TERNARY(CONDITIONAL) OPERATOR

// var age = 18;
// var eligibleForDrive = true;

// console.log(age >= 18 ? eligibleForDrive : false);

// var age = 18;
// var eligibleForVote = true;

// console.log(age >= 18 ? eligibleForVote : false);

// var score = 74;
// var result = score >= 60 ? "Student Passed the exam" : "Student Failed";

// console.log(result);

// Expressions

// If-Else Statement
// var temperature = 25;
// if (temperature > 30) {
//     console.log("Let's go to beach")
// } else {
//     console.log("Watch TV at Home")
// }

// Else-If Clause
// var temperature = 40;
// if (temperature > 30) {
//     console.log("Let's go to beach")
// }
// else if (temperature >= 20 && temperature <= 30) {
//     console.log("Watch TV at Home")
// } else {
//     console.log("It's cold here")
// }

// 1st way to solve this question

// var age = 18;
// var citizen = false;
// var eligibleToVote = false;

// if (age >= 18 && citizen && eligibleToVote) {
//     console.log("They are eligible to vote")
// } else if (age >= 18 && citizen) {
//     console.log("They are not eligible due to citizenship status")
// } else if (age >= 18 && eligibleToVote) {
//     console.log("They are not eligible to registration status")
// } else {
//     console.log("They are not eligible to vote")
// }

// 2nd way to solve this question

// var age = 19;
// var citizen = true;
// var eligibleToVote = false;

// if (age >= 18) {
//     if (citizen) {
//         if (eligibleToVote) {
//             console.log("You are eligible to vote")
//         } else {
//             console.log("You are not eligible to registration status")
//         }
//     } else {
//         console.log("You are not eligible to vote due to citizenship status")
//     }
// } else {
//     console.log("You are not eligible to vote (Younger)")
// }

// To check the given number is even or odd

// var num = 9;

// if (num % 2 === 0) {
//     console.log("Given Number is even")
// } else {
//     console.log("Given Number is odd")
// }

// To check the given number is positive, negative or zero

// var num = 10;

// if (num === 0) {
//     console.log("Number is zero")
// } else if (num > 0) {
//     console.log("Number is positive")
// } else {
//     console.log("Number is negative")
// }

// Switch statement

// var day = "Sunday";

// switch (day) {
//     case "Monday":
//         console.log("It's Monday")
//         break;
//     case "Wednesday":
//         console.log("It's Wednesday")
//         break;
//     case "Sunday":
//         console.log("It's Sunday")
//         break;
//     default:
//         console.log("It doesn't match with the mentioned days")
// }

// Practice Restart

// Another Question on switch

// var areaOfShapes = "triangle";
// var a = 5;
// var b = 6;

// switch (areaOfShapes) {
//     case "square":
//         var result = a * a;
//         console.log(result);
//         break;

//     case "rectangle":
//         var result = a * b;
//         console.log(result);
//         break;

//     case "circle":
//         var r = 2
//         var result = 3.142 * (r * r);
//         console.log(result);
//         break;

//     default:
//         console.log("No Matches Found");
// }

// While Loop

// var i = 0
// while (i <= 20) {
//     console.log(i)
//     i++;
// }

// var num = 1;
// while (num <= 10) {
//     console.log("5*" + num + " =", 5 * num)
//     num++
// }

// Do while loop

// var num = 0;
// do {
//     console.log(num);
//     num++
// } while (num <= 10)

// For loop

// for (let i = 0; i <= 20; i++) {
//     console.log(i)
// }