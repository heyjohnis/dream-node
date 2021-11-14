const fs = require('fs');

try {
  fs.renameSync('./file4.txt', './file2.txt');
} catch(e) {
  console.error(e);
}
console.log('hello1');

fs.rename('./file2.txt', './file3.txt', (error) => {
  console.log(error);
});
console.log('hello2');

fs.promises.rename('./file3.txt', './file2.txt').then().catch(console.error);
console.log('hello3');
