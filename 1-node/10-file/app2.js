const fs = require('fs').promises;

fs.readFile('./file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(console.error);

fs.writeFile('./file.txt', 'Hello, Dream ')
 .catch(console.error);

 fs.appendFile('./file.txt', 'Hello, Dream ')
 .catch(console.error);

 fs.copyFile('./file.txt', 'file2.txt')
 .catch(console.error);

 fs.mkdir('sub-folder').catch(console.error);

 fs.readdir('./').then((data) => console.log(data)).catch(console.error);
 