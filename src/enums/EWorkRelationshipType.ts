export enum EWorkRelationshipType {
	FULL = 'Plný PP',
	PART = 'Zkracený PP',
	SP = 'SP',
	JOB = 'DPP',
	CONTRACT = 'DPČ'
}

export const ALL_RELATIONSHIP_TYPES = Object.values(EWorkRelationshipType);
