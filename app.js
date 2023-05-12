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
    Name: ${userName}
    Github: ${githubName}
    
    `;
};

console.log(name, github);
console.log(generatePage(name, github));