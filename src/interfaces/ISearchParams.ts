export type ISearchParams = {
	education: {
		A: boolean;
		C: boolean;
		H: boolean;
		K: boolean;
		T: boolean;
	};
	field: {
		SERVICES: boolean;
		FACTORY: boolean;
		HEALTHCARE: boolean;
		IT: boolean;
		DEFENCE: boolean;
		TRAFFIC: boolean;
		MONEY: boolean;
	};
	shifts: {
		ONE: boolean;
		TWO: boolean;
		FLEX: boolean;
		TURNUS: boolean;
	};
	worker_type: {
		absolventySs: boolean;
		absolventyVs: boolean;
		azylanty: boolean;
		bezbar: boolean;
		cizince: boolean;
		ozp: boolean;
	};
	language: {
		ENG: boolean;
		RUS: boolean;
		SPA: boolean;
	};
	relationship: {
		FULL: boolean;
		PART: boolean;
		SP: boolean;
		DPP: boolean;
		DPC: boolean;
	};
	salary: number;
};

export const filledParams = {
	education: {
		A: true,
		C: true,
		H: true,
		K: true,
		T: true
	},
	field: {
		SERVICES: true,
		FACTORY: true,
		HEALTHCARE: true,
		IT: true,
		DEFENCE: true,
		TRAFFIC: true,
		MONEY: true
	},
	shifts: {
		ONE: true,
		TWO: true,
		FLEX: true,
		TURNUS: true
	},
	worker_type: {
		absolventySs: true,
		absolventyVs: true,
		azylanty: true,
		bezbar: true,
		cizince: true,
		ozp: true
	},
	language: {
		ENG: true,
		RUS: true,
		SPA: true
	},
	relationship: {
		FULL: true,
		PART: true,
		SP: true,
		DPP: true,
		DPC: true
	},
	salary: 0
};

export const emptyParams = {
	education: {
		A: false,
		C: false,
		H: false,
		K: false,
		T: false
	},
	field: {
		SERVICES: false,
		FACTORY: false,
		HEALTHCARE: false,
		IT: false,
		DEFENCE: false,
		TRAFFIC: false,
		MONEY: false
	},
	shifts: {
		ONE: false,
		TWO: false,
		FLEX: false,
		TURNUS: false
	},
	worker_type: {
		absolventySs: false,
		absolventyVs: false,
		azylanty: false,
		bezbar: false,
		cizince: false,
		ozp: false
	},
	language: {
		ENG: false,
		RUS: false,
		SPA: false
	},
	relationship: {
		FULL: false,
		PART: false,
		SP: false,
		DPP: false,
		DPC: false
	},
	salary: 0
};
