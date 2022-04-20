const fs = require('fs');
const inquirer = require('inquirer');

const htmlPage =

    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${userName}</h1>
        <h2>${location}</h2>
        <p>${userBio}</p>
        <a href="${linkedIn}">${linkedIn}</a>
        <br>
        <a href="${gitHub}">${gitHub}</a>
    </body>
    </html>`;


inquirer
    .prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'userBio',
            message: 'Tell me a little about yourself...',
        },
        {
            type: 'input',
            name: 'linkedIn',
            message: 'LinkedIn Profile: ',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'GitHub Profile: ',
        }
    ])
    .then((response) =>
        fs.appendFile('index.html', htmlPage, (error, data) => 
            error ? console.error(error) : console.log(data)
        )
    );
