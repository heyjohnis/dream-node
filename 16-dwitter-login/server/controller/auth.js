import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../data/auth.js';
import { config } from '../config.js';

export async function signup( req, res ) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `'${username}' 아이디는 이미 존재합니다.`});
  }

  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });

  const token = createJwtToken(userId);
  res.status(200).json({ token, username });

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

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ token: req.token, username: user.username });
} 

function createJwtToken(id) {
  return jwt.sign({ id }, config.jwt.secretKey, { expiresIn: config.jwt.expiresInSec });
}