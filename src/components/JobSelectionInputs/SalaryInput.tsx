import React, { FC, useState } from 'react';

import { ISearchParams } from 'interfaces/ISearchParams';
import NumberInput from 'components/NumberInput';

type TProps = {
	params: ISearchParams;
	setParams: (params: ISearchParams) => void;
};

const SalaryInput: FC<TProps> = ({ params, setParams }) => {
	const [value, setValue] = useState(0);
	const handleSetValue = (n: string) => {
		const newParams = { ...params };
		newParams.salary = value;
		setParams(newParams);
		setValue(Number(n));
	};
	return <NumberInput value={String(value)} setValue={handleSetValue} />;
};

export default SalaryInput;
