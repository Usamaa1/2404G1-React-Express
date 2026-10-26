import express from 'express';
import path from 'path';
import cors from 'cors'
// import { db } from './DB/connection.mjs';
import productRoute from './route/productRoutes.mjs';
import authRoute from './route/authRoutes.mjs';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import emailRoute from './route/emailRoutes.mjs';
import imageRoute from './route/imageRoute.mjs';


const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())
app.use(cookieParser());


const dirname = path.resolve();

console.log(dirname)

app.get('/', (req, res) => {
  res.send('Hello World!....');
});





app.use('/api', productRoute)

app.use('/api/Auth', authRoute)
app.use('/api', emailRoute)
app.use('/api', imageRoute)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});