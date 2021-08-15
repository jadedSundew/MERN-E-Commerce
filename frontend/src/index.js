import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		// primary: {
		// 	// Purple and green play nicely together.
		// 	main: '#fff'
		// },
		secondary: {
			// This is green.A700 as hex.
			main: '#fff'
		}
	},

	typography: {
		button: {
			textTransform: 'none'
		}
	}
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</ThemeProvider>,
	document.getElementById('root')
);
