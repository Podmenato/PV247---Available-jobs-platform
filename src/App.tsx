import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { theme } from 'theme';
import { EPaths } from 'enums/EPaths';
import Home from 'components/Home';
import Offer from 'components/Offer';

const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Routes>
				<Route path={EPaths.HOME} element={<Home />} />
				<Route path={EPaths.OFFER} element={<Offer />} />
			</Routes>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
