//Requirements
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");


// Questions Needed: title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// array of questions for user
const questions = [

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
        name: "contribution",
        message: "What are the guidelines for contribution? ",
    },

];



// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();