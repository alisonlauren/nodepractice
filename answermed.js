const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Filename: ', (inputFile) => {
    fs.readFile(inputFile, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            rl.question('Output: ', (outputFile) => {
                fs.writeFile(outputFile, data)
            })
        }
    })

    rl.close()
})


