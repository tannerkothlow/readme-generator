// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {}

// TODO: Create a function to initialize app
init = () => {
    inquirer
        .prompt([
            {
                message: 'Test Question',
                name: 'testAnsObj',
            },
        ])
        .then((response) => {
            console.log(response)
        })
}

// Function call to initialize app
init();
