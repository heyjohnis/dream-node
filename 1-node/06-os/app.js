const os = require('os');

console.log('mac: ', os.EOL === '\n') // mac;
console.log('window: ', os.EOL === '\r\n') // window;

console.log('==== hostname ====')
console.log(os.hostname() );
console.log('==== loadavg ====')
console.log(os.loadavg());
console.log('==== uptime ====')
console.log(os.uptime());
console.log('==== freemen ====')
console.log(os.freemem());
console.log('==== totalmem ====')
console.log(os.totalmem());
console.log('==== cpus ====')
console.log(os.cpus());
console.log('==== type ====')
console.log(os.type());
console.log('==== release ====')
console.log(os.release());
console.log('==== networkInterfases ====')
console.log(os.networkInterfaces());
console.log('==== homedir ====')
console.log(os.homedir());
console.log('==== userInfo ====')
console.log(os.userInfo());
// console.log( userInfo(options?: { encoding: BufferEncoding }): UserInfo<string>;

console.log(os.cpus().length);
