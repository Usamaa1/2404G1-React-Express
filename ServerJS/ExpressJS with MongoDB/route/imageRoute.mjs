

import express from 'express'
import parser from '../controller/imageController.mjs';

const imageRoute = express.Router();


imageRoute.post('/imageUpload', parser.single('image'), function (req, res) {
  res.json(req.file);
});


export default imageRoute;