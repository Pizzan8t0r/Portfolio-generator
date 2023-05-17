const inquirer = require('inquirer');

//const fs = require('fs');
//const generatePage = require('./src/page-template.js');
//const pageHTML = generatePage(name, github);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
// destructuring assignment assigns elements of an array to variable names in a single expression
// one-lining the previous statements above using destructuring
//const [name, github] = profileDataArgs;

// To make this function dynamic, we could add arguments to the function expression, then insert the data into the string using interpolation, 
// which is the substitution of text for a variable we build into the string.
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// create multi-line input for the previous example
// completed a function that receives the command-line arguments and inserts them in a HTML template literal

//console.log(name, github);
//console.log(generatePage(name, github));
//fs.writeFile('./index.html', pageHTML, err => {
    // callback function block, a conditional statement checks for the err being returned
    // by the callback function. if err exists, an error message is displayed:
    //if (err) throw err;

    //console.log('Portfolio complete. Check out the index.html to see the output');
//});
const promptUser = () => {
console.log(`
=================
Add a New Project
=================
`);
return inquirer.prompt([
// inquirer's prompt method can receive an array of objects in its argument, known as the question object. 
//the function returns a running of inquire.prompt(), thus returning what it returns, which is a Promise.
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
          },
          {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
  ]);
};//the promise will resolve with a .then method
promptUser().then(answers => console.log(answers));