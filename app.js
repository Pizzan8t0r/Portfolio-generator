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