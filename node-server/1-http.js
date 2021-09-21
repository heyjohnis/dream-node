const http = require('http');
const fs = require('fs');

// console.log("STATUS_CODES ", http.STATUS_CODES);
// console.log(http.METHODS);
const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log('httpVersion: ', req.httpVersion);
  console.log('headers: ', req.headers);
  console.log('method: ', req.method);
  console.log('url: ', req.url);

  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if(url === '/') {
    // res.write(`
    //   <html>
    //     <head><title>Academy</title></head>
    //     <body>
    //       <h1>Welecome</h1>
    //     </body>
    //   </html>`);
    fs.createReadStream('./html/index.html').pipe(res);
  } else if(url === '/course') {
    // res.write('Course');
    fs.createReadStream('./html/course.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
    // res.write('Not Found');
  }
  // res.end();
});

server.listen(8080);