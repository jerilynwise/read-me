// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents

  -[Installation](#installation)</br>
  -[Usage](#usage)</br>
  -[License](#license)</br>
  -[Contribuation](#contributing)</br>
  -[Tests](#tests)</br>
  -[Questions](#questions)</br>

  ##  💾 Installation
  The following necessary dependancies must be installed to run the application
  ${data.installation}

  ##  💻 Usage
  In order to use this app, ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.</br>
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ##  👪 Contributing
   ${data.contributing}

  ##  ✏️ Tests
  The following is needed to run the test: ${data.tests}

  ## Github Usernme 
  ${data.github}

  ## Github Reponame
  ${data.repo}

  ## ✉️  Contact me directly
  ${data.email}

  _This README was generated with ❤️ by Jerilyn Wise_ 

`};

module.exports = generateMarkdown