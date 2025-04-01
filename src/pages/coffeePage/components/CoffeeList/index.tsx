import { Link } from "react-router-dom";
import { CategoriesEnum, CoffeeType } from "../../../../types";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartProvider/useCart";

type Props = {
	results: Array<CoffeeType> | undefined;
	category: CategoriesEnum;
};

export default function CoffeeList({ results, category }: Props) {
	const { handleAddToCart } = useCart();

	const handleGeneretaStars = () => {
		const stars = Math.random() * 4 + 1;

		return stars > 5 ? stars.toFixed() : stars.toFixed(1);
	};

	return (
		<div className="max-w-6xl mx-auto grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
			{results &&
				results?.length > 0 &&
				results.map((coffee, index) => {
					const stars = handleGeneretaStars(); // Gera o número de estrelas para cada comic

					return (
						<Card key={index} className="p-2 rounded-2xl">
							<CardContent className="p-0 relative rounded-tr-2xl">
								<Link to={`/coffee/${category}/${coffee.id}`}>
									<img
										src={`${coffee?.image}`}
										alt="Product"
										className="w-full h-32 object-cover rounded-2xl"
									/>
								</Link>

								<div className="w-16 flex items-center justify-center gap-1 absolute right-0 top-0 bg-radial-[at_100%_10%] from-[#111111] to-black to-100% rounded-tr-2xl rounded-bl-2xl">
									<span className="text-yellow-400" key={index}>
										★
									</span>
									<p className="text-xs text-white font-semibold">
										{stars}
									</p>
								</div>
							</CardContent>
							<CardHeader className="p-0">
								<CardTitle>
									<Link to={`/coffee/${category}/${coffee.id}`}>
										<h2 className="text-gray-normal font-semibold line-clamp-1">
											{coffee?.title}
										</h2>
									</Link>
								</CardTitle>
								<CardDescription>
									<p className="text-xs text-lighter line-clamp-3">
										{coffee?.description}
									</p>
								</CardDescription>
							</CardHeader>
							<CardFooter className="flex justify-between items-center p-0">
								<span className="text-lg text-dark-active font-semibold">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "USD",
									}).format(coffee?.price as number)}
								</span>
								<Button
									variant={"outline"}
									className="bg-brown border-brown text-white font-semibold hover:cursor-pointer"
									onClick={() => handleAddToCart(coffee, 1)}
								>
									<Plus />
								</Button>
							</CardFooter>
						</Card>
					);
				})}
		</div>
	);
}
