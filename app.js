const profileDataArgs = process.argv.slice(2, process.argv.length);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
// destructuring assignment assigns elements of an array to variable names in a single expression
// one-lining the previous statements above using destructuring
const [name, github] = profileDataArgs;

// To make this function dynamic, we could add arguments to the function expression, then insert the data into the string using interpolation, 
// which is the substitution of text for a variable we build into the string.
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// create multi-line input for the previous example
const generatePage = (userName, githubName) => {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> html Portfolio thing </title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
    
    `;
};

console.log(name, github);
console.log(generatePage(name, github));