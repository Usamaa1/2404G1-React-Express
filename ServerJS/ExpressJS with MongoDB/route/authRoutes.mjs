import express from 'express'
import { login, me, register } from '../controller/AuthController.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';


const authRoute = express.Router();



authRoute.post('/register',register);
authRoute.post('/login',login);

authRoute.get('/me',authMiddleware,me)



export default authRoute;

