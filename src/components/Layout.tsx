import * as React from 'react';
import { Container } from '@mui/material';

import NavigationDrawer from 'components/NavigationDrawer';
import { usePlatform } from 'hooks/usePlatform';
import { EPlatform } from 'enums/EPlatform';
import NavigationAppBar from 'components/NavigationAppBar';

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
					minHeight: '100vh',
					pt: 8,
					gap: 2
				}}
			>
				{children}
			</Container>
		</>
	);
};

export default Layout;
