// Count the 2's
// Get 1 param 
// Ex 0 - 23
// Total Count

// Ex. If 23; 7 total - 2, 12, 20, 21, 22(twice), 23


// Create Readline Module
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

// Prompt the user and find the instances of the number 2 between all numbers
rl.question('Please input a number to count up to:', (input) => {
var totalNumber = 0;

for(i=0; i<=input; i++)
{
    var numberArray = splitNumber(i);
    
    for(x=0; x<=numberArray.length - 1; x++)
    {
        if(numberArray[x] == 2)
        {
            totalNumber = totalNumber + 1;
        }
       
    }
    
}

console.log("The total number of 2's from 0 to " + input + " is: " + totalNumber);
rl.close();
});

function splitNumber(n){
    return (n + '').split('')
}