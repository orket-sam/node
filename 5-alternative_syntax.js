module.exports.items=['shifu',4,'orket']

const orket={
    name:'orket'
}

module.exports.user=orket
console.log(module.exports)


// when you export a module which invokes a function, it's invoke via require('./name_of_module')

const num1=22
const num2=34

function addNumbers(){
    console.log(`The result is: ${num1+num2}`)
}

// Despite addNumbers() not being exported, it is still invoke when the module is exported
addNumbers()
