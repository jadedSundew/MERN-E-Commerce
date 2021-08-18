import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { styled } from '@material-ui/core/styles';
import { css, cx } from '@emotion/css';

const steps = [ 'Signin', 'Shipping', 'Payment', 'Place Order' ];

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end'
}));

const CheckOutStepper = (props) => {
	// const steps = Object.values(props);
	console.log(steps);
	return (
		<Box sx={{ width: '100%' }}>
			<DrawerHeader />
			<Stepper activeStep={props.step} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel className={css`font-weight: 500;`}>
							{/* <p className={css`font-weight: 900;`}>{label}</p> */}
							{label}
						</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};

export default CheckOutStepper;
