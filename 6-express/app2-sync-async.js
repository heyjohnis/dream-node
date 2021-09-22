import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  try { // 동기방식
    const data = fs.readFileSync('/file.txt');
  } catch(error) {
    res.status(404).send('"file.txt" not found');
  }

  fs.readFile('/file1.txt', (err, data) => {  // 비동기식
    if(err) {
      res.status(404).send('"file1.txt" Not Found');
    }
  });
});

app.get('/file2', (req, res, next) => {
  fsAsync.readFile('/file.txt')
    .then((data) => {})
    //.catch(error = next(error));
    .catch(next);
});

app.get('/file3', async (req, res) => {
  // const data = await fsAsync.readFile('/file4.txt');
  try{
    const data = await fsAsync.readFile('/file4.txt');
  } catch (error) {
    res.status(404).send('"file3" not found');
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ massage: 'Something went wrong'});
});

app.listen(8080);