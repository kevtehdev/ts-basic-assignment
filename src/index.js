"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)({ sigint: true });
function runExerciseOne() {
    var firstName = "Kevin";
    var lastName = "Johnson";
    console.log("Hello, ".concat(firstName, " ").concat(lastName, "! I'm glad to inform you that you are the test subject for this assignment."));
}
function runExerciseTwo() {
    var firstName = prompt('Please enter your first name: ');
    var lastName = prompt('Please enter your last name: ');
    console.log("Hello ".concat(firstName, " ").concat(lastName, ", have a nice day!"));
}
function runExerciseThree() {
    // Part A
    var num1 = 7; // First integer
    var num2 = 5; // Second integer
    var sum = num1 + num2;
    console.log("The sum of ".concat(num1, " and ").concat(num2, " is: ").concat(sum));
    // Part B
    var evenNumber = 4; // Even number
    var oddNumber = 9; // Odd number
    var divisionResult = oddNumber / evenNumber;
    console.log("The result of dividing ".concat(oddNumber, " by ").concat(evenNumber, " is: ").concat(divisionResult));
}
runExerciseThree();
var readline = require("readline");
function runExerciseFour() {
    var r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    r1.question("Enter the value of radius: ", function (radiusInput) {
        var radius = parseFloat(radiusInput);
        if (!isNaN(radius) && radius >= 0) {
            var circleArea = Math.PI * Math.pow(radius, 2);
            var sphereArea = 4 * Math.PI * Math.pow(radius, 2);
            console.log("The area of a circle with radius ".concat(radius, " is: ").concat(circleArea));
            console.log("The surface area of a sphere with radius ".concat(radius, " is: ").concat(sphereArea));
        }
        else {
            console.log("Invalid input. Please enter a number greater than or equal to 0.");
        }
        r1.close();
    });
}
runExerciseFour();
function runExerciseFive() { }
function runExerciseSix() { }
function runExerciseSeven() { }
function runExerciseEight() { }
function runExerciseNine() { }
function runExerciseTen() { }
var exercises = [
    runExerciseOne,
    runExerciseTwo,
    runExerciseThree,
    runExerciseFour,
    runExerciseFive,
    runExerciseSix,
    runExerciseSeven,
    runExerciseEight,
    runExerciseNine,
    runExerciseTen
];
console.clear();
function promptAssignment() {
    while (true) {
        var answer = prompt('Enter assignment number (ctrl + C or -1 to exit): ');
        var assignmentChoice = parseInt(answer);
        console.log();
        if (assignmentChoice === -1) {
            console.log(chalk_1.default.green("Exiting..."));
            break;
        }
        else if (assignmentChoice >= 1 && assignmentChoice <= exercises.length) {
            exercises[assignmentChoice - 1]();
        }
        else {
            console.log(chalk_1.default.red("That is not a valid assignment number!"));
        }
        if (assignmentChoice !== -1) {
            console.log();
            prompt(chalk_1.default.dim("Press enter to continue..."));
            console.clear();
        }
    }
}
promptAssignment();
