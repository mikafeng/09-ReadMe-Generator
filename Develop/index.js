// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
    //Title: Enter project title:
    // Description: Enter description of project:
    // Installation: Enter installation instructions:
    // Usage: Enter usage information:
    // Contributing: Enter contribution guidelines:
    // Tests: Enter test instructions:
    // Liscence: Choose Liscence: (badge added to top of ReadMe)
    // Questions: Enter GitHub Username and Link:
    //     >How to reach me with additional questions: Enter Email:
    // Table of Contents: Links to corresponding README sections:

const questions = [ {
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
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    }];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();