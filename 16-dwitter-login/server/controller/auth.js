import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../data/auth.js';

// TODO: Make it Secure!
const jwtSecretKey = 'ix6LaSc0g5nUqJ2HFruU';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 3;

export async function signup( req, res ) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `'${username}' 아이디는 이미 존재합니다.`});
  }

  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });

  const token = createJwtToken(userId);

};

export async function login( req, res ) {
  console.log('req: ', req.body);
  
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  if(!user) {
    return res.status(401).json({ message: '사용자 아이디나 패스워드가 틀렸습니다.'});
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if(!isValidPassword) {
    return res.status(401).json({ message: '사용자 아이디나 패스워드가 틀렸습니다.'});
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
};

function createJwtToken(id) {
  return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}