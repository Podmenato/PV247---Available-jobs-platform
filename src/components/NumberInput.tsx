import React, { ChangeEvent } from 'react';
import { BaseTextFieldProps, TextField } from '@mui/material';

type IProps = {
	value: string;
	setValue: (value: string) => void;
	variant?: BaseTextFieldProps['variant'];
	error?: boolean;
	helperText?: string;
};

const NumberInput = (props: IProps) => {
	const { value, setValue } = props;
	const writingNumberRE = new RegExp('^([0-9]|[1-9][0-9]*)([.,]|[.,][0-9]+)?$');
	const validNumberRE = new RegExp('^([0-9]|[1-9][0-9]*)([.,][0-9]+)?$');
	const fromZeroRE = new RegExp('^([0][1-9])$');

	const handleChange = (
		event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		const text = event.target.value;
		if (writingNumberRE.test(text)) setValue(text);
		if (text === '') setValue('0');
		if (fromZeroRE.test(text)) setValue(text.slice(1));
	};

	const handleFocusOut = () => {
		let newValue = value.replace(',', '.');
		if (!validNumberRE.test(value)) {
			newValue = newValue.slice(0, -1);
		}
		setValue(newValue);
	};

	return (
		<TextField
			error={props.error}
			helperText={props.helperText}
			value={value}
			onBlur={handleFocusOut}
			variant={props.variant}
			inputProps={{ inputMode: 'numeric' }}
			onChange={handleChange}
		/>
	);
};

export default NumberInput;
