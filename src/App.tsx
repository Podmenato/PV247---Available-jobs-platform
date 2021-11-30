import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { theme } from 'theme';
import { EPaths } from 'enums/EPaths';
import Home from 'pages/Home';
import Offer from 'components/Offer';
import Layout from 'components/Layout';
import { LanguageProvider } from 'hooks/useTranslation';
import Login from 'pages/Login';
import { UserProvider } from 'hooks/useUser';

const App = () => (
	<ThemeProvider theme={theme}>
		<UserProvider>
			<LanguageProvider>
				<BrowserRouter>
					<CssBaseline />
					<Layout>
						<Routes>
							<Route path={EPaths.HOME} element={<Home />} />
							<Route path={EPaths.LOGIN} element={<Login />} />
							<Route path={EPaths.OFFER} element={<Offer />} />
						</Routes>
					</Layout>
				</BrowserRouter>
			</LanguageProvider>
		</UserProvider>
	</ThemeProvider>
);

export default App;
