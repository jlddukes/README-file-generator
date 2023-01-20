// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseInput = license;
  const licenseType = "";
  if (licenseInput === "Boost"){
    licenseType = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`} 
    else if (licenseInput === "IBM"){
      licenseType = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`}
      else if (licenseInput === "MIT"){
        licenseType = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`}
        else {
          licenseType = ""}
          return licenseType;
        }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
