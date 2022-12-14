import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";
import showBanner from "node-banner";

//self callable function
(async () => {
  await showBanner(
    "Welcome To ATM",
    "The Premeir Bank Service",
    "blue",
    "magenta"
  );
})();

async function userLogin() {
  const userInput: { userPin: string } = await inquirer.prompt([
    {
      name: "userPin",
      type: "password",
      message: chalk.blue("Enter Your Pin Code"),
    },
  ]);
  //   console.log( "userPin" , userInput.userPin);
  if (userInput.userPin === "1234") {
    atmMachine();
  } else {
    console.log(chalk.red("Invalid Pin Code"));
  }
}
setTimeout(() => {
  userLogin();
}, 500);

//some more featur has functionality of continue and exit
async function moreFeature() {
  const moreOptions: { continue: "Continue" | "Exit" } = await inquirer.prompt([
    {
      name: "continue",
      type: "list",
      choices: ["Continue", "Exit"],
      message: chalk.magenta("Do You Want To Make More Transaction"),
    },
  ]);
  if (moreOptions.continue === "Continue") {
    atmMachine();
  } else {
    console.log(chalk.green("Thank You For Using Our ATM"));
  }
}

// function for randomly generate balance.
const userBalance = {
  amount: Math.floor(Math.random() * 100000 + 1),
  // userPin: userInput.userPin,
};
//   console.log(userBalance);

//main menue function
async function atmMachine() {
  const chooseOptions: {
    options: "Cash Withdrawel" | "Balance Inquiery" | "Fast Cash" | "Exit";
  } = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      choices: ["Cash Withdrawel", "Balance Inquiery", "Fast Cash", "Exit"],
      message: chalk.green("Please Choose The Option"),
    },
  ]);
  //   console.log(chooseOptions);
  if (chooseOptions.options === "Cash Withdrawel") {
    console.log(chalk.green(`Your Current Balance : ${userBalance.amount}$`));
    1;
    const withdrawelAmount: { amount: number } = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: chalk.blue("Enter Your Amount"),
        validate(input) {
          if (input > userBalance.amount) {
            return "Insufficent Balance";
          } else {
            return true;
          }
        },
      },
    ]);
    userBalance.amount -= withdrawelAmount.amount;
    console.log(chalk.green(`Your Remaining Balance : ${userBalance.amount}$`));
    moreFeature();
  } else if (chooseOptions.options === "Balance Inquiery") {
    console.log(chalk.green(`Your Current Balance : ${userBalance.amount}$`));
    moreFeature();
  } else if (chooseOptions.options === "Fast Cash") {
    console.log(chalk.green(`Your Current Balance : ${userBalance.amount}$`));
    const fastCash: { amount: number } = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        message: chalk.blue("Select your desired amount"),
        choices: [500, 1000, 5000, 10000, 20000, 25000],
      },
    ]);
    if (userBalance.amount < fastCash.amount) {
      console.log(chalk.red("Insufficent Balance"));
    } else {
      userBalance.amount -= fastCash.amount;
      console.log(
        chalk.green(`Your Remaining Balance : ${userBalance.amount}$`)
      );
    }
    moreFeature();
  } else {
    console.log(chalk.green("Thank You For Using Our ATM "));
  }
}
