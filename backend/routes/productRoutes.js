import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import data from '../../frontend/src/data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		// await Product.deleteMany({});
		const createdProducts = await Product.insertMany(data.products);
		res.send({ createdProducts });
	})
);

// api to list all products on frontend

productRouter.get(
	'/',
	expressAsyncHandler(async (req, res) => {
		const products = await Product.find({}); /*empty {} means retun all 
    docs from Product collection*/

		res.send(products);
	})
);

// api to list a product's details on frontend

productRouter.get(
	'/:id',
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.send(product);
		} else {
			res.status(404).send({ message: 'Product Not Found' });
		}
	})
);

export default productRouter;
