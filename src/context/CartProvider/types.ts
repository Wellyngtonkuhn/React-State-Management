import { CoffeeType } from "@/types";

export type CartItem = CoffeeType & {
	quantity: number;
};

export type CartType = {
	cartItems?: CartItem[];
	totalPrice?: number;
};

export type CartContextType = CartType & {
	handleAddToCart: (coffee: CoffeeType, quantity: number) => void;
	handleDescreaseCoffeeFromCart: (id: number) => void;
	handleRemoveFromCart: (id: number) => void;
};

export type CartProviderType = {
	children: React.JSX.Element;
};
