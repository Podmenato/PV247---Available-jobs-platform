import React, { useState } from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { theme } from 'theme';
import { EPaths } from 'enums/EPaths';
import Home from 'components/Home';
import Settings from 'components/Settings';
import ChangeSettings from 'components/ChangeSettings';

const App = () => {
	const [oldPassword, setOldPassword] = useState<string | undefined>();
	const sendDataToParent = (oldPassw: string | undefined) => {
		setOldPassword(oldPassw);
	};
	const test = () => {
		console.log(oldPassword);
	};
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path={EPaths.HOME} element={<Home />} />
					<Route
						path={EPaths.SETTINGS}
						element={<Settings sendDataToParent={sendDataToParent} />}
					/>
					<Route
						path={EPaths.CHANGE_SETTINGS}
						element={<ChangeSettings oldPassword={oldPassword} />}
					/>
				</Routes>
			</BrowserRouter>
			<Button onClick={test}>Test</Button>
		</ThemeProvider>
	);
};

export default App;
