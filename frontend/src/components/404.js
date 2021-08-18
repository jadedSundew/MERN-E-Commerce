import { useLocation } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { css, cx } from '@emotion/css';

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
			<h2
				className={css`
					word-break: break-all;
					text-align: center;
				`}
			>
				No Match for {pathname.pathname}
			</h2>
		</div>
	);
};

export default PageNotFound;
