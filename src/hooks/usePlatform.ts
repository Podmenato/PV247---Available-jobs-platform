import { useEffect, useState } from 'react';

import { EPlatform } from 'enums/EPlatform';

export const usePlatform = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	if (width < 700) {
		return EPlatform.MOBILE;
	} else if (width < 1100) {
		return EPlatform.TABLET;
	} else {
		return EPlatform.DESKTOP;
	}
};
