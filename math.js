
//function
function square(number) {
    return number * number;
}

function add(number1, number2) {
    return number1 + number2;
}

module.exports = {
    //name of export first, name of function second
    square: square,
    add: add
}