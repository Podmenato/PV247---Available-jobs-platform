import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { ELanguage } from 'enums/ELanguage';
import { useLanguage } from 'hooks/useTranslation';

const LanguageSwitch = () => {
	const [language, setLanguage] = useLanguage();

	const handleAlignment = (
		_event: React.MouseEvent<HTMLElement>,
		newAlignment: ELanguage | null
	) => {
		setLanguage(newAlignment ?? ELanguage.EN);
	};
	return (
		<ToggleButtonGroup
			value={language}
			exclusive
			onChange={handleAlignment}
			aria-label="language switch"
		>
			<ToggleButton
				sx={{ borderRadius: 11 }}
				value={ELanguage.SK}
				aria-label="left aligned"
			>
				SK
			</ToggleButton>
			<ToggleButton
				sx={{ borderRadius: 11 }}
				value={ELanguage.EN}
				aria-label="centered"
			>
				EN
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default LanguageSwitch;
