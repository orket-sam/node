const names=require('./4-names')
const sayHi=require('./3-utils')
const {user,items}=require('./5-alternative_syntax')
const {son,daughter}=require('./4-names')

console.log(`My son is ${son}`)
console.log(`My daughter is ${daughter}`)
sayHi(names.son)
sayHi(names.daughter)
console.log(items)
console.log(user)

