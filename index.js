//Requirements
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");


// layout for readme information
function generateMarkdown(questions) {
    return `
# ${questions.title}

${questions.badge}

<br>

## Table of Contents

* [Credit](#credit)
* [Preview](#preview)
* [Requirements](#requirements)
* [Install Instructions](#install-instructions)
* [Install Steps](#install-steps)
* [Licenses](#licenses)
* [Usage Guidelines](#usage-guidelines)
* [Code Used](#code-used)
* [Test Instructions](#test-instructions)
* [How to Contribute](#how-to-contribute)

![This is a line.](assets/hr.png)

## Credit
${questions.author} 
* ${questions.github}
* ${questions.contact}

![This is a line.](assets/hr.png)

## Preview
${questions.photo}
<br>

![This is a line.](assets/hr.png)

## Requirements
* ${questions.requirements}
<br>

![This is a line.](assets/hr.png)

## Install Instructions
${questions.install}

    ${questions.code}
<br>

![This is a line.](assets/hr.png)

## Install Steps

${questions.install1}

    ${questions.code1}

${questions.install2}

    ${questions.code2}

${questions.install3}

    ${questions.code3}

<br>

![This is a line.](assets/hr.png)

## Licenses
* ${questions.license}
<br>

![This is a line.](assets/hr.png)

## Usage Guidelines
${questions.usage}
<br>

![This is a line.](assets/hr.png)

## Code Used
${questions.technology}
<br>


![This is a line.](assets/hr.png)

## Test Instructions
${questions.test}
<br>

![This is a line.](assets/hr.png)

## How to Contribute
${questions.contribution}

`

}


// function to initialize program
async function init() {
    try {
        // array of questions for user
        const questions = await inquirer.prompt([

            {
                type: "input",
                name: "title",
                message: "What is the title of the project? ",
            },
            {
                type: "input",
                name: "badge",
                message: "Does your project have badges? ",
            },
            {
                type: "input",
                name: "author",
                message: "Who contributed to the project? ",
            },
            {
                type: "input",
                name: "github",
                message: "Link to GitHub: ",
            },
            {
                type: "input",
                name: "contact",
                message: "How to contact: ",
            },
            {
                type: "input",
                name: "photo",
                message: "Project Screenshot: ",
            },
            {
                type: "checkbox",
                name: "requirements",
                message: "Choose requirements: ",
                choices: [
                    "Inquirer",
                    "Util",
                ]
            },
            {
                type: "input",
                name: "install",
                message: "How do I use this app?",
            },
            {
                type: "input",
                name: "code",
                message: "What is the code needed? ",
            },
            {
                type: "input",
                name: "install1",
                message: "What is step 1 of install? ",
            },
            {
                type: "input",
                name: "code1",
                message: "What is the code needed? ",
            },
            {
                type: "input",
                name: "install2",
                message: "What is step 2 of install? ",
            },
            {
                type: "input",
                name: "code2",
                message: "What is the code needed? ",
            },
            {
                type: "input",
                name: "install3",
                message: "What is step 3 of install? ",
            },
            {
                type: "input",
                name: "code3",
                message: "What is the code needed? ",
            },
            {
                type: "checkbox",
                name: "license",
                message: "Choose a license: ",
                choices: [
                    "MIT license",
                    "GLP License",
                    "ISC License",
                ]
            },
            {
                type: "input",
                name: "usage",
                message: "How should this be used? ",
            },
            {
                type: "input",
                name: "technology",
                message: "What Techologies were utilized? ",
            },
            {
                type: "input",
                name: "test",
                message: "Do a test! ",
            },
            {
                type: "input",
                name: "contribution",
                message: "What are the guidelines for contribution? ",
            },

        ]);

        const readMe = await generateMarkdown(questions);
        await fs.writeFileSync("README.md", readMe);
        console.log("You've successfully wrote to README.md");
    } catch (error) {
        console.error(error);

    }

}

// function call to initialize program
init();