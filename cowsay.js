//form terminal, install cowsay
//npm install cowsay in terminal
const cowsay = require('cowsay');


console.log(cowsay.say({
    text: "Whats up, The Name is Perl",
    cow: cowsay.list[1]
}));
