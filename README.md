# Portfolio-generator 
This application utilizes the node.js command line interface to programmatically take input data and uses it to create semantic HTML content. This program has functionality for creating the HTML file handled as a Promise, it creates an HTML portfolio page, without ever touching an HTML file. Instead, it uses the command line to capture user input and place it in a JavaScript function that provides the finished HTML page as output. previous projects typically involved creating an HTML file before working on any JavaScript. That way, we could use the <script> tag in the HTML file to load the JavaScript file and execute it upon opening it in the browser. With a Node.js application, we don't have to worry about that,  we only have to create a JavaScript file and use the command line to execute it.
## Brief: 
The user of the program gets prompted a series of questions relating to the their GitHub portfolio, using inquirer, were able to ask for information in a structured and validated manner. This application uses Node.js’s modularity to keep the functionality clean and easy to read.  fs package was used to handle asynchronous JavaScript to create functionality for packaging up the portfolio’s page and style sheet, the mix of callback functions and Promises handle asynchronous functionality in the making of the portfolio. As we explore back-end development, we'll get familiar with Node.js, a runtime environment that allows us to run JavaScript on a local computer or server instead of solely in the browser. Node isn't like a regular computer application that provides you with a nice icon to select and open it. Instead, it is installed on your machine to be used anytime and anywhere. You just have to call on it from the command line using the command node.
##  Lessons learned working on this project:
* Used object destructuring and learned about the rest and spread operators to help keep the data organized.
* Broke a function into multiple pieces to make it easier to read the code for a specific section of the HTML template.
* Leveraged HTML elements by using new array methods .filter() and .map() to take input data and return HTML data with it
* Build an interactive command-line application that processes user input using a third-party Node.js module
* Use string literals to dynamically generate markdown from the command line
* Understand how to use the fs module to copy files from one location to another.
* Create JavaScript Promises to handle asynchronous functionality in a cleaner way.
* Create our own Promises to clean up and handle asynchronous code.
* Use new means of creating variables and functions in JavaScript.
* We know a new way to concatenate variable data into strings using template literals along with some other new ES6 features such as destructuring and spread/rest operators.
* Modularize the Node.js applications to enhance code readability and reusability.
* We know that Node.js has built-in tools and how to use them if we need to, such as the fs library.
* Understand how and why to use the npm init command to create Node.js packages that are dependent on outside tools and libraries such as Inquirer.
* Use new array methods with object destructuring and arrow function implicit returns to create succinct and readable code.
* Identify where the asynchronous functionality can be cleaned up and how to turn callback functions into JavaScript Promise objects.

![Screenshot 2023-05-17 at 22 06 52 (2)](https://github.com/Pizzan8t0r/Portfolio-generator/assets/131811220/50fa41c8-5f08-48db-8298-412d1856fb67)


###
We start by asking the user for their information with Inquirer prompts; this returns all of the data as an object in a Promise.
The promptProject() function captures the returning data from promptUser() and we recursively call promptProject() for as many projects as the user wants to add. Each project will be pushed into a projects array in the collection of portfolio information, and when we're done, the final set of data is returned to the next .then().
The finished portfolio data object is returned as portfolioData and sent into the generatePage() function, which will return the finished HTML template code into pageHTML.
We pass pageHTML into the newly created writeFile() function, which returns a Promise. This is why we use return here, so the Promise is returned into the next .then() method.
Upon a successful file creation, we take the writeFileResponse object provided by the writeFile() function's resolve() execution to log it, and then we return copyFile().
The Promise returned by copyFile() then lets us know if the CSS file was copied correctly
<img width="1440" alt="Screenshot 2023-05-17 at 22 06 52" src="https://github.com/Pizzan8t0r/Portfolio-generator/assets/131811220/d5f2599f-a5b9-4e5b-94fa-74f2b9512333">

## 
Since their inception in the ES6 spec, more and more JavaScript libraries have moved away from the classic callback function approach to asynchronicity and have adopted a Promise-based approach, as it makes the code more predictable and ultimately cleaner when we execute it.
We've created a Node.js application that asks for your input and creates an HTML page with it, although the styling and fonts aren’t that pretty, the program is neat and functional.
  <img width="1440" alt="Screenshot 2023-05-17 at 22 02 51" src="https://github.com/Pizzan8t0r/Portfolio-generator/assets/131811220/228f2905-306e-4f11-bf17-c70937bbfa2e">
### Deployment: 
  https://pizzan8t0r.github.io/actual-html-from-portfolio/


