
import express from 'express'
import { addProduct, deleteProduct, updateProduct, viewProduct } from '../controller/productsController.mjs';

const productRoute = express.Router();

productRoute.get('/product',viewProduct)
productRoute.post('/addProduct',addProduct)
productRoute.post('/deleteProduct',deleteProduct)
productRoute.post('/updateProduct/:upId',updateProduct)


export default productRoute;