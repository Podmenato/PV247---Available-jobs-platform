export type IJobOffer = {
	uid: string;
	celkemVm: string;
	zmena: string;
	jakKontaktovat: string;
	autor: string;
	AGENTURA_PRACE_PRIDELENI: string;
	PROFESE: {
		kod: string;
		nazev: string;
		doplnek: string;
	};
	FIRMA: {
		nazev: string;
		ic: string;
		www: string;
	};
	SMENNOST: {
		kod: string;
		nazev: string;
	};
	MIN_VZDELANI: {
		kod: string;
		nazev: string;
	};
	PRACPRAVNI_VZTAH: {
		ppvztahPpPlny: string;
		ppvztahPpZkrac: string;
		ppvztahSp: string;
		ppvztahDpp: string;
		ppvztahDpc: string;
		tydneHodinMin: string;
	};
	KONOS: {
		_: string;
		jmeno: string;
		prijmeni: string;
		telefon: string;
		email: string;
	};
	PRACOVISTE: {
		_: string;
		neurcitaAdresa: string;
		email: string;
		okresKod: string;
		okres: string;
		obec: string;
		cobce: string;
		ulice: string;
		cp: string;
		psc: string;
		posta: string;
		nazev: string;
	};
	MZDA: {
		min: string;
		typMzdy: string;
	};
	PRAC_POMER: {
		od: string;
	};
	VHODNE_PRO: {
		absolventySs: string;
		absolventyVs: string;
		ozp: string;
		bezbar: string;
		cizince: string;
		azylanty: string;
	};
	URAD_PRACE: {
		kod: string;
		nazev: string;
	};
	MODRE_KARTY: {
		pocetVmProMk: string;
		celkemVmProMk: string;
		vmRezervProMk: string;
		vmRezervProPodanMk: string;
		vmRezervProVyhovMk: string;
		vmRezervProVydanMk: string;
	};
	ZAMEST_KARTY: {
		pocetVmProZm: string;
		celkemVmProZm: string;
		vmRezervProZm: string;
		vmRezervProPodanZm: string;
		vmRezervProVyhovZm: string;
		vmRezervProVydanZm: string;
		jenDalsiZamZm: string;
	};
	VOLNE_MISTO: null;
	vyraditDne: string;
	POZNAMKA: string;
	JAZYK: string;
	OBOR: {
		kod: string;
		nazev: string;
	};
	www: string;
};
