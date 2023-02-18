// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./develop/generateMarkdown.js');

// QUESTIONS: //

const questions=[
    {
    type: 'input',
    name: 'title',
    message: 'Project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?'
    }, 
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines?'
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'Test Instructions?'
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?'
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'MPL 2.0', 'GPL 3.0', 'Apache'],
    }
];



//function to write README file
function writeToFile(fileName, answers) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), answers);
};

//function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>
    {
        console.log('Writing ReadMe File...'),
        writeToFile("./markdown/ReadMe.md", generateMarkdown(answers))
    })
 }

//function call to initialize app
init();