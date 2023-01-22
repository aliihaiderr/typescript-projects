import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

(async () => {
  await showBanner("Todo List", "Make Life Easy","green","gray");
})();

let todoTask:string[]=[];

async function doMore() {
    const moreTasks:{ans:string}=await inquirer.prompt([{
        name:"ans",
        type:"list",
        choices:["Yes","No"],
        message: "Do you want to repeat options"   
    }
    ]);

    return (moreTasks.ans === "Yes") ? true : false;
    
}
async function userOptions() {
    let startAgain;
    do {
    const userRes:{option:string} = await inquirer.prompt([
        {
      name: "option",
      type: "list",
      choices: ["Add Task", "Display Task", "Remove Task"],
      message: "Choose Option What You Want To Do",
        },
  ]);
  if (userRes.option === "Add Task") {
    const task:{taskItem:string}=await inquirer.prompt([{
        name:"taskItem",
        type:"input",
        message:"Enter your task name"
    }])
        todoTask.push(task.taskItem);
        startAgain = await doMore();
  } else if (userRes.option ==="Display Task") {
    if (todoTask.length == 0) {
        console.log(chalk.red("Your List is Empty"));
    }
    todoTask.forEach(e=>console.log(e));
    startAgain = await doMore();
  }
  else if (userRes.option ==="Remove Task") {
    if (todoTask.length == 0) {
        console.log(chalk.red("Your List is Already Empty"));
    }
    const removeTask:{remove:string} =await inquirer.prompt([{
        name:"remove",
        type:"input",
        message:"Enter Your Task Name That You Want To Remove"
    }]);
    let index=todoTask.indexOf(removeTask.remove);
    if (index !== -1) {
        todoTask.splice(index,1);
    } 
    startAgain = await doMore();
  }
} while (startAgain == true);
}

setTimeout(()=>{
    userOptions();
},1000);