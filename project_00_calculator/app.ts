#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import showBanner from "node-banner";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let title = chalkAnimation.rainbow("Lets Start Calculating");
  await sleep();
  title.stop();
}
await welcome();

(async () => {
  await showBanner("Calculator", "A CLI based Calculator", "green", "blue");
  console.log(
    chalk.blue(`
    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `)
  );
})();

async function main() {
  const operation = await inquirer.prompt([
    {
      name: "operator",
      type: "list",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      message: chalk.green("Choose Operation Which You Want To Perform"),
    },
    {
      name: "num1",
      type: "number",
      message: chalk.green("Enter Your First Number"),
    },
    {
      name: "num2",
      type: "number",
      message: chalk.green("Enter Your Second Number"),
    },
  ]);
  if (operation.operator === "Addition") {
    console.log(
      chalk.blue(
        `Addition of Enter Numbers is : ${operation.num1 + operation.num2}`
      )
    );
  } else if (operation.operator === "Subtraction") {
    console.log(
      chalk.blue(
        `Subtraction of Enter Numbers is : ${operation.num1 - operation.num2}`
      )
    );
  } else if (operation.operator === "Multiplication") {
    console.log(
      chalk.blue(
        `Multiplication of Enter Numbers is : ${
          operation.num1 * operation.num2
        }`
      )
    );
  } else {
    console.log(
      chalk.blue(
        `Division of Enter Numbers is : ${operation.num1 / operation.num2}`
      )
    );
  }
}

async function doMore() {
  do {
    await main();
    var more = await inquirer.prompt([
      {
        name: "repeat",
        type: "input",
        message: chalk.red("Do You Want To Continue, If Yes Press 'Y' Other Wise 'N'"),
      },
    ]);
  } while (
    more.repeat == "y" ||
    more.repeat == "Y" ||
    more.repeat == "YES" ||
    more.repeat == "yes"
  );
}

async function wait() {
  setTimeout(() => {
    doMore();
  }, 500);
}
wait();
