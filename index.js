const fs = require('fs');
const inquirer = require('inquirer');

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
            message: 'Link to LinkedIn Profile: ',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'GitHub Username: ',
        }
    ])
    .then((response) => {
        const userName = response.userName;
        const location = response.location;
        const userBio = response.userBio;
        const linkedIn = response.linkedIn;
        const gitHub = response.gitHub;

        const htmlPage =
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="style.css">
                <title>Quick Bio</title>
            </head>
            <body>
                <header>
                    <h1>${userName}</h1>
                </header>
                <h2>Location - ${location}</h2>
                <section class="container-section">
                    <div class="p-container">
                        <h4>About Me</h4>
                        <p>${userBio}</p>
                    </div>
                    <div class="links-container">
                        <p>LinkedIn Profile: <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
                        <br>
                        <p>GitHub Username: <a href="https://github.com/${gitHub} target="_blank"">${gitHub}</a></p>
                    </div>
                </section>
            </body>
            </html>`;

        console.log(userName, location, userBio, linkedIn, gitHub)

        fs.writeFile('index.html', htmlPage, (error, data) => 
            error ? console.error(error) : console.log(data)
        )
    })
    