import { IJobOffer } from 'interfaces/IJobOffer';
import { ISearchParams } from 'interfaces/ISearchParams';
import { EShifts } from 'enums/EShifts';
import { EWorkLanguage } from 'enums/EWorkLanguage';
import { EField } from 'enums/EField';
import { EEducation } from 'enums/EEducation';

const suitableCheck = (offer: IJobOffer, params: ISearchParams) =>
	(offer.VHODNE_PRO.absolventySs === 'A' && params.worker_type.absolventySs) ||
	(offer.VHODNE_PRO.absolventyVs === 'A' && params.worker_type.absolventyVs) ||
	(offer.VHODNE_PRO.azylanty === 'A' && params.worker_type.azylanty) ||
	(offer.VHODNE_PRO.bezbar === 'A' && params.worker_type.bezbar) ||
	(offer.VHODNE_PRO.cizince === 'A' && params.worker_type.cizince) ||
	(offer.VHODNE_PRO.ozp && params.worker_type.ozp);

const shiftCheck = (offer: IJobOffer, params: ISearchParams) =>
	offer.SMENNOST === null ||
	(offer.SMENNOST.nazev === EShifts.FLEX && params.shifts.FLEX) ||
	(offer.SMENNOST.nazev === EShifts.ONE && params.shifts.ONE) ||
	(offer.SMENNOST.nazev === EShifts.TWO && params.shifts.TWO) ||
	(offer.SMENNOST.nazev === EShifts.TURNUS && params.shifts.TURNUS);

const languageCheck = (offer: IJobOffer, params: ISearchParams) =>
	offer.JAZYK === null ||
	(offer.JAZYK.nazev === EWorkLanguage.ENG && params.language.ENG) ||
	(offer.JAZYK.nazev === EWorkLanguage.RUS && params.language.RUS) ||
	(offer.JAZYK.nazev === EWorkLanguage.SPA && params.language.SPA);

const workRelationshipCheck = (offer: IJobOffer, params: ISearchParams) =>
	(offer.PRACPRAVNI_VZTAH.ppvztahDpc === 'A' && params.relationship.DPC) ||
	(offer.PRACPRAVNI_VZTAH.ppvztahDpp === 'A' && params.relationship.DPP) ||
	(offer.PRACPRAVNI_VZTAH.ppvztahPpPlny === 'A' && params.relationship.FULL) ||
	(offer.PRACPRAVNI_VZTAH.ppvztahPpZkrac === 'A' && params.relationship.PART) ||
	(offer.PRACPRAVNI_VZTAH.ppvztahSp === 'A' && params.relationship.SP);

const fieldCheck = (offer: IJobOffer, params: ISearchParams) =>
	offer.OBOR.nazev === undefined ||
	(offer.OBOR.nazev === EField.DEFENCE && params.field.DEFENCE) ||
	(offer.OBOR.nazev === EField.FACTORY && params.field.FACTORY) ||
	(offer.OBOR.nazev === EField.HEALTHCARE && params.field.HEALTHCARE) ||
	(offer.OBOR.nazev === EField.IT && params.field.IT) ||
	(offer.OBOR.nazev === EField.MONEY && params.field.MONEY) ||
	(offer.OBOR.nazev === EField.SERVICES && params.field.SERVICES) ||
	(offer.OBOR.nazev === EField.TRAFFIC && params.field.TRAFFIC);

const educationCheck = (offer: IJobOffer, params: ISearchParams) =>
	(offer.MIN_VZDELANI.nazev === EEducation.T && params.education.T) ||
	(offer.MIN_VZDELANI.nazev === EEducation.A && params.education.A) ||
	(offer.MIN_VZDELANI.nazev === EEducation.C && params.education.C) ||
	(offer.MIN_VZDELANI.nazev === EEducation.H && params.education.H) ||
	(offer.MIN_VZDELANI.nazev === EEducation.K && params.education.K);

export const useFilter = (
	offers: IJobOffer[],
	params: ISearchParams | null
) => {
	if (!params) return offers;
	return offers.filter(
		offer =>
			suitableCheck(offer, params) &&
			languageCheck(offer, params) &&
			workRelationshipCheck(offer, params) &&
			fieldCheck(offer, params) &&
			educationCheck(offer, params) &&
			shiftCheck(offer, params)
	);
};
