const { log } = require('console')
const fs=require('fs')
const {readFile,writeFile}=require('fs')




// synchronous
fs.writeFileSync('./hello.txt','It\'s a hard knock life',)
const text=fs.readFileSync('./hello.txt','utf-8')

console.log(text)
console.log(__dirname)
console.log(__filename)


readFile('./hello.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result

    writeFile('./sam.txt','\nReal nuh real bout yuh',{flag:'a'},(err,res)=>{
        if(err){
            console.log('oops')
            return
        }else{
            console.log('success')
            console.log(first);
        }
    })

})