// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// Create a function to generate markdown for README
function generateMarkdown(answers) {
return `

# ${answers.title}

***

## Table of Content
1. [Project description](#Description)
2. [Usage](#Usage)
3. [Contribution](#Contribution)
4. [Installation](#Installataion)
5. [Test](#Test)
6. [Questions](Questions)
7. [License](License)

***

 ## Description

${answers.description}

---

## Usage

${answers.usage}

---

## Contribution

${answers.contribution}

---

## Installation

${answers.installation}

---

## Test

${answers.test}

---

## Questions

${answers.email}
${answers.github}

---

## License

${answers.license}

`};

module.exports = generateMarkdown;
