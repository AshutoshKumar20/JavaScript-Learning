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

var age = 19;
var isCitizen = false;
var isRegisteredToVote = true;

if (age >= 18) {
    if (isCitizen) {
        if (isRegisteredToVote) {
            console.log("He/She is eligible to vote.")
        } else {
            console.log("They are not eligible to vote due to registration status.")
        }
    } else {
        console.log("They are not eligible to vote due to citizenship status.")
    }
}
else {
    console.log("They are not eligible to vote.");
}

// ** Important question **
// Extend voting eligibility checker with additional conditions ?

// Practice questions on if-else

// Write a program to check if a number is even or odd ?



// Write a program to check if a number is prime?

// Write a program to check if a number is positive, negative or zero ?

// Switch Statement

// Q: Write a JavaScript switch statement that takes a variable areaOfShapes representing
// different shapes, and based on its value, calculates and logs the area of the corresponding
// shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a
// and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the
// side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not
// available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to
// 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.
