#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count word!!"
    }]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`your Sentence word count is ${words.length}.`);
