import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';

const sleep= ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(resolve,1000);
    })
}

async function welcome() {
    const title=chalkAnimation.rainbow("Welcome To The Word Counter,Lets Start Counting")
    await sleep();
    title.stop();
}

await welcome();
async function repeatAgain() {
    const response= await inquirer.prompt([
        {
           name:"repeat",
           type:"list", 
           choices:["Yes","No"],
           message:"Do You Want To Calculate More Words"
        }
    ]);
    return response.repeat === "Yes" ? true : false;
}

async function wordCounter() {
    let repeat;
do {
    const question = await inquirer.prompt([
        {
            name:"userRes",
            type:"input",
            message:chalk.green("Enter Paragraph that you want to check words and Charactors")
        }
    ])
    let Paragraph=question.userRes.split(" ");
    console.log(`words in paragraph is ${Paragraph.length}`);
    let wordCount= question.userRes.replace(/ /g,"");
    console.log(`Charactors in your paragraph is ${wordCount.length}`);
    repeat= await repeatAgain();
} while (repeat == true);
}
wordCounter();