const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMD = require(`./utils/generateMarkdown.js`);

// array of questions for user
const questions = [
    {
        type: `input`,
        message: `Project Title: `,
        name: `Title`
    },
    {
        type: `input`,
        message: `GitHub Username: `,
        name: `Git`
    },
    {
        type: `input`,
        message: `Email Address: `,
        name: `Email`
    },
    {
        type: `input`,
        message: `Description: `,
        name: `Description`
    },
    {
        type: `input`,
        message: `Keywords: `,
        name: `Keyword`
    },
    {
        type: `input`,
        message: `Contributors: `,
        name: `Contribute`
    },
    {
        type: `input`,
        message: `Usage: `,
        name: `Usage`
    },
    {
        type: `list`,
        message: `License: `,
        name: `License`,
        choices: [
            `MIT`,
            `APACHE 2.0`,
            `GPL 3.0`,
            `BSD 3`,
            `MPL`,
            `Boost`,
            `Unlicense`
        ]
    },
    {
        type: `input`,
        message: `Installation steps: `,
        name: `Install`
    },
    {
        type: `input`,
        message: `Tests: `,
        name: `Test`
    },
    {
        type: `list`,
        message: `Do you have a screenshot of the deployed version? (Must save as ../readme-images/Deployed.png) `,
        name: `Screenshot`,
        choices: [
            `Yes`,
            `No`
        ]
    },
    {
        type: `input`,
        message: `ONLY if you have a recording of the deployed version, enter the link: `,
        name: `Recording`,
        default: `No`,
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            console.log(error);
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
    // generateMD(answers);
    writeToFile(`readme.MD`, generateMD(answers));
    });
}

// function call to initialize program
init();