"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)({ sigint: true });
// Övning 1: Skriver ut ett välkomstmeddelande med förutbestämda för- och efternamn
function runExerciseOne() {
    var firstName = "Kevin";
    var lastName = "Johnson";
    console.log("Hello, ".concat(firstName, " ").concat(lastName, "! I'm glad to inform you that you are the test subject for this assignment."));
}
// Övning 2: Ber användaren mata in för- och efternamn och skriver ut ett hälsningsmeddelande
function runExerciseTwo() {
    var firstName = prompt('Please enter your first name: ');
    var lastName = prompt('Please enter your last name: ');
    console.log("Hello ".concat(firstName, " ").concat(lastName, ", have a nice day!"));
}
// Övning 3: Utför enkla aritmetiska operationer med heltal och skriver ut resultaten
function runExerciseThree() {
    // Del A: Beräknar summan av två heltal
    var num1 = 7; // Första heltalet
    var num2 = 5; // Andra heltalet
    var sum = num1 + num2;
    console.log("The sum of ".concat(num1, " and ").concat(num2, " is: ").concat(sum));
    // Del B: Dividerar ett udda tal med ett jämnt tal
    var evenNumber = 4; // Jämnt tal
    var oddNumber = 9; // Udda tal
    var divisionResult = oddNumber / evenNumber;
    console.log("The result of dividing ".concat(oddNumber, " by ").concat(evenNumber, " is: ").concat(divisionResult));
}
// Övning 4: Beräknar arean av en cirkel och ytan av en sfär med en given radie
function runExerciseFour() {
    var radiusInput = prompt("Enter the value of radius: ");
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
}
// Övning 5: Kontrollerar om två tal är konsekutiva
function runExerciseFive() {
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    if (num2 === num1 + 1) {
        console.log("".concat(num1, " and ").concat(num2, " are consecutive numbers."));
    }
    else {
        console.log("".concat(num1, " and ").concat(num2, " are not consecutive numbers."));
    }
}
// Övning 6: Kontrollerar om ett tal är jämnt eller udda
function runExerciseSix() {
    var number = parseInt(prompt("Enter a positive integer: "));
    if (number % 2 === 0) {
        console.log("".concat(number, " is an even number."));
    }
    else {
        console.log("".concat(number, " is an odd number."));
    }
}
// Övning 7: Kontrollerar om användaren har feber baserat på kroppstemperatur
function runExerciseSeven() {
    var temperatureInput = prompt("Enter your body temperature in degrees Celsius: ");
    var temperature = parseFloat(temperatureInput);
    if (temperature >= 38) {
        console.log("You have a fever. Please take care and consider seeing a doctor.");
    }
    else {
        console.log("You do not have a fever. Your body temperature is within the normal range.");
    }
}
// Övning 8: Visar ett meddelande baserat på användarens betyg
function runExerciseEight() {
    var grade = prompt("Enter your exam grade (A, B, C, D, E): ").toUpperCase();
    switch (grade) {
        case "A":
            console.log("Excellent work! You have achieved the highest grade.");
            break;
        case "B":
            console.log("Great job! You have performed very well.");
            break;
        case "C":
            console.log("Good work! You have passed the exam.");
            break;
        case "D":
            console.log("You have passed the exam, but there is room for improvement.");
            break;
        case "E":
            console.log("You have barely passed the exam. Please work harder next time.");
            break;
        default:
            console.log("Invalid grade entered. Please enter a valid grade (A, B, C, D, E).");
    }
}
// Övning 9: Kontrollerar om en sträng är ett palindrom
function runExerciseNine() {
    var inputString = prompt("Enter a string: ");
    var cleanedString = inputString.replace(/[^a-zA-Z]/g, "").toLowerCase();
    var reversedString = cleanedString.split("").reverse().join("");
    if (cleanedString === reversedString) {
        console.log("\"".concat(inputString, "\" is a palindrome."));
    }
    else {
        console.log("\"".concat(inputString, "\" is not a palindrome."));
    }
}
// Övning 10: Utför olika strängmanipulationer
function runExerciseTen() {
    // A) Ändrar en sträng med hjälp av replace()
    var str1 = "The quick fox Jumped Over the DOG";
    str1 = str1.replace("quick", "brown").replace("Jumped", "jumped").replace("DOG", "lazy dog");
    console.log(str1);
    // B) Jämför två ord som användaren matar in
    var word1 = prompt("Enter the first word: ");
    var word2 = prompt("Enter the second word: ");
    if (word1.toLowerCase() === word2.toLowerCase()) {
        console.log("The two words are the same.");
    }
    else {
        console.log("The two words are different.");
    }
    // C) Ersätter ett ord i en sträng med ett annat ord
    var inputWord = prompt("Enter the word 'Donkey': ");
    console.log(inputWord.replace("Donkey", "Monkey"));
    // D) Ersätter specifika ord i en text med andra ord
    var text = "I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visist Bamse and his team there.";
    text = text.replace(/\bI\b/g, "we").replace(/\bam\b/g, "are");
    console.log(text);
    // E) Ersätter en hel sträng med en annan sträng
    var str2 = "She is the popular singer";
    str2 = "A true friend is the greatest asses of your life";
    console.log(str2);
    // G) Extraherar en del av en sträng baserat på ett specifikt mönster
    var str3 = "My name is Kevin Johnson";
    var name = str3.substring(str3.lastIndexOf(" ") + 1);
    console.log(name);
    // H) Ersätter en delsträng inom en sträng med en annan delsträng
    var str4 = "Arrays are very common in programming, they look something like: [1, 2, 3, 4, 5]";
    str4 = str4.replace("[1, 2, 3, 4, 5]", "[1, 4, 5, 6, 7, 8]");
    console.log(str4);
}
// Övning 11: Utför en aritmetisk operation baserat på användarens inmatning
function runExerciseEleven() {
    var operator = prompt("Enter an arithmetic operator (+, -, *, /): ");
    var operand1 = parseFloat(prompt("Enter the first operand: "));
    var operand2 = parseFloat(prompt("Enter the second operand: "));
    var result;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
        default:
            console.log("Invalid operator.");
            return;
    }
    console.log("Result: ".concat(operand1, " ").concat(operator, " ").concat(operand2, " = ").concat(result));
}
// Övning 12: Skriver ut talen från 1 till ett givet tal i stigande och fallande ordning med olika loopar
function runExerciseTwelve() {
    var number = parseInt(prompt("Enter a number smaller than 100: "));
    console.log("Ascending order (for loop):");
    for (var i_1 = 1; i_1 <= number; i_1++) {
        console.log(i_1);
    }
    console.log("Descending order (while loop):");
    var i = number;
    while (i >= 1) {
        console.log(i);
        i--;
    }
    console.log("Ascending order (do-while loop):");
    var j = 1;
    do {
        console.log(j);
        j++;
    } while (j <= number);
}
// Övning 13: Gissa det hemliga talet
function runExerciseThirteen() {
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    var guess;
    var guessAgain = true;
    while (guessAgain) {
        guess = parseInt(prompt("Guess the secret number (between 1 and 100): "));
        if (guess === secretNumber) {
            console.log("Congratulations! You guessed the secret number.");
            guessAgain = false;
        }
        else {
            console.log("Wrong guess. Try again.");
            var answer = prompt("Do you want to guess again? (yes/no): ");
            guessAgain = answer.toLowerCase() === "yes";
        }
    }
}
// Övning 14: Skriver ut en multiplikationstabell från 1 till 10
function runExerciseFourteen() {
    for (var i = 1; i <= 10; i++) {
        var row = "";
        for (var j = 1; j <= 10; j++) {
            row += "".concat(i * j, "\t");
        }
        console.log(row);
    }
}
// Övning 15: Skriver ut ett stjärnmönster med minskande antal stjärnor på varje rad
function runExerciseFifteen() {
    for (var i = 5; i >= 1; i--) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
// Övning 16: Beräknar summan och medelvärdet av tal som användaren matar in tills de anger 0
function runExerciseSixteen() {
    var sum = 0;
    var count = 0;
    var number;
    do {
        number = parseFloat(prompt("Enter a number (enter 0 to stop): "));
        if (number !== 0) {
            sum += number;
            count++;
        }
    } while (number !== 0);
    var average = count > 0 ? sum / count : 0;
    console.log("Sum: ".concat(sum));
    console.log("Average: ".concat(average));
}
// Övning 17: Skriver ut Fibonacciserien upp till ett visst antal värden
function runExerciseSeventeen() {
    var count = parseInt(prompt("Enter the number of values to display from the Fibonacci series: "));
    var a = 0;
    var b = 1;
    var fibonacciSeries = [a, b];
    for (var i = 2; i < count; i++) {
        var nextNumber = a + b;
        fibonacciSeries.push(nextNumber);
        a = b;
        b = nextNumber;
    }
    console.log("Fibonacci series up to ".concat(count, " values: ").concat(fibonacciSeries.join(", ")));
}
// Array med övningsfunktionerna
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
    runExerciseTen,
    runExerciseEleven,
    runExerciseTwelve,
    runExerciseThirteen,
    runExerciseFourteen,
    runExerciseFifteen,
    runExerciseSixteen,
    runExerciseSeventeen
];
console.clear();
// Funktion för att välja och köra en övning
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
