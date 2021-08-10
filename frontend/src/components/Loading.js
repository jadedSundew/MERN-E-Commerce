import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

export default function Loading() {
	return (
		<Box className="loading">
			<CircularProgress size={'6.5rem'} />
		</Box>
	);
}
