const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {});
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 /1024;
  const afterMemMb = afterMem / 1024 /1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}Mb`);
  console.log(`RSS Memory: ${afterMemMb}Mb`);
  console.log(`heapTotal Memory: ${process.memoryUsage().heapTotal / 1024 / 1024}Mb`);
});