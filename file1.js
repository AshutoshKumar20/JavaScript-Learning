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

var str1 = "1";
var str2 = "2";

if (str1 === str2) {
    console.log("Equal")
} else {
    console.log("Not Equal")
}

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

var age = 18;
var citizen = false;
var eligibleToVote = false;

if (age >= 18 && citizen && eligibleToVote) {
    console.log("They are eligible to vote")
} else if (age >= 18 && citizen) {
    console.log("They are not eligible due to citizenship status")
} else if (age >= 18 && eligibleToVote) {
    console.log("They are not eligible to registration status")
} else {
    console.log("They are not eligible to vote")
}

// 2nd way to solve this question

var age = 18;
var citizen = true;
var eligibleToVote = false;