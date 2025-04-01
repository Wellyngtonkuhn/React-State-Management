import { CoffeeType } from "@/types";
import { CartType } from "./types";

export const addCoffeeToCart = (cart: CartType, coffee: CoffeeType, quantity: number) => {
	const existingItem = cart?.cartItems?.find((item) => item.id === coffee.id);

	let updatedCartItems;

	if (existingItem) {
		updatedCartItems = cart?.cartItems?.map((item) =>
			item.id === coffee.id ? { ...item, quantity: item.quantity + quantity } : item
		);
	} else {
		updatedCartItems = [...(cart?.cartItems || []), { ...coffee, quantity }];
	}

	return {
		...cart,
		cartItems: updatedCartItems,
	};
};

export const decreaseItemFromCart = (cart: CartType, id: number) => {
	const existingItem = cart?.cartItems?.find((cartItem) => cartItem.id === id);
	let decreaseCartItems;
	if (existingItem) {
		decreaseCartItems = cart?.cartItems?.map((cartItem) =>
			cartItem.id === id
				? {
						...cartItem,
						quantity:
							cartItem.quantity > 1
								? cartItem.quantity - 1
								: cartItem.quantity,
				  }
				: cartItem
		);
	}

	return {
		...cart,
		cartItems: decreaseCartItems,
	};
};

export const removeCoffeeFromCart = (cart: CartType, id: number): CartType => {
	return {
		...cart,
		cartItems: cart.cartItems?.filter((item) => item.id !== id) || [],
	};
};

export const calculateTotalPrice = (cart: CartType) => {
	return cart?.cartItems!.reduce((total, item) => {
		if (item.price !== undefined) {
			return total + item.price * item.quantity;
		}
		return total;
	}, 0);
};
