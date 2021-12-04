import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { theme } from 'theme';
import Layout from 'components/Layout';
import { LanguageProvider } from 'hooks/useTranslation';
import { UserProvider } from 'hooks/useUser';
import Routing from 'components/Routing';

const App = () => (
	<ThemeProvider theme={theme}>
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
	</ThemeProvider>
);

export default App;
