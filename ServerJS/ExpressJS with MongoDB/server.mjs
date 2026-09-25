import express from 'express';
import path from 'path';
import cors from 'cors'
// import { db } from './DB/connection.mjs';
import productRoute from './route/productRoutes.mjs';
import authRoute from './route/authRoutes.mjs';

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())


const dirname =path.resolve();

console.log(dirname)

app.get('/', (req, res) => {
  res.send('Hello World!....');
});





app.use('/api',productRoute)

app.use('/api',authRoute)













app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});