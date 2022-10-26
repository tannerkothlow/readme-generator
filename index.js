// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    'Test quesiton 1',
    'Test quesiton 2'
];

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
    const {testAnsObj, testAnsObj2} = data
    console.log(`File name: ${fileName}.\n Test 1: ${testAnsObj}.\n Test 2: ${testAnsObj2}`);
}

// TODO: Create a function to initialize app
init = () => {
    inquirer
        .prompt([
            {
                message: `${questions[0]}`,
                name: 'testAnsObj',
            },
            {
                message: `${questions[1]}`,
                name: 'testAnsObj2',
            },
        ])
        .then((response) => {
            writeToFile('README.md', response);
        })
}

// Function call to initialize app
init();
