import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
	onClick?: () => void;
	path?: string;
	text: string;
};

const NavigationButton = (props: Props) => {
	const { onClick, path, text } = props;

	if (!path && !onClick) {
		return <>At least one property of onClick, path is required</>;
	}

	const styles = {
		'color': 'white',
		':hover': {
			backgroundColor: 'rgba(0,0,0,.4)'
		}
	};

	return path ? (
		<Button variant="text" component={Link} to={path} sx={styles}>
			{text}
		</Button>
	) : (
		<Button variant="text" onClick={onClick} sx={styles}>
			{text}
		</Button>
	);
};

export default NavigationButton;
