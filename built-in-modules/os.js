const os=require('os')

const currentOs={
    osType:os.type(),
    osRelease:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()

}
console.log(currentOs)



// Print system uptime after every 1 second

setInterval(()=>console.log(`The system uptime is: ${os.uptime()}`),1000)