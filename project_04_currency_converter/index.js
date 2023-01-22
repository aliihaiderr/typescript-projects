#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import showBanner from "node-banner";
const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
    });
};
async function welcome() {
    const title = chalkAnimation.rainbow("Welcome To Currency Converter");
    await sleep();
    title.stop();
}
await welcome();
(async () => {
    await showBanner('Currency Converter', 'Convert & Exchange Currency', 'green', 'grey');
})();
const usdpkr = 229.85;
const usdcad = 1.34;
const cadpkr = 171.61;
const cadusd = 0.75;
const pkrusd = 0.0044;
const pkrcad = 0.0058;
async function repeatAgain() {
    const userRes = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            choices: ["Yes", "No"],
            message: chalk.blue("Do You Want To Do More Transaction")
        }
    ]);
    return (userRes.option === "Yes") ? true : false;
}
async function converter() {
    let repeat;
    do {
        const ans = await inquirer.prompt([
            {
                name: "currencyFrom",
                type: "list",
                choices: ["USD", "CAD", "PKR"],
                message: chalk.green("Choose Currency Which You Want To Exchange"),
            },
            {
                name: "currencyTo",
                type: "list",
                choices: ["USD", "CAD", "PKR"],
                message: chalk.green("Choose Currency in Which You Want To Convert"),
            },
            {
                name: "amount",
                type: "number",
                message: chalk.blackBright("Enter Desired Amount Which you Want to Convert")
            }
        ]);
        switch (ans.currencyFrom) {
            case "USD":
                if (ans.currencyTo === "CAD") {
                    let Amount = ans.amount * usdcad;
                    console.log(chalk.magenta(`${Amount} CAD`));
                }
                else if (ans.currencyTo === "PKR") {
                    let Amount = ans.amount * usdpkr;
                    console.log(chalk.magenta(`${Amount} PKR`));
                }
                else {
                    console.log(chalk.magenta(`${ans.amount} USD`));
                }
                break;
            case "CAD":
                if (ans.currencyTo === "USD") {
                    let Amount = ans.amount * cadusd;
                    console.log(chalk.magenta(`${Amount} USD`));
                }
                else if (ans.currencyTo === "PKR") {
                    let Amount = ans.amount * cadpkr;
                    console.log(chalk.magenta(`${Amount} PKR`));
                }
                else {
                    console.log(chalk.magenta(`${ans.amount} CAD`));
                }
                break;
            case "PKR":
                if (ans.currencyTo === "USD") {
                    let Amount = ans.amount * pkrusd;
                    console.log(chalk.magenta(`${Amount} USD`));
                }
                else if (ans.currencyTo === "CAD") {
                    let Amount = ans.amount * pkrcad;
                    console.log(chalk.magenta(`${Amount} CAD`));
                }
                else {
                    console.log(chalk.magenta(`${ans.amount} PKR`));
                }
                break;
        }
        repeat = await repeatAgain();
    } while (repeat == true);
}
setTimeout(() => {
    converter();
}, 300);
