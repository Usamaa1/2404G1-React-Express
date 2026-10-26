
import express from 'express'
import { mailSend } from '../controller/emailController.mjs';

const emailRoute = express.Router();



emailRoute.post('/sendEmail',mailSend);

export default emailRoute;

