const fs = require('fs');

const writeStream = fs.createWriteStream('./file.txt');
writeStream.on('finish', () => {
  console.log('finished');
});

writeStream.write('Hello');
writeStream.write('world');
writeStream.end();