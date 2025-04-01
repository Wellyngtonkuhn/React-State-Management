import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, MinusCircle, PlusCircle, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartProvider/useCart";

export default function OrderPage() {
	const navigate = useNavigate();
	const {
		cartItems,
		totalPrice,
		handleAddToCart,
		handleDescreaseCoffeeFromCart,
		handleRemoveFromCart,
	} = useCart();
	const handleBackPage = () => {
		return navigate(-1);
	};

	const handleIngredients = (ingredients: string[]): string => {
		return ingredients
			.map((ingredient, index) => {
				// Add a comma after each item except the last one
				return index === ingredients.length - 1
					? `${ingredient}.`
					: `${ingredient},`;
			})
			.join(" ");
	};

	return (
		<section className="w-full h-screen bg-light relative">
			<div className="w-full h-11 bg-white px-4">
				<div className="max-w-6xl mx-auto grid grid-cols-3 items-center fixed top-0 left-0 right-0 z-50 bg-white pl-2 pr-3">
					<Button
						onClick={handleBackPage}
						variant={"link"}
						className="w-0 hover:cursor-pointer"
					>
						<ChevronLeft className="text-gray-normal" />
					</Button>

					<p className="text-gray-normal font-semibold text-center">Order</p>
				</div>
			</div>
			<div className="max-w-6xl mx-auto">
				<ScrollArea
					className="px-4 mt-4"
					style={{ height: "calc(100vh - 15rem)" }}
				>
					{cartItems?.map((cartItem) => (
						<div key={cartItem?.id}>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-x-4 flex-wrap">
									<img
										className="w-14 h-14 rounded md:w-16 md:h-16"
										src={cartItem?.image}
										alt={`Coffee - ${cartItem?.title} `}
									/>

									<div>
										<h2 className="text-gray-normal font-semibold md:text-lg">
											{cartItem?.title}
										</h2>
										<p className="max-w-36 break-all text-xs text-lighter">
											{handleIngredients(
												cartItem?.ingredients as string[]
											)}
										</p>
									</div>
								</div>
								<div className="flex items-center justify-center">
									<div className="flex items-center justify-center gap-x-2">
										<Button
											variant={"link"}
											className="hover:cursor-pointer"
											onClick={() =>
												handleDescreaseCoffeeFromCart(
													cartItem.id as number
												)
											}
										>
											<MinusCircle />
										</Button>
										<p>{cartItem?.quantity}</p>
										<Button
											variant={"link"}
											className="hover:cursor-pointer"
											onClick={() => handleAddToCart(cartItem, 1)}
										>
											<PlusCircle />
										</Button>
									</div>
									<Button
										variant={"link"}
										className="hover:cursor-pointer"
										onClick={() =>
											handleRemoveFromCart(cartItem.id as number)
										}
									>
										<Trash />
									</Button>
								</div>
							</div>
							<Separator className="py-0.5 bg-salmon my-4 rounded-b-full" />
						</div>
					))}
				</ScrollArea>

				<div className="max-w-6xl mx-auto flex flex-col gap-y-4 bg-white rounded-t-2xl fixed bottom-0 left-0 right-0 py-4">
					<div className="space-y-2 px-4">
						<h2 className="text-lg text-gray-normal font-semibold">
							Payment Summary
						</h2>
						<div className="flex items-center justify-between">
							<p className="text-sm text-black">Price</p>
							<p className="text-sm text-gray-normal font-semibold">
								{new Intl.NumberFormat("en-US", {
									style: "currency",
									currency: "USD",
								}).format(totalPrice!)}
							</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-sm text-black">Discount</p>
							<p className="text-sm text-gray-normal font-semibold">0</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-sm text-black font-semibold">Total</p>
							<p className="text-sm text-gray-normal font-semibold">
								{new Intl.NumberFormat("en-US", {
									style: "currency",
									currency: "USD",
								}).format(totalPrice!)}
							</p>
						</div>
					</div>
					<div className="w-full px-4">
						<Button
							className="w-full bg-brown border-brown text-white font-semibold hover:cursor-pointer py-4"
							variant={"outline"}
						>
							Order
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
