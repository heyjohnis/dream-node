// npm install cookie-parser morgan helmet
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
app.use(express.json());  
app.use(cookieParser());
app.use(morgan('combined'));
app.use(helmet('tiny'));

app.use(
  cors({
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);  // front-end 127.0.0.1 로 실행시켜 호출할 때,  blocked by CORS policy

app.get('/', (req, res) => {
  console.log("body: ",req.body); // app.use(express.json());   등록해야 {}로 나옴 
  console.log("cookies: ", req.cookies);
  res.send('Welcome!!');
});

app.listen(8080);