// ile path to where Node.js is installed on your computer
const commandLineArgs = process.argv;
// file path for the file that was executed
console.log(commandLineArgs);
//[
   // '/usr/local/bin/node',
   // '/Users/billymandy/Desktop/portfolio-generator/app.js'
 // ]

console.log("testing testing, hello node!");
const message = 'Hellooo nurseee';
const sum = 5 + 3;
console.log(message);
console.log(sum);
// created variables and logged them as output
//-> testing testing, hello node!
//-> Hellooo nurseee
//-> 8

//[
   // '/usr/local/bin/node',
    //'/Users/billymandy/Desktop/portfolio-generator/app.js',
   // 'helllo nursee',
   // 'From',
    //'the',
   // 'command',
   // 'line'
  //]
  // everything separated into different values. 
  // This happens because the command line interprets a space as the separator between two commands
  // hellooo nursee is wrapped in quotes so the command line interprets it as one value
  // if we ever need to keep a sentence or multiple words together, we need to remember to wrap them in quotes so that they stay together in process.argv
  // In Node.js, process is a global object that represents everything going on with this particular app. You can compare it to document or window in the browser, as it's always present in the context of the runtime environment.
  // The argv property of process is an array that holds exactly what was typed into the command line upon execution so that we can capture that data and use it in the app. 
  // The first two indexes of process.argv simply represent Node.js and the file we executed, so we don't typically need to use them.
  console.log(process)
  // -> all the jargon that get's spat out
  