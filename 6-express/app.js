import express from 'express';
const app = express();

app.listen(8080);

app.get('/sky/:id', (req, res, next) => {
  console.log('get');
  console.log(req.path);
  console.log(req.headers);
  console.log(req.params);
  console.log(req.query);
  res.setHeader('key', 'heyjohn');
  //res.send('hi');
  res.status(201).send('created');
});