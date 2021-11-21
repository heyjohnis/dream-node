import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if(errors.isEmpty()) {
    return next();
  } else {
    return res.status(400).json({message: errors.array()})
  }
}

app.post('/user', 
  [
    body('name').isLength({min:2, max:10}).withMessage('이름은 두글짜 이상'),
    body('age').isInt().withMessage('숫자를 입력하세요'),
    body('email').isEmail().withMessage('email을 입력해'),
    body('job.name').notEmpty().withMessage('직업명을 입력하세요'),
    validate
  ],
  (req, res, next) => {

  console.log(req.body);

  res.sendStatus(201);
});

app.get(
  '/:email', 
  [
    param('email').isEmail().withMessage('이메일을 입력하세요'),
    validate
  ],
  (req, res, next) => {

  console.log(req.body);
  res.send('🐼')
});

app.listen(8080);