import { EEducation } from 'enums/EEducation';
import { ISearchParams } from 'interfaces/ISearchParams';
import { EWorkerType } from 'enums/EWorkerType';
import { EField } from 'enums/EField';
import { EShifts } from 'enums/EShifts';
import { EWorkLanguage } from 'enums/EWorkLanguage';
import { EWorkRelationshipType } from 'enums/EWorkRelationshipType';

export const isEducationChecked = (
	params: ISearchParams,
	education: EEducation
) => {
	switch (education) {
		case EEducation.A: {
			return params.education.A;
		}
		case EEducation.C: {
			return params.education.C;
		}
		case EEducation.H: {
			return params.education.H;
		}
		case EEducation.K: {
			return params.education.K;
		}
		case EEducation.T: {
			return params.education.T;
		}
		default: {
			return false;
		}
	}
};

export const isWorkerTypeChecked = (
	params: ISearchParams,
	workerType: EWorkerType
) => {
	switch (workerType) {
		case EWorkerType.WHEELCHAIR:
			return params.worker_type.bezbar;
		case EWorkerType.OZP:
			return params.worker_type.ozp;
		case EWorkerType.HIGH_SHOOL_GRADUATE:
			return params.worker_type.absolventySs;
		case EWorkerType.FOREIGNER:
			return params.worker_type.cizince;
		case EWorkerType.COLLEGE_GRADUATE:
			return params.worker_type.absolventyVs;
		case EWorkerType.AZYLANT:
			return params.worker_type.azylanty;
		default: {
			return false;
		}
	}
};

export const isFieldChecked = (params: ISearchParams, field: EField) => {
	switch (field) {
		case EField.TRAFFIC:
			return params.field.TRAFFIC;
		case EField.SERVICES:
			return params.field.SERVICES;
		case EField.MONEY:
			return params.field.MONEY;
		case EField.IT:
			return params.field.IT;
		case EField.HEALTHCARE:
			return params.field.HEALTHCARE;
		case EField.FACTORY:
			return params.field.FACTORY;
		case EField.DEFENCE:
			return params.field.DEFENCE;
		default: {
			return false;
		}
	}
};

export const isShiftChecked = (params: ISearchParams, shifts: EShifts) => {
	switch (shifts) {
		case EShifts.TWO:
			return params.shifts.TWO;
		case EShifts.TURNUS:
			return params.shifts.TURNUS;
		case EShifts.ONE:
			return params.shifts.ONE;
		case EShifts.FLEX:
			return params.shifts.FLEX;
		default: {
			return false;
		}
	}
};

export const isLanguageChecked = (
	params: ISearchParams,
	lang: EWorkLanguage
) => {
	switch (lang) {
		case EWorkLanguage.SPA:
			return params.language.SPA;
		case EWorkLanguage.RUS:
			return params.language.RUS;
		case EWorkLanguage.ENG:
			return params.language.ENG;
		default: {
			return false;
		}
	}
};

export const isWorkRelationshipChecked = (
	params: ISearchParams,
	workRelationship: EWorkRelationshipType
) => {
	switch (workRelationship) {
		case EWorkRelationshipType.SP:
			return params.relationship.SP;
		case EWorkRelationshipType.PART:
			return params.relationship.PART;
		case EWorkRelationshipType.DPP:
			return params.relationship.DPP;
		case EWorkRelationshipType.FULL:
			return params.relationship.FULL;
		case EWorkRelationshipType.DPC:
			return params.relationship.DPC;
		default: {
			return false;
		}
	}
};
