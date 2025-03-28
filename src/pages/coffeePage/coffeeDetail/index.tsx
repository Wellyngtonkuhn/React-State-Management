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
import CoffeDetailSkeleton from "./components/CoffeeDetailSkeleton";
import Skeleton from "@/components/Skeleton";

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
		<section className="w-full bg-light relative">
			<div className="w-full h-11 bg-white px-4">
				<div className="max-w-6xl mx-auto flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white pl-2 pr-3">
					<Button onClick={handleBackPage} variant={"link"} className="w-0">
						<ChevronLeft className=" text-gray-normal" />
					</Button>

					<p className="text-gray-normal font-semibold">Detail</p>

					<Heart className="w-4 h-4 text-gray-normal" />
				</div>
			</div>

			{isLoading && <CoffeDetailSkeleton />}

			{coffeeDetail && (
				<div className="max-w-6xl mx-auto mt-3 pb-16 md:mt-12 md:pb-0 lg:mt-6">
					<ScrollArea style={{ height: "calc(100vh - 88px)" }}>
						<div className="md:grid md:grid-cols-2 md:items-center">
							<div className="relative mx-4">
								<div className="w-full h-52 absolute top-0 left-0 bg-radial-[at_10%_100%] from-[#111111] to-black to-100% rounded-2xl opacity-10 md:h-96" />
								<img
									src={coffeeDetail?.image}
									alt={`Coffee - ${coffeeDetail?.title}`}
									className="w-full h-52 rounded-2xl object-cover md:h-96"
								/>
							</div>

							<div>
								<div className="flex justify-between mt-4 px-4">
									<div>
										<h1 className="text-xl text-gray-normal font-semibold mb-1 lg:text-4xl">
											{coffeeDetail?.title}
										</h1>
										<h2 className="text-xs text-lighter mb-3">
											{category}
										</h2>
										<p className="space-x-1">
											<span className="text-xl text-yellow-400">
												★
											</span>
											<span className="font-semibold text-gray-normal">
												4.8
											</span>
											<span className="text-xs text-lighter">
												(280)
											</span>
										</p>
									</div>
									<div className="flex items-center gap-3">
										<img
											src={DeliveryIcon}
											alt="Delivery Icon"
											className="w-9 h-9"
										/>
										<img
											src={BeanIcon}
											alt="Delivery Icon"
											className="w-9 h-9"
										/>
										<img
											src={MilkIcon}
											alt="Delivery Icon"
											className="w-9 h-9"
										/>
									</div>
								</div>

								<Separator className="max-w-10/12 mx-auto my-4 " />

								<div className="space-y-2 px-4">
									<h2 className="text-xl text-gray-normal font-semibold">
										Description
									</h2>
									<p className="text-sm text-lighter font-light">
										{coffeeDetail?.description}
									</p>
								</div>

								<div className="space-y-4 mt-6 px-4">
									<h2 className="text-xl text-gray-normal font-semibold">
										Size
									</h2>
									<div className="grid grid-cols-3 gap-x-4">
										<Button
											variant={"outline"}
											data-active={false}
											className="data-[active=true]:bg-salmon data-[active=true]:border-brown data-[active=true]:text-brown hover:cursor-pointer"
										>
											S
										</Button>
										<Button
											variant={"outline"}
											data-active={true}
											className="data-[active=true]:bg-salmon data-[active=true]:border-brown data-[active=true]:text-brown hover:cursor-pointer"
										>
											M
										</Button>
										<Button
											variant={"outline"}
											data-active={false}
											className="data-[active=true]:bg-salmon data-[active=true]:border-brown data-[active=true]:text-brown hover:cursor-pointer"
										>
											L
										</Button>
									</div>
								</div>
							</div>
						</div>
					</ScrollArea>
				</div>
			)}

			<div className="w-full bg-white rounded-t-2xl mt-6 py-5 px-4 fixed bottom-0 left-0 right-0">
				<div className="max-w-6xl mx-auto grid grid-cols-3 items-center">
					<div>
						<h2 className="text-sm text-gray-normal">Price</h2>
						<p className="text-lg text-brown font-semibold">
							{isLoading ? (
								<Skeleton className="w-12 h-7 rounded-lg" />
							) : (
								"$ 4.53"
							)}
						</p>
					</div>
					<div className="col-span-2">
						<Button
							variant={"outline"}
							className="w-full bg-brown border-brown text-white font-semibold hover:cursor-pointer"
						>
							Buy Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
