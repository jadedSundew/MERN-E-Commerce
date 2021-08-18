import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { css, cx } from '@emotion/css';
import CheckOutStepper from '../components/CheckOutStepper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NativeSelect, FormControl } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		padding: '1rem'
	},
	media: {
		height: 420
	}
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end'
}));

const PlaceOrderScreen = (props) => {
	const classes = useStyles();

	const cart = useSelector((state) => state.cart);

	if (!cart.paymentMethod) {
		props.history.push('/payment');
	}

	const toPrice = (num) => Number(num.toFixed(2));

	cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0));

	cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);

	cart.taxPrice = toPrice(0.15 * cart.itemsPrice);

	cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

	const placeOrderHandler = () => {
		//TODO: dispatch place order action
		return null;
	};

	return (
		<div>
			<CheckOutStepper step={3} />
			<DrawerHeader />
			<div
				id="parent"
				className={css`
					display: flex;
					justify-content: space-evenly;
				`}
			>
				<ul>
					<li className={css`margin: 20px 0 20px 0;`}>
						<Card
							className={css`
								@media (min-width: 768px) {
									width: 350px;
									height: 100%;
								}
							`}
						>
							<CardContent>
								Shipping
								<p className={css`margin-top: 10px;`}>
									<strong>Name: {''}</strong>
									{cart.shippingAddress.fullName}
									<br />
									<strong>Shipping Address: {''}</strong>
									{cart.shippingAddress.address}
								</p>
								{cart.shippingAddress.city}, {''}
								{cart.shippingAddress.postalCode}, {''}
								{cart.shippingAddress.state}
							</CardContent>
						</Card>
					</li>

					<li className={css`margin: 20px 0 20px 0;`}>
						<Card
							className={css`
								@media (min-width: 768px) {
									width: 300px;
									height: 100%;
								}
							`}
						>
							<CardContent>
								Payment
								<p className={css`margin-top: 10px;`}>
									<strong> Method: {''}</strong>
									{cart.paymentMethod}
								</p>
							</CardContent>
						</Card>
					</li>

					<li>
						<Card
							className={css`
								/* flex: 1 1 30rem; */
								margin: 20px 0 20px 0;
								@media (min-width: 768px) {
									width: 600px;
									height: 100%;
								}

								/* @media (max-width: 768px) {
									width: 500px;
									height: 100%;
								} */
							`}
						>
							<CardContent>
								<strong>Order Items</strong>
								<ul className={css`margin-top: 10px;`}>
									{cart.cartItems.map((item) => (
										<li key={item.product}>
											<div
												className={css`
													display: flex;
													align-items: center;
													flex-wrap: wrap;
													justify-content: space-between;
													margin: 20px;
												`}
											>
												<div>
													<img
														src={item.image}
														alt={item.name}
														className={css`
															max-width: 4rem;
															width: 100%;
														`}
													/>
												</div>
												{/* <div className="min-30"> */}
												<Link
													to={`/product/${item.product}`}
													className={css`
														color: black;
														margin: 0;
													`}
												>
													<p className={css`margin-top: 10px;`}>
														<strong>{item.name}</strong>
													</p>
												</Link>
												{/* </div> */}

												<div>
													{item.qty} x ${item.price} = ${item.qty * item.price}
												</div>
												<br />
											</div>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</li>
				</ul>

				<div id="order-summary-div">
					<Card
						className={css`
							padding: 0 1rem 1rem 1rem;
							@media (min-width: 768px) {
								width: 350px;
								height: fit-content;
							}
						`}
					>
						<ul>
							<li>
								<h2 className={css`text-align: center;`}>Order Summary</h2>
							</li>
							<li>
								<div
									className={css`
										display: flex;
										/* flex-wrap: wrap; */
										justify-content: space-between;
										align-items: center;
									`}
								>
									<div>Items</div>
									<div>${cart.itemsPrice.toFixed(2)}</div>
								</div>
							</li>
							<li>
								<div
									className={css`
										display: flex;
										/* flex-wrap: wrap; */
										justify-content: space-between;
										align-items: center;
									`}
								>
									<div>Shipping</div>
									<div>${cart.shippingPrice.toFixed(2)}</div>
								</div>
							</li>
							<li>
								<div
									className={css`
										display: flex;
										/* flex-wrap: wrap; */
										justify-content: space-between;
										align-items: center;
									`}
								>
									<div>Tax</div>
									<div>${cart.taxPrice.toFixed(2)}</div>
								</div>
							</li>
							<li>
								<div
									className={css`
										display: flex;
										/* flex-wrap: wrap; */
										justify-content: space-between;
										align-items: center;
									`}
								>
									<div
										className={css`
											display: flex;
											flex-wrap: wrap;
											justify-content: space-between;
											align-items: center;
										`}
									>
										<strong>Order Total</strong>
									</div>
									<div>
										<strong>${cart.totalPrice.toFixed(2)}</strong>
									</div>
								</div>
							</li>
						</ul>
						<div
							className={css`
								display: flex;
								justify-content: center;
								align-items: center;
								margin-top: 15px;
							`}
						>
							<Button
								variant="contained"
								onClick={placeOrderHandler}
								disabled={cart.cartItems.length === 0}
							>
								Place Order
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrderScreen;
