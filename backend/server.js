import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

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

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User routes

app.use('/api/users', userRouter);

// Product routes

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
