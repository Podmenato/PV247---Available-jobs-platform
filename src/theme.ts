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
			light: '#435cb9',
			main: '#2E3F7F',
			dark: '#1e2a54'
		},
		secondary: {
			light: '#fdae67',
			main: '#FC9A40',
			dark: '#fb7b06'
		},
		star: '#ff9529'
	},
	typography: {}
});
