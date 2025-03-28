import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, MinusCircle, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CartCoffee from "@/assets/cartCoffee.png";
import { Separator } from "@/components/ui/separator";

export default function OrderPage() {
	const navigate = useNavigate();
	const handleBackPage = () => {
		return navigate(-1);
	};

	return (
		<section className="w-full h-screen bg-light relative">
			<div className="w-full h-11 bg-white px-4">
				<div className="max-w-6xl mx-auto grid grid-cols-3 items-center fixed top-0 left-0 right-0 z-50 bg-white pl-2 pr-3">
					<Button onClick={handleBackPage} variant={"link"} className="w-0">
						<ChevronLeft className="text-gray-normal" />
					</Button>

					<p className="text-gray-normal font-semibold text-center">Order</p>
				</div>
			</div>
			{/* style={{ height: "calc(100vh - 88px)" }} */}
			<ScrollArea className="h-52 px-4 mt-4">
				{Array.from({ length: 5 }).map((_, index) => (
					<div key={index}>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-x-4">
								<img
									className="w-14 h-14 rounded"
									src={CartCoffee}
									alt={`Coffee - `}
								/>

								<div>
									<h2>Caffe Mocha</h2>
									<p>Deep Foam</p>
								</div>
							</div>
							<div>
								<div className="flex items-center gap-x-4">
									<Button variant={"link"}>
										<MinusCircle />
									</Button>
									<p>1</p>
									<Button variant={"link"}>
										<PlusCircle />
									</Button>
								</div>
							</div>
						</div>
						<Separator className="py-0.5 bg-salmon my-4 rounded-b-full" />
					</div>
				))}
			</ScrollArea>

			<div className="space-y-4 px-4">
				<h2 className="text-lg text-gray-normal font-semibold">
					Payment Summary
				</h2>
				<div className="flex items-center justify-between">
					<p className="text-sm text-black">Price</p>
					<p className="text-sm text-gray-normal font-semibold">$ 4.53</p>
				</div>
			</div>

			<div className="w-full h-20 flex items-center bg-white rounded-t-2xl fixed bottom-0 left-0 right-0">
				<div className="w-full px-4">
					<Button
						className="w-full text-white font-semibold bg-brown py-4"
						variant={"link"}
					>
						Order
					</Button>
				</div>
			</div>
		</section>
	);
}
