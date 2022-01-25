import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', isAuth, tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', isAuth, tweetController.getTweet);

// POST /tweeets
router.post('/', isAuth, tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', isAuth, tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', isAuth, tweetController.deleteTweet);

export default router;