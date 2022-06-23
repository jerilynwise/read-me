// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  *[Installation] (#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contribuation](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
  ## Installation
  The following necessary dependancies must be installed to run the application
  ## Usage
  In order to use this app, ${data.usage}
  ## License
  This project is licensed under the ${data.license} license.
  ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
  ## Contributing
  Contributors: ${data.contributing}
  ## Tests
  The following is needed to run the test: ${data.tests}
  ## Questions
  If you have any questions contact ${data.github}
`};

module.exports = generateMarkdown