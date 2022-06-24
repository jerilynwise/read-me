// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	{
		type: "input",
		name: "description",
		message:
			"Please describe your project. Some pointers for a quality description: What was the motivation behind the project? What is the purpose of the project? How will your project be used? What have you learned?",
	},
	{
		type: "input",
		name: "installation",
		message:
			"What are the steps required to install your project? If you have a package manager, please list the packages you need to install. If you have a manual installation, please list the steps required to install your project.",
	},
	{
		type: "input",
		name: "usage",
		message: "Provide instructions and usage examples for your project.",
	},
	{
		type: "list",
		name: "license",
		message: "What license will you be using for your project?",
		choices: ["MIT", "APACHE", "BSD", "None"],
	},
	{
		type: "input",
		name: "contributing",
		message:
			"Provide instructions for how others can contribute to your project.",
	},
	{
		type: "input",
		name: "tests",
		message: "Provide instructions for running tests for your project.",
	},
	{
		type: "input",
		name: "github",
		message: "What is your GitHub username?",
	},
	{
		type:'input',
		name: 'repo',
		message: 'What is the name for your GitHub Repo?'
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address?",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	if (!data) {
		console.log("No data provided, please try again!")
	}
	fs.writeFileSync(fileName, data, err => {
		if(err) {
			console.log("Something went wrong creating your file!:", err.message)
		}
	}) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
		const readMePath = path.join(__dirname, './dist', "README.md")
		const markdown = generateMarkdown(response)
        writeToFile(readMePath, markdown)
		console.log("Your REAADME.md is in the dist folder")
    })
}

// Function call to initialize app
init();
