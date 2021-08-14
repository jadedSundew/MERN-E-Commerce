import express from 'express';
import mongoose from 'mongoose';
import data from '../frontend/src/data.js';
import userRouter from './routes/userRoutes.js';

// express app

const app = express();

const dbURI = 'mongodb+srv://polka:teamkrillpolka@ecommerce.tc8kz.mongodb.net/Thriftshop?retryWrites=true&w=majority';

// connect to MongoDB

mongoose
	.connect(process.env.MONGODB_URL || dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then((result) => {
		app.listen(5000, () => {
			console.log(`Serve at http://localhost:${port}`);
		});
	});

// (Individual) Product Screen

app.get('/api/products/:id', (req, res) => {
	const product = data.products.find((x) => x._id === req.params.id);

	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: 'Product not Found' });
	}
});

// Home Screen

app.get('/api/products', (req, res) => {
	res.send(data.products);
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
	res.send('Server is ready!');
});

app.use((err, req, res, next) => {
	res.status(500).send(err.message);
});

const port = process.env.PORT || 5000;

// app.listen(5000, () => {
// 	console.log(`Serve at http://localhost:${port}`);
// });
