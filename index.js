// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please write a short description of your application's functions.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide step-by-step instructions on how to install your application.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how your application may be utilized.",
  },
  {
    type: "input",
    name: "credit",
    message:
      "Please list any collaborators or any credit you would like to provide.",
  },
  {
    type: "input",
    name: "test",
    message:
      "If there are any tests you would recommend be run on your application, please provide them here. ",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license to be added to your README file.",
    choices: ["Mozilla", "Apache", "MIT", "The Unlicense", "NO LICENSE"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw new Error("broken.");
    } else {
      console.log("This works.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  //call writeToFile, using data imported from generateMarkdown
  return inquirer.prompt(questions).then((promptAnswers) => {
    var completedMarkdown = generateMarkdown(promptAnswers);
    writeToFile("./dist/README.md", completedMarkdown);
  });
}

// Function call to initialize app
init();
