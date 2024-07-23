// os module  tells request is coming from which machine  type=>object
const os = require('os')

const sysUptime = os.uptime()
console.log(sysUptime)

const userInfo = os.userInfo()
console.log(userInfo)

const otherInfo = {
    cpu: os.arch(),
    name: os.type(),
    platform: os.platform(),
    release: os.release(),
    hostname: os.hostname(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    network: os.networkInterfaces()
}

console.log(otherInfo)