const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site');
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
// if (err) throw err;
// console.log('Portfolio complete. Check out the index.html to see the output');
//});

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => {
            if (confirmAbout) {
              return true;
            } else {
              return false;
            }
          }
        }
    ]);
  };

const promptProject = portfolioData => {

console.log(`
=================
Add a New Project
=================
`);
// If there's no 'projects' array property, create one
// if control statement to guarantee the array is initialized only on the first pass
// data collection system

if (!portfolioData.projects) {
  portfolioData.projects = [];
}
return inquirer
  .prompt([
// inquirer's prompt method can receive an array of objects in its argument, known as the question object. 
//the function returns a running of inquire.prompt(), thus returning what it returns, which is a Promise.
{
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What did you this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
  {
    type: 'input',
    name: 'link',
    message: 'Enter the GitHub link to your project. (Required)',
    validate: linkInput => {
      if (linkInput) {
        return true;
      } else {
        console.log('You need to enter a project GitHub link!');
        return false;
      }
    }
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
])
//.then callback
.then(projectData => {
  portfolioData.projects.push(projectData);
  // add a condition that will call the promptProject(portfolioData) function when confirmAddProject evaluates to true
  // we can evaluate whether the user wishes to add another project
  // In this condition, we're evaluating the user response to whether they wish to add more projects. 
  // This response was captured in the answer object, projectData, in the property confirmAddProject. 
  // If the user wishes to add more projects, then this condition will evaluate to true and call the promptProject(portfolioData) function
  if (projectData.confirmAddProject) {
    // if portfolioData isn't included as the argument in the function call,
    // A new projects array will be initialized, and the existing project data will be lost
    return promptProject(portfolioData);
  } else {
    return portfolioData;
  }
 });
  
};
//the promise will resolve with a .then method
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
  //Using recursion and conditional statements, 
  // the project was called  with the project question prompt—allowing the user 
  // to determine the number of projects to add to the portfolio webpage