import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);  // front-end 127.0.0.1 로 실행시켜 호출할 때,  blocked by CORS policy

app.get('/', (req, res) => {
  res.send('Welcome!!');
});

app.listen(8080);