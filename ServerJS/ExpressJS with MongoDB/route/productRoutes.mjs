
import express from 'express'
import { addProduct, deleteProduct, singleProduct, updateProduct, viewProduct } from '../controller/productsController.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';

const productRoute = express.Router();


productRoute.get('/singleProduct/:id',authMiddleware,singleProduct);
productRoute.get('/viewProduct',authMiddleware,viewProduct);
productRoute.post('/addProduct', authMiddleware,addProduct);
productRoute.delete('/deleteProduct/:id',authMiddleware,deleteProduct);
productRoute.put('/updateProduct/:id', authMiddleware,updateProduct);


export default productRoute;