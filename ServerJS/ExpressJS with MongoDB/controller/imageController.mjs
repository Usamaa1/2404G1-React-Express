import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

import {CloudinaryStorage} from 'multer-storage-cloudinary';




cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: '2404G1',
    allowed_formats: ['png','jpg','jpeg']
  },
});

const parser = multer({ storage: storage });
export default parser;