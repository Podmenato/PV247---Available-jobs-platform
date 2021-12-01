import { Button, Container, Stack, Typography } from '@mui/material';

export type ChangeSettingProps = {
	oldPassword: string | undefined;
};
const ChangeSettings: React.FC<ChangeSettingProps> = props => {
	const test = () => {
		console.log(props.oldPassword);
	};
	return (
		<Container>
			<Stack spacing={2}>
				<Typography variant="h6">Old password</Typography>
				<Button onClick={test}>TEST</Button>
			</Stack>
		</Container>
	);
};
export default ChangeSettings;
