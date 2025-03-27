export type CoffeType = {
	id: number;
	title: string;
	description: string;
	ingredients: Array<string>;
	image: string;
	price: number;
};
export type CategoryType = {
	category: CategoriesEnum;
};

export enum CategoriesEnum {
	HOT = "hot",
	ICED = "iced",
}
