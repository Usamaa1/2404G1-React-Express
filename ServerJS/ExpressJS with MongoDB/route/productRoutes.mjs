
import express from 'express'
import { addProduct, deleteProduct, singleProduct, updateProduct, viewProduct } from '../controller/productsController.mjs';

const productRoute = express.Router();


productRoute.get('/singleProduct/:id',singleProduct);
productRoute.get('/viewProduct',viewProduct);
productRoute.post('/addProduct',addProduct);
productRoute.delete('/deleteProduct/:id',deleteProduct);
productRoute.put('/updateProduct/:id',updateProduct);


export default productRoute;