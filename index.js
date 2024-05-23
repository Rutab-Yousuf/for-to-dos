#! bin/usr/env node
import inquirer from "inquirer";
let to_dos = [];
let condition = true;
while (condition) {
    let list = await inquirer.prompt([
        { message: "What do you want to add in your todos?",
            type: "string",
            name: "addIn"
        },
        {
            message: "Do you want to add more?",
            type: "confirm",
            name: "addMore",
            default: "false"
        }
    ]);
    condition = list.addMore;
    to_dos.push(list.addIn);
    console.log(`Your Today's Todos include:
${to_dos.join(', ')}`);
    if (list.addMore === false) {
        let dualcheck = await inquirer.prompt({
            type: "confirm",
            message: "Are you sure you don't want to delete any to do from ur list?",
            name: "confirmation",
            default: "true"
        });
        if (dualcheck.confirmation === false) {
            let ask = await inquirer.prompt({
                message: "which one do you want to delete",
                type: "number",
                name: "answer",
            });
            if (ask.answer > 0) {
                to_dos.splice(ask.answer - 1, 1);
                console.log(...to_dos);
            }
        }
    }
}
