export enum EOfferSelectionSteps {
	EDUCATION,
	FIELD,
	LANGUAGE,
	SHIFT,
	WORKER_TYPE,
	WORK_RELATIONSHIP
}

export const StepsNames = [
	'Education',
	'Field',
	'Language',
	'Shift',
	'Worker_Type',
	'Work_Relationship'
] as const;

export const toString = (step: EOfferSelectionSteps) => {
	switch (step) {
		case EOfferSelectionSteps.EDUCATION:
			return StepsNames[0];
		case EOfferSelectionSteps.FIELD:
			return StepsNames[1];
		case EOfferSelectionSteps.LANGUAGE:
			return StepsNames[2];
		case EOfferSelectionSteps.SHIFT:
			return StepsNames[3];
		case EOfferSelectionSteps.WORK_RELATIONSHIP:
			return StepsNames[5];
		case EOfferSelectionSteps.WORKER_TYPE:
			return StepsNames[4];
		default:
			return '';
	}
};
