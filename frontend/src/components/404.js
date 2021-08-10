import { useLocation } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end'
}));

const PageNotFound = () => {
	const pathname = useLocation();

	return (
		<div>
			<DrawerHeader />
			<DrawerHeader />
			<h1>No Match for {pathname.pathname}</h1>
		</div>
	);
};

export default PageNotFound;
