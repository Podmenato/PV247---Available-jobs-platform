import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Palette {
		star?: string;
	}
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface PaletteOptions {
		star?: string;
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: '#ff0000'
		},
		secondary: {
			main: '#0249ff'
		},
		star: '#ff9529'
	},
	typography: {}
});
