import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CategoriesEnum } from "@/types";
import { Link, useParams } from "react-router-dom";

export default function ThankYouPage() {
	const { orderNumber } = useParams();
	return (
		<section className="w-full bg-[#050505] px-4">
			<div className="max-w-2xs mx-auto">
				<div className="flex items-center"></div>
				<div className="w-full h-screen flex flex-col items-center justify-center">
					<Card className="text-center p-4">
						<h1 className="text-xl text-gray-normal font-semibold mb-1 lg:text-2xl">
							Thank You for Your Order!
						</h1>
						<p className="text-gray-normal font-semibold">
							Your order number is:{" "}
							<span className="font-bold">{orderNumber}</span>
						</p>
						<p className="text-gray-normal font-semibold">
							We appreciate your purchase and will process your order.
						</p>
						<Button variant={"link"} asChild>
							<Link
								to={`/coffee/${CategoriesEnum.HOT}`}
								className="text-white font-semibold bg-brown py-2"
							>
								Explore coffees
							</Link>
						</Button>
					</Card>
				</div>
			</div>
		</section>
	);
}
