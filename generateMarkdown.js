// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  const licenseInput = license;
  if (licenseInput === "Boost") {
  return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  }
  else if (licenseInput === "IBM"){
  return `![License](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
  } else if (licenseInput === "MIT"){
  return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else (licenseInput === "")
  return;
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `[License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License
    Licensed under the ${license} license.`;
}
return " ";
}

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
  If you have any questions, please feel free to reach out.
  Email: ${data.email} 
  GitHub: ${data.git}
`;
}

module.exports = generateMarkdown;
