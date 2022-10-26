// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = license => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = license => {}

// TODO: Create a function to generate markdown for README
generateMarkdown = data => {
  const {userGitHub, userEmail, projName, projDesc, projLicense, projInst, projTest, projRepoUse, projContr} = data
  return `# ${projName}

## ${projLicense}

## Description

${projDesc}

## Table of Contents

- [installation](#installation)
- [usage](#usage)
- [license](#license)
- [contributing](#contributing)
- [tests](#tests)
- [questions](#questions)

## Installation {#installation}

To instal necessary dependencies, run the following command:

${projInst}

## Usage {#usage}

${projRepoUse}

## License {#license}

This project is under the ${projLicense} license.

## Contributing {#contributing}

${projContr}

## Tests {#tests}

To run tests, enter the following command:

${projTest}

## Questions {#questions}

Contact ${userGitHub} at ${userEmail} for any additional information on contributions.

`;
}

const test = 'Test hello'

module.exports = {
  test,
  generateMarkdown,
}
