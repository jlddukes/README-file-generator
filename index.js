// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generaeMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
     type: 'input',
     message: 'What is your user name?',
     name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
       },
       {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
       },
       {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
       },
       {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
       },
       {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
       },
       {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
       },
       {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
       },
       {
        type: 'list',
        message: 'What is your user name?',
        name: 'username',
        choices: ["A", "B", "C"],
        default: "B"

    },
       

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
