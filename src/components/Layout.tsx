import * as React from 'react';
import { Container } from '@mui/material';

import NavigationDrawer from 'components/NavigationDrawer';
import { usePlatform } from 'hooks/usePlatform';
import { EPlatform } from 'enums/EPlatform';
import NavigationAppBar from 'components/NavigationAppBar';
import Footer from 'components/Footer';

const Layout: React.FC = ({ children }) => {
	const platform = usePlatform();
	return (
		<>
			{platform !== EPlatform.MOBILE && <NavigationAppBar />}
			{platform === EPlatform.MOBILE && <NavigationDrawer />}
			<Container
				maxWidth="lg"
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '90vh',
					pt: 8,
					gap: 2,
					padding: '100px 30px'
				}}
			>
				{children}
			</Container>
			<Footer />
		</>
	);
};

export default Layout;
