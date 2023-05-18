const fs = require('fs');

// create two functions that return a Promise, one for writing a file and another for copying a file
// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        return;
      }
//This Promise object acts like a container that allows us to run code that at some point will be in a status of "pending," 
// which means that the code has started to run but is waiting for a response

// if everything went well, resolve the Promise and send the successful data to the `.then()` method
// we're contextualizing it to a Promise and accepting the HTML file's content as a parameter
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// copying file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};
// shorthand property names
// exporting an object with the two functions, writeFile() and copyFile(), used as methods, we're using writeFile for both the property name and its value
module.exports = { writeFile, copyFile };
