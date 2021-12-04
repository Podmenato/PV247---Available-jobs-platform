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
							<Routes>
								<Route path={EPaths.HOME} element={<Home />} />
								<Route path={EPaths.LOGIN} element={<Login />} />
								<Route path={EPaths.SETTINGS} element={<Settings />} />
								<Route path={EPaths.OFFER} element={<Offer />} />
								<Route
									path={EPaths.PERSONALIZED}
									element={<PersonalizedProfile />}
								/>
							</Routes>
						</Layout>
					</BrowserRouter>
				</LanguageProvider>
			</UserProvider>
		</OfferProvider>
	</ThemeProvider>
);

export default App;
