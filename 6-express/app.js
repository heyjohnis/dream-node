import express from 'express';
const app = express();

// app.get('/sky/:id', (req, res, next) => {
//   console.log('get');
//   console.log(req.path);
//   console.log(req.headers);
//   console.log(req.params);
//   console.log(req.query);
//   res.setHeader('key', 'value');
//   //res.send('hi');
//   res.status(201).send('created');
// });

app.all('/api', (req, res, next) => {
  console.log('all');
  next();
});

app.get('/', 
  (req, res, next) => {
    console.log('first');
    next();
  },
  (req, res, next) => {
    console.log('second');
    next();
  }
);

app.get(
  '/', 
  (req, res, next) => {
    console.log('third');
    res.send('complete');
  }
);

app.use(express.json())

app.post('/post', (req, res, next) => {
  console.log(req.body);
});

app.use((req, res, next) => {
  res.status(404).send('Not available!');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later!');
});



app.listen(8080);