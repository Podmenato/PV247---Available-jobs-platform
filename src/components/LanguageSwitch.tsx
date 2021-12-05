import React from 'react';
import { Button } from '@mui/material';
import Flags from 'country-flag-icons/react/3x2';

import { useLanguage } from 'hooks/useTranslation';

const LanguageSwitch = () => {
	const [language, setLanguage] = useLanguage();

	return (
		<div style={{ display: 'inline-block' }}>
			<Button
				sx={{
					'minWidth': '25px',
					' svg': {
						width: '25px',
						filter: language === 'en' ? 'none' : 'sepia(100%)'
					},
					':hover svg': {
						filter: 'none'
					}
				}}
				onClick={() => setLanguage('en')}
			>
				<Flags.US title="English" />
			</Button>
			<Button
				sx={{
					'minWidth': '25px',
					' svg': {
						width: '25px',
						filter: language === 'sk' ? 'none' : 'sepia(100%)'
					},
					':hover svg': {
						filter: 'none'
					}
				}}
				onClick={() => setLanguage('sk')}
			>
				<Flags.SK title="Slovak" />
			</Button>
		</div>
	);
};

export default LanguageSwitch;
