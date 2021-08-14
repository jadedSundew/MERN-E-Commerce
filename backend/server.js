import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
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

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

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
