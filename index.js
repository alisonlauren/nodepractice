const math = require('./math');


//take a number
const num = 4;

//find the square
//need to put name of export, alongside name
const squaredNumber = math.square(num);
const addedNum = math.add(squaredNumber, 8);

// log results
console.log(addedNum);