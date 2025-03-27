import api from "@/services/api";
import { CategoryType, CoffeType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Heart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import DeliveryIcon from "@/assets/icons/delivery.png";
import BeanIcon from "@/assets/icons/bean.png";
import MilkIcon from "@/assets/icons/milk.png";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type CoffeDetailsParams = CategoryType & {
	id: string;
};
export default function CoffeeDetail() {
	const navigate = useNavigate();
	const { category, id } = useParams<CoffeDetailsParams>();

	const { data: coffeeDetail, isLoading } = useQuery<CoffeType>({
		queryKey: [category, id],
		queryFn: () => api.get(`${category}/${id}`).then((res) => res.data),
	});

	const handleBackPage = () => {
		return navigate(-1);
	};

	return (
		<section className="bg-light relative">
			<div className="w-full h-11 flex items-center justify-between pt-3 px-4 fixed top-0 left-0 right-0 z-50 bg-white">
				<Button onClick={handleBackPage} variant={"link"} className="w-0">
					<ChevronLeft className="w-6 h-6 text-gray-normal" />
				</Button>

				<p className="text-gray-normal font-semibold">Detail</p>

				<Heart className="w-4 h-4 text-gray-normal" />
			</div>

			<ScrollArea className="pb-6" style={{ height: "calc(100vh - 88px)" }}>
				<div className="relative mx-4 mt-16">
					<div className="w-full h-52 absolute top-0 left-0 bg-radial-[at_10%_100%] from-[#111111] to-black to-100% rounded-2xl opacity-10 " />
					<img
						src={coffeeDetail?.image}
						alt={`Coffee - ${coffeeDetail?.title}`}
						className="w-full h-52 rounded-2xl object-cover"
					/>
				</div>

				<div className="flex justify-between mt-4 px-4">
					<div>
						<h1 className="text-xl text-gray-normal font-semibold mb-1">
							{coffeeDetail?.title}
						</h1>
						<h2 className="text-xs text-lighter mb-3">{category}</h2>
						<p className="space-x-1">
							<span className="text-xl text-yellow-400">★</span>
							<span className="font-semibold text-gray-normal">4.8</span>
							<span className="text-xs text-lighter">(280)</span>
						</p>
					</div>
					<div className="flex items-center gap-3">
						<img src={DeliveryIcon} alt="Delivery Icon" className="w-9 h-9" />
						<img src={BeanIcon} alt="Delivery Icon" className="w-9 h-9" />
						<img src={MilkIcon} alt="Delivery Icon" className="w-9 h-9" />
					</div>
				</div>

				<Separator className="max-w-10/12 mx-auto my-4" />

				<div className="space-y-2 px-4">
					<h2 className="text-xl text-gray-normal font-semibold">
						Description
					</h2>
					<p className="text-sm text-lighter font-light">
						{coffeeDetail?.description}
					</p>
				</div>

				<div className="space-y-4 mt-6 px-4">
					<h2 className="text-xl text-gray-normal font-semibold">Size</h2>
					<div className="grid grid-cols-3 gap-x-4">
						<Button
							variant={"outline"}
							data-active={false}
							className="data-[active=true]:bg-salmon data-[active=true]:border-brown data-[active=true]:text-brown"
						>
							S
						</Button>
						<Button
							variant={"outline"}
							data-active={true}
							className="data-[active=true]:bg-salmon data-[active=true]:border-brown data-[active=true]:text-brown"
						>
							M
						</Button>
						<Button
							variant={"outline"}
							data-active={false}
							className="data-[active=true]:bg-salmon data-[active=true]:border-brown data-[active=true]:text-brown"
						>
							L
						</Button>
					</div>
				</div>
			</ScrollArea>

			<div className="bg-white rounded-t-2xl mt-6 py-5 px-4 fixed bottom-0 left-0 right-0">
				<div className="grid grid-cols-3">
					<div>
						<h2 className="text-sm text-gray-normal">Price</h2>
						<p className="text-lg text-brown font-semibold">$ 4.53</p>
					</div>
					<div className="col-span-2">
						<Button
							variant={"outline"}
							className="w-full bg-brown border-brown text-white font-semibold"
						>
							Buy Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
