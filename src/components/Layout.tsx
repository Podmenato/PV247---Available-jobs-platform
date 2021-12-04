import * as React from 'react';
import { Container } from '@mui/material';

import NavigationAppBar from 'components/NavigationAppBar';

const Layout: React.FC = ({ children }) => (
	<>
		<NavigationAppBar />
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

export default Layout;
