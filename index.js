// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
     type: 'input',
     message: 'Github profile link?',
     name: 'Git',
    },
    {
        type: 'input',
        message: 'Email address?',
        name: 'email',
       },
       {
        type: 'input',
        message: 'What is your project called?',
        name: 'title',
       },
       {
        type: 'input',
        message: 'Write a brief description of what your project is about?',
        name: 'description',
       },
       {
        type: 'input',
        message: 'What files do you need to install to make this project function?',
        name: 'installation',
       },
       {
        type: 'input',
        message: 'Write a brief example of how to use the application?',
        name: 'usage',
       },
       {
        type: 'input',
        message: 'Did anyone else contribute to the making of this app?',
        name: 'contributing',
       },
       {
        type: 'input',
        message: 'What evidence do you have of testing your application?',
        name: 'tests',
       },
       {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ["Boost", "IBM", "MIT"],
        default: "IBM",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName.toLowerCase().split('').join('')}.md`, data, (err) => 
    err ? console.log(err):console.log('Your Personalized README file has been generated!!')
)}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
     writeToFile('README.md', generateMarkdown(answers))   
})};


// Function call to initialize app
init();
