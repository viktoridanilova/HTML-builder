const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');
// const process = require('process');

const write = fs.createWriteStream(path.join(__dirname, 'text.txt'));

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function ask(question) {
    rl.question(question, (answer) => {
        if(answer === "exit") {
            process.exit(1)
        }
        fs.appendFile(`${__dirname}/text.txt`, answer, function(error){
          if(error) throw error; 
          console.log('The data was successfully written to the file!');
        });

        ask(question)
    })
}
process.on('exit', () => {
    console.log('See you again!');
  });

ask("Enter text: ") 


