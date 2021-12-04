import { setDoc } from '@firebase/firestore';
import {
	Alert,
	AlertTitle,
	Button,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	TextField,
	Typography
} from '@mui/material';
import React, { useState } from 'react';

import useUser from 'hooks/useUser';
import { filterSettingsDocument } from 'utils/firebase';

const PersonalizedProfile = () => {
	const [workRelationship, setWorkRelationship] = useState<string>('');

	const handleChangeWorkContract = (event: SelectChangeEvent<string>) => {
		setWorkRelationship(event.target.value);
	};
	const [suitableFor, setSuitableFor] = useState<string>('');
	const handleChangeSuitableFor = (event: SelectChangeEvent<string>) => {
		setSuitableFor(event.target.value);
	};
	const [state, setState] = React.useState({
		salary: undefined,
		profession: '',
		startingFrom: '',
		city: ''
	});
	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const value = evt.target.value;

		setState({
			...state,

			[evt.target.id]: value
		});
	};
	const test = () => {
		console.log(workRelationship);
		console.log(state.startingFrom);
		console.log(state.salary);
		console.log(state.profession);
		console.log(state.city);
	};
	const user = useUser();
	const [emptyFieldsError, setEmptyFieldsError] = useState(false);
	const [submitError, setSubmitError] = useState<string>();
	const submit = async () => {
		try {
			if (
				workRelationship === '' ||
				suitableFor === '' ||
				state.startingFrom === '' ||
				state.profession === '' ||
				state.city === '' ||
				!state.salary
			) {
				setEmptyFieldsError(true);
			} else {
				setEmptyFieldsError(false);
				if (user?.email) {
					console.log(state.city);
					console.log(user?.email);
					await setDoc(filterSettingsDocument(user?.email), {
						workRelationship,
						suitableFor,
						salary: state.salary,
						startingFrom: state.startingFrom,
						profession: state.profession,
						city: state.city
					});
				}
			}
		} catch (err) {
			setSubmitError(
				(err as { message?: string })?.message ?? 'Unknown error occurred'
			);
		}
	};
	return (
		<Container>
			<Stack spacing={2}>
				<Typography variant="h6">Filters</Typography>
				<FormControl sx={{ m: 1, width: '50ch' }}>
					<InputLabel id="work_relatioship">Work contract</InputLabel>
					<Select
						labelId="work_relatioship_select_label"
						id="work_relatioship_select"
						value={workRelationship}
						label="Work Contract"
						onChange={handleChangeWorkContract}
					>
						<MenuItem value="ppvztahPpPlny">Full contract</MenuItem>
						<MenuItem value="ppvztahPpZkrac">Part Time</MenuItem>
						<MenuItem value="ppvztahSp">Freelancer</MenuItem>
						<MenuItem value="ppvztahDpp">DPP</MenuItem>
						<MenuItem value="ppvztahDpc">DPČ</MenuItem>
						<MenuItem value="tydneHodinMin">Hours per week</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={{ m: 1, width: '50ch' }}>
					<InputLabel id="suitable_for">Suitable for</InputLabel>
					<Select
						labelId="suitable_for_select_label"
						id="suitable_for_select"
						value={suitableFor}
						label="Suitable for"
						onChange={handleChangeSuitableFor}
					>
						<MenuItem value="absolventySs">High school absolvent</MenuItem>
						<MenuItem value="absolventyVs">University absolvent</MenuItem>
						<MenuItem value="ozp">Handicapped people</MenuItem>
						<MenuItem value="bezbar">People in wheelchair</MenuItem>
						<MenuItem value="cizince">Foreigners</MenuItem>
						<MenuItem value="azylanty">Asylum seekers</MenuItem>
					</Select>
				</FormControl>
				<TextField
					sx={{ m: 1, width: '50ch' }}
					id="salary"
					label="Salary"
					variant="outlined"
					value={state.salary}
					onChange={handleChange}
				/>
				<TextField
					sx={{ m: 1, width: '50ch' }}
					id="startingFrom"
					label="Starting from"
					variant="outlined"
					value={state.startingFrom}
					onChange={handleChange}
				/>
				<TextField
					sx={{ m: 1, width: '50ch' }}
					id="profession"
					label="Professions code"
					variant="outlined"
					value={state.profession}
					onChange={handleChange}
				/>
				<TextField
					sx={{ m: 1, width: '50ch' }}
					id="city"
					label="City"
					variant="outlined"
					value={state.city}
					onChange={handleChange}
				/>
			</Stack>
			{submitError && (
				<Typography variant="subtitle2" align="left" color="error" paragraph>
					{submitError}
				</Typography>
			)}
			{emptyFieldsError && (
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					Fields can not be empty
				</Alert>
			)}
			<Button onClick={submit}>Submit</Button>
		</Container>
	);
};
export default PersonalizedProfile;
