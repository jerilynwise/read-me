// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {}

//function that returns the license link
function renderLicenseLink(license) {}

//function that returns the license section of README
function renderLicenseSection(license) {}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}</br>
  
  ## Table of Contents

  * [Installation](#๐ง๐ปโ๐ง-installation)</br>
  * [Usage](#๐จโ๐ป-usage)</br>
  * [License](#๐งพ-license)</br>
  * [Contribuation](#๐ฏโโ๏ธ-contributing)</br>
  * [Tests](#๐-tests)</br>
  * [Questions](#๐คทโโ๏ธ-questions)</br>

  ## ๐ง๐ปโ๐ง Installation
  The following necessary dependancies must be installed to run the application
  ${data.installation}

  ## ๐จโ๐ป Usage
  In order to use this app, ${data.usage}

  ## ๐งพ License
  This project is licensed under the ${data.license} license.</br>
  ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## ๐ฏโโ๏ธ Contributing
  ${data.contributing}

  ## ๐ Tests 
   The following is needed to run the test: ${data.tests}

  ## Github Repository
  [Github Repo](https://github.com/${data.github}/${data.repo})
  
  ## ๐คทโโ๏ธ Questions 
  If you have any further questions please don't heasitate to reach out via Github ${data.github} or directly by email ${data.email}
 

  _This README was generated using Jerilyn Wise's README Generator_ 

`};

module.exports = generateMarkdown
