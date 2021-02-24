const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Filename: ', (answer) => {
    fs.readFile(answer, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data.toUpperCase())
        }
    })

    rl.close()
})