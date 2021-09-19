const fs = require('fs');
const readStream = fs.createReadStream('./file.txt', {
  //highWaterMark: 8, // default 64kbytes
  encodeing: 'utf-8',
});

const data = [];
readStream.on('data', chunk => {
  data.push(chunk);
  console.log(chunk);
});

readStream.on('end', () => {
  console.log(data.join(''));
}).on('error', error => {
  console.log(error);
});