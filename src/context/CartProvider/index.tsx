import { createContext, useState } from "react";
import { CartContextType, CartProviderType, CartType } from "./types";
import { CoffeeType } from "@/types";
import {
	addCoffeeToCart,
	calculateTotalPrice,
	decreaseItemFromCart,
	removeCoffeeFromCart,
} from "./utils";

export const CartContext = createContext<CartContextType>({} as CartContextType);

export default function CartProvider({ children }: CartProviderType) {
	const [cartItems, setCart] = useState<CartType | null>();
	const [totalPrice, setTotalPrice] = useState<number>(0);

	const handleAddToCart = (coffee: CoffeeType, quantity: number) => {
		const updatedCart = addCoffeeToCart(cartItems!, coffee, quantity);
		const updatedTotalPrice = calculateTotalPrice(updatedCart);

		setCart(updatedCart);
		setTotalPrice(updatedTotalPrice);

		return;
	};

	const handleDescreaseCoffeeFromCart = (id: number) => {
		const decreaseItem = decreaseItemFromCart(cartItems!, id);

		setCart(decreaseItem);
		const updatedTotalPrice = calculateTotalPrice(decreaseItem);
		setTotalPrice(updatedTotalPrice);
		return;
	};

	const handleRemoveFromCart = (id: number) => {
		const filterCart = removeCoffeeFromCart(cartItems!, id);

		setCart(filterCart);
		const updatedTotalPrice = calculateTotalPrice(filterCart);
		setTotalPrice(updatedTotalPrice);
		return;
	};

	return (
		<CartContext.Provider
			value={{
				...cartItems,
				handleAddToCart,
				handleDescreaseCoffeeFromCart,
				handleRemoveFromCart,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
