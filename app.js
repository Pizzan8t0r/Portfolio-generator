const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
// destructuring assignment assigns elements of an array to variable names in a single expression
// one-lining the previous statements above using destructuring
const [name, github] = profileDataArgs;

// To make this function dynamic, we could add arguments to the function expression, then insert the data into the string using interpolation, 
// which is the substitution of text for a variable we build into the string.
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// create multi-line input for the previous example
// completed a function that receives the command-line arguments and inserts them in a HTML template literal

//console.log(name, github);
//console.log(generatePage(name, github));
fs.writeFile('./index.html', generatePage(name, github), err => {
    // callback function block, a conditional statement checks for the err being returned
    // by the callback function. if err exists, an error message is displayed:
    if (err) throw err;

    console.log('Portfolio complete. Check out the index.html to see the output');
});