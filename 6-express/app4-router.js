import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json());  // REST Api -> Body
app.use(express.urlencoded({extended: false}));  // HTML Form Submit -> Body, {extended: false} : body-parser deprecated undefined extended: provide extended option 에러 제거 
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options)); // Static 참조: https://expressjs.com/en/4x/api.html#express.static
// app.route('/posts').get((req, res, next) => {
//   res.status(201).send('GET: /posts');
// })
// .post((req, res) => {
//   res.status(201).send('POST: /posts');
// });

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080);