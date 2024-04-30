import inquirer from "inquirer";
// 1) computer will generate a rondom number - done
// 2) user input for guessing number - done
// 3)cpmpare user input with computer generated and show result - done
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuesse_number",
        type: "number",
        message: "Enter your guess a number between 1-10:",
    },
]);
if (answers.userGuesse_number === randomNumber) {
    console.log("congratulation your guessed right number");
}
else {
    console.log("you guessed wrong number");
}
