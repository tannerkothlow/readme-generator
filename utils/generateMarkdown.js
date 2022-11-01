// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {
  // let label = "license";
  let message;
  let color;
  switch (license) {
    case "MIT":
      message = "MIT";
      color = "green";
      break;
    case "APACHE 2.0":
      message = "APACHE%202.0";
      color = "orange";
      break;
    case "GPL 3.0":
      message = "GPL%203.0";
      color = "yellow";
      break;
    case "BSD 3.0":
      message = "BSD%203.0";
      color = "blue"; 
  }
  // console.log(`Return value from renderLicenseBadge: ${message ? `license-${message}-${color}` : ""}`);
  return (message ? `license-${message}-${color}` : "")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = licenseProp => {
  // console.log(`Return value for renderLicenseLink: ${licenseProp.length > 1 ? `https://img.shields.io/badge/${licenseProp}` : ""}`)
  return (licenseProp.length > 1 ? `https://img.shields.io/badge/${licenseProp}` : "");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = license => {
  if (license === "None") {
    return `This project is not under any license.`;
  } else {
    return `This project is under the ${license} license.`;
  };
}

// TODO: Create a function to generate markdown for README
generateMarkdown = data => {
  const {userGitHub, userEmail, projName, projDesc, projLicense, projInst, projTest, projRepoUse, projContr} = data;
  const badgeURL = renderLicenseLink(renderLicenseBadge(projLicense));
  const badgeData = badgeURL.length > 1 ? `![license badge](${badgeURL})` : "";
  const licenseContent = renderLicenseSection(projLicense);
  return `# ${projName}

${badgeData}

## Description

${projDesc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation <a name ="installation"></a>

To instal necessary dependencies, run the following command:

  ${projInst}

## Usage <a name ="usage"></a>

${projRepoUse}

## License <a name ="license"></a>

${licenseContent}

## Contributing <a name ="contributing"></a>

${projContr}

## Tests <a name ="tests"></a>

To run tests, enter the following command:

  ${projTest}

## Questions <a name ="questions"></a>

Contact ${userGitHub} at ${userEmail} for any additional information on contributions.

`;
}

const test = 'Test hello'

module.exports = {
  test,
  generateMarkdown,
}
