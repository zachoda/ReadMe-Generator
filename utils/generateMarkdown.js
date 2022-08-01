const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return "";
  } else {(license = "GNUAGPLv3")
  return `
  [![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]
  `;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  } else {
    return `
    LICENSE
    =============================
    `
  }
}

// TODO: Create a function to generate markdown for README - three functions above used in generateMarkdown function
// REMEMBER - Markdown is the SYNTAX of README
function generateMarkdown(data) {
  return `# ${data.name} ${renderLicenseBadge(data.license)}
  Table of Contents
Description
Installation
Usage
Test
${renderLicenseLink(data.license)}

  Description: ${data.description}

  Installation: ${data.installation}

  Usage: ${data.usage}

  Test: ${data.test}

  ${renderLicenseSection(data.license)} 

  Questions: 
  Please find a link to my GitHub profile here: github.com/${data.username}

  
  With any questions, please contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
