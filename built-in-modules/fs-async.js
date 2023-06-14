const { writeFile, readFileSync } = require('fs')

writeFile('./first.txt', '\nYou are important', { flag: 'a' }, (err, result) => {
    if (err) {
        console.log('oops');
        return
    }
    console.log('I have finished writing')

    const first = readFileSync('./first.txt', 'utf8')
    console.log(first)

})

console.log('starting...............')