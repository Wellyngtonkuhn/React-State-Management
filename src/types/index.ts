export type CreatorsType = {
	items: Array<{ name: string; resourceURI: string; role: string }>;
};

export type PricesType = {
	price: number;
	type: string;
};
export type ComicsResult = {
	id: number;
	title: string;
	description: string;
	prices: Array<PricesType>;
	format: string;
	thumbnail: {
		path: string;
		extension: string;
	};
	images: Array<string>;
	creators: CreatorsType;
	characters: Array<string>;
};

export type ComicsType = {
	code: number;
	status: string;
	etag: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	data: {
		offset: number;
		limit: number;
		total: number;
		count: number;
		results: Array<ComicsResult>;
	};
};
