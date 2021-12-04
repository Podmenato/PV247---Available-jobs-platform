import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { theme } from 'theme';
import Layout from 'components/Layout';
import { LanguageProvider } from 'hooks/useTranslation';
import { UserProvider } from 'hooks/useUser';
import Settings from 'components/Settings';
import PersonalizedProfile from 'components/PersonalizedProfile';
import { OfferProvider } from 'hooks/useOffers';
import Routing from 'components/Routing';

const App = () => (
	<ThemeProvider theme={theme}>
		<OfferProvider>
			<UserProvider>
				<LanguageProvider>
					<BrowserRouter>
						<CssBaseline />
						<Layout>
							<Routing />
						</Layout>
					</BrowserRouter>
				</LanguageProvider>
			</UserProvider>
		</OfferProvider>
	</ThemeProvider>
);

export default App;
