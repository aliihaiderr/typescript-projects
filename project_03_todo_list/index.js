#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import showBanner from "node-banner";
const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
    });
};
async function welcome() {
    const title = chalkAnimation.rainbow("Welcome In ToDo List");
    await sleep();
    title.stop();
}
await welcome();
(async () => {
    await showBanner("Todo List", "Add Your Daily Tasks", "green", "gray");
})();
let todoTask = [];
async function doMore() {
    const moreTasks = await inquirer.prompt([
        {
            name: "ans",
            type: "list",
            choices: ["Yes", "No"],
            message: chalk.blue("Do You Want To Perform More Functionality"),
        },
    ]);
    return moreTasks.ans === "Yes" ? true : false;
}
async function userOptions() {
    let startAgain;
    do {
        const userRes = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                choices: ["Add Task", "Display Task", "Remove Task"],
                message: chalk.green("Choose Option What You Want To Do"),
            },
        ]);
        if (userRes.option === "Add Task") {
            const task = await inquirer.prompt([
                {
                    name: "taskItem",
                    type: "input",
                    message: chalk.blue("Enter your task name"),
                },
            ]);
            todoTask.push(task.taskItem);
            startAgain = await doMore();
        }
        else if (userRes.option === "Display Task") {
            if (todoTask.length == 0) {
                console.log(chalk.red("Your List is Empty"));
            }
            todoTask.forEach((e) => console.log(e));
            startAgain = await doMore();
        }
        else if (userRes.option === "Remove Task") {
            if (todoTask.length) {
                const removeTask = await inquirer.prompt([
                    {
                        name: "remove",
                        type: "input",
                        message: chalk.red("Enter Your Task Name That You Want To Remove"),
                    },
                ]);
                let index = todoTask.indexOf(removeTask.remove);
                if (index !== -1) {
                    todoTask.splice(index, 1);
                }
                startAgain = await doMore();
            }
            else {
                console.log(chalk.red("Your List is Already Empty"));
                startAgain = await doMore();
            }
        }
    } while (startAgain == true);
}
setTimeout(() => {
    userOptions();
}, 500);
