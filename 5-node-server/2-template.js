const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const _name = 'John';
const course = [
  {name: 'HTML'},
  {name: 'CSS'},
  {name: 'JS'},
]

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log('httpVersion: ', req.httpVersion);
  console.log('headers: ', req.headers);
  console.log('method: ', req.method);
  console.log('url: ', req.url);

  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if(url === '/') {
    ejs.renderFile('./template/index.ejs', { name: _name })
      .then(data => res.end(data));
  } else if(url === '/course') {
    ejs.renderFile('./template/course.ejs', { course })
      .then(data => res.end(data));
  } else {
    ejs.renderFile('./template/not-found.ejs', { name: _name })
      .then(data => res.end(data));
  }
});

server.listen(8080);