import 'dotenv/config';
import express, { NextFunction, Response } from 'express';

const router = express.Router();

import { SignIn, SignUp } from './controllers';

router.post('/signin', SignIn);
router.post('/signup', SignUp);

export default router;
