export type CoffeType = {
	id: number;
	title: string;
	description: string;
	ingredients: Array<string>;
	image: string;
	price: number;
};
export enum CategoriesEnum {
	HOT = "hot",
	ICED = "iced",
}
