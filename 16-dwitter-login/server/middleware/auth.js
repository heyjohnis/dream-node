import jwt from 'jsonwebtoken';
import * as userRepository from '../data/auth.js';

const AUTH_ERROR = { message: 'Authentication Error' };

export const isAuth = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  console.log("authHeader : ", authHeader);
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(' ')[1];

  console.log("token: ", token);
  // TODO: Make it secure!
  jwt.verify(
    token,
    'ix6LaSc0g5nUqJ2HFruU',
    async (error, decoded) => {
      console.log("decode: ", decoded);
      if (error) {
        return res.status(401).json(AUTH_ERROR);
      }
      const user = await userRepository.findById(decoded.id);
      if (!user) {
        return res.status(401).json(AUTH_ERROR);
      }
      req.userId = user.id; // req.customData
      next();
    }
  );
};
