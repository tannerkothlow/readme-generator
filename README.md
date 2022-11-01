# Week 9: README Generator

## Description

For the ninth week in our coding bootcamp, we were tasked with working from starter code to create a script that would generate a README file populated with submitted information. We were to accomplish this using node.js's File System module as well as Inquirer.

This assignment was refreshing after the previous two weeks of Project 1 work. No juggling HTML markup or contending with bulky API calls, just a simple JS script that does something. The first order of business then was importing Inquirer and running through the list of prompts as defined in the project guidelines. The responses were then sent into a generator function that complied each answer into its own variable for ease of access (as opposed to data.projName) and each variable was placed in its respective spot in a markdown template. It's unfortunate that the template is just a big long dumb string with a couple of template literals inserted here and there but supposedly it's the best way of doing it (so far in our course at least).

After tinkering around with the formatting of the generated README, we were also required to include a hyperlinked image of a licensing badge generated via shields.io (credit and hyperlink under "License"). To generate the badge, there's a simple conditional statement that takes in the desired license from the user and returns the badge data URL fomratted as "https://img.shields.io/-license-(type of license)-(color)" which is placed at the top of the README.

Overall this assignment wasn't too much of a brainbuster, but a nice introduciton to node.js and Inquirer.

## Installation

(node.js for VS Code is required)

Clone the repository to your machine. Once completed open the integrated terminal at index.js and enter "npm i" This will instal all the necesary dependancies.

## Usage



![command prompt](./assets/images/command_prompt.png)



![generated markdown](./assets/images/generated_markdown.PNG)



![generated markdown preview](./assets/images/generated_markdown_preview.PNG)

## License 

Standard MIT license, coursework.

Starter code provided by UofM Full Stack Coding Bootcamp.

Licensing badge generated with [shields.io](https://shields.io/)