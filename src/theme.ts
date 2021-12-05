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
			light: '#A2DBFA',
			main: '#39A2DB',
			dark: '#053742'
		},
		secondary: {
			light: '#D5D5D5',
			main: '#FC9A40',
			dark: '#fb7b06'
		},
		star: '#ff9529'
	},
	typography: {}
});
