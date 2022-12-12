#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner("Number Guessing Game", "Guess The Number & Earn Points", "green");
})();
let points = 0;
let play = true;
async function guessingNumber() {
    while (play) {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        let response = await inquirer.prompt([
            {
                name: "userNumber",
                type: "number",
                message: chalk.blue("Choose the number between 1 to 3"),
            },
        ]);
        if (response.userNumber === randomNumber) {
            console.log(chalk.greenBright("You Guess The Correct Number"));
            points += 10;
            console.log(chalk.bgGreen(`Your Ponints are ${points}`));
        }
        else {
            console.log(chalk.red("Try Again..!!"));
            play = false;
        }
    }
}
setTimeout(() => {
    guessingNumber();
}, 500);
