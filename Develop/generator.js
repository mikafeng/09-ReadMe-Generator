// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//     return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;



class MarkDown {
    static generateReadme(answers){
        return `
    # ${answers.title}

    ## Table of Content
    - [Project description](#Description)
    - [Usage](#usage)
    - [Contribution](#constribution)
    - [Installation](#installataion)
    - [Test](#test)
    - [Questions](#questions)
    - [License](#license)

    ## Description
    ${answers.description}

    ## Usage
    ${answers.usage}

    ## Contribution
    ${answers.contribution}

    ## Installation
    ${answers.installation}

    ## Test
    ${answers.test}

    ## Questions
    ${answers.email}
    ${answers.github}

    ## License
    ${answers.license}
    
     `
    }
}

module.exports = MarkDown