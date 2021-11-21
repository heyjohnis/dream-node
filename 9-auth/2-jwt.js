const jwt = require('jsonwebtoken');

const secrit = 'ix6LaSc0g5nUqJ2HFruU$DCzCHfLmxvR';
const token = jwt.sign(
  {
    id: 'john',
    isAdmin: false,
  },
  secrit,
  { expiresIn: 2 }
);  

setTimeout(() => {
  jwt.verify(token, secrit, (error, decode) => {
    console.log(error, decode);
  });
}, 1000);

//console.log(token);