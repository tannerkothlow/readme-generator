const inquirer = require('inquirer')
const fs = require('fs')
const genMarkdown = require('./utils/generateMarkdown.js')

//console.log(genMarkdown.test);

const questions = [
    'What is your GitHub username?',
    'What is your email address?',
    "What is your project's name?",
    'Enter a short description for your project:',
    'What kind of license should your project have?', // Inquirer multiple choice
    'What command should be run to instal dependencies?', //Default npm i
    'What command should be run to run tests?', //Default npm test
    'What are the usage instructions for you repo?',
    'How can a user contribute to your repo?'
];

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
    //Breaks response down into all the individual pieces we need for ease of filling the template.
    // const {userGitHub, userEmail, projName, projDesc, projLicense, projInst, projTest, projRepoUse, projContr} = data
    // console.log(`File name: ${fileName}.\n Prop 1: ${userGitHub}\n Prop 2: ${userEmail}\n Prop 3: ${projName}\n License Requested: ${projLicense}`);

    //Data passed into genMarkdown function as the text content for fs.writeFile
    fs.writeFile(fileName, genMarkdown.generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log(`Generating ${fileName}...`);
    })
    
    //console.log(`Should spit out a header title: ${genMarkdown.generateMarkdown(data)}`);
}

init = () => {
    inquirer
        .prompt([
            {
                message: `${questions[0]}`,
                name: 'userGitHub',
            },
            {
                message: `${questions[1]}`,
                name: 'userEmail',
            },
            {
                message: `${questions[2]}`,
                name: 'projName',
            },
            {
                message: `${questions[3]}`,
                name: 'projDesc',
            },
            {
                type: 'list',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'None'],
                message: `${questions[4]}`,
                name: 'projLicense',
            },
            {
                message: `${questions[5]}`,
                name: 'projInst',
                default: 'npm i',
            },
            {
                message: `${questions[6]}`,
                name: 'projTest',
                default: 'npm test',
            },
            {
                message: `${questions[7]}`,
                name: 'projRepoUse',
            },
            {
                message: `${questions[8]}`,
                name: 'projContr',
            }
        ])
        .then((response) => {
            writeToFile('GEN_README.md', response);
        })
}

// Function call to initialize app
init();
