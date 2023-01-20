// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseInput = license;
  console.log(licenseInput)
  const licenseType = "";
  if (licenseInput === "Boost") {
    licenseType = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } 
  return `(https://www.boost.org/LICENSE_1_0.txt)`
  }

  // console.log(renderLicenseBadge);
  // return "dataSet"

        // }






        // if (licenseInput === "Boost"){
        //   licenseType = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`} 
        //   else if (licenseInput === "IBM"){
        //     licenseType = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`}
        //     else if (licenseInput === "MIT"){
        //       licenseType = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`}
        //       else {
        //         licenseType = ""}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Questions
  If you have any questions, please feel free to reach out at ${data.email} and ${data.link}.
`;
}

module.exports = generateMarkdown;



// if (licenseInput === "Boost"){
//   licenseType = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`} 
//   else if (licenseInput === "IBM"){
//     licenseType = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`}
//     else if (licenseInput === "MIT"){
//       licenseType = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`}
//       else {
//         licenseType = ""}