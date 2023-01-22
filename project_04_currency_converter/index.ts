import inquirer from "inquirer";
import chalk from "chalk";

const usdpkr= 229.85;
const usdcad= 1.34;
const cadpkr= 171.61;
const cadusd= 0.75;
const pkrusd= 0.0044;
const pkrcad= 0.0058;

async function repeatAgain() {
    const userRes= await inquirer.prompt([
        {
            name:"option",
            type:"list",
            choices:["Yes","No"],
            message:"Do You Want To Do More Transaction"
        }
    ])
    return (userRes.option === "Yes") ? true : false;
}

async function converter() {
    let repeat;
    do {
    const ans: {currencyFrom:string,currencyTo:string,amount:number}= await inquirer.prompt([
        {
            name: "currencyFrom",
            type: "list",
            choices: ["USD", "CAD", "PKR"],
            message: "Choose Currency Which You Want To Exchange",
        },
        {
            name: "currencyTo",
            type: "list",
            choices: ["USD", "CAD", "PKR"],
            message: "Choose Currency in Which You Want To Convert",
        },
        {
            name:"amount",
            type:"number",
            message:"Enter Desired Amount Which you Want to Convert"
        }
    ]);

    switch (ans.currencyFrom) {
        case "USD":
            if (ans.currencyTo === "CAD") {
                let Amount=ans.amount*usdcad;
                console.log(Amount);
            } else if (ans.currencyTo === "PKR") {
                let Amount=ans.amount*usdpkr
                console.log(Amount);
            }else {
                console.log(ans.amount);
            }
            break;
        case "CAD":
            if (ans.currencyTo === "USD") {
                let Amount=ans.amount*cadusd;
                console.log(Amount);
            } else if (ans.currencyTo === "PKR") {
                let Amount=ans.amount*cadpkr
                console.log(Amount);
            }else {
                console.log(ans.amount);
            }
            break;
        case "PKR":
            if (ans.currencyTo === "USD") {
                let Amount=ans.amount*pkrusd;
                console.log(Amount);
            } else if (ans.currencyTo === "CAD") {
                let Amount=ans.amount*pkrcad
                console.log(Amount);
            }else {
                console.log(ans.amount);
            }
            break;
    }
    repeat = await repeatAgain();
} while (repeat == true);
}
converter();