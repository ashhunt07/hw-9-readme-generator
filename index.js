//Requirements
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

// Questions Required: title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// layout for readme information
function writeToFile(questions) {
    return `
    
    # ${response.title}
    
    ### Table of Contents
    





    `

}

// function to initialize program
async function init() {
    try {
        // array of questions for user
        const questions = await inquirer.prompt([

            {
                type: "input",
                name: "badge",
                message: "Insert badge code: ",
            },
            {
                type: "input",
                name: "title",
                message: "What is the title of the project? ",
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
                name: "title",
                message: "Describe your project: ",
            },
            {
                type: "input",
                name: "photo",
                message: "Project Screenshot: ",
            },
            {
                type: "input",
                name: "title",
                message: "What are the installtion instructions? ",
            },
            {
                type: "input",
                name: "code",
                message: "What is the node command? ",
            },
            {
                type: "input",
                name: "title",
                message: "How should this be used? ",
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
                name: "technology",
                message: "What Techologies were utilized? ",
                choices: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "JQuerry",
                    "jSON",
                ]
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

        const readMe = await writeToFile(questions);
        await fs.writeFileSync("README.md", readme);
        console.log("You've successfully wrote to README.md");
    } catch (error) {
        console.error(error);

    }

}

// function call to initialize program
init();