const process = require('process');

console.log('==== execPath ====')
console.log(process.execPath);
console.log('==== version ====')
console.log(process.version);
console.log('==== pid ====')
console.log(process.pid);
console.log('==== ppid ====')
console.log(process.ppid);
console.log('==== platform ====')
console.log(process.platform);
console.log('==== env ====')
console.log(process.env);
console.log('==== uptime ====')
console.log(process.uptime());
console.log('==== cwd ====')
console.log(process.cwd());
console.log('==== cpuUsage ====')
console.log(process.cpuUsage());

setTimeout(() => {
  console.log('setTimeout');
},0);

process.nextTick(() => {
  console.log('nextTick');
});

for(let i = 0; i < 1000; i++) {
  console.log('for loop');
}