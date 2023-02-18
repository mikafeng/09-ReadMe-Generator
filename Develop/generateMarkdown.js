// Create a function to generate markdown for README

    
function renderLicenseBadge (licence) {
    let renderLicenseBadge;
    switch(licence){
        case "MIT": 
            renderLicenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "MPL 2.0": 
            renderLicenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        case "GPL 3.0": 
            renderLicenseBadge = "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "APACHE 2.0": 
            renderLicenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        default: "";
    }

    return renderLicenseBadge;
};


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

If there are additional questions, please reach out to:
Email: ${answers.email}
GitHub Repo: ${answers.github}

---

## License
This project utilizes the following license:
${renderLicenseBadge(answers.license)}

`};

module.exports = generateMarkdown;
