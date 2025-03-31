import { useQuery } from "@tanstack/react-query";
import CoffeeList from "./components/CoffeeList";
import { CategoryType, CoffeType } from "@/types";
import api from "@/services/api";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import { useParams } from "react-router-dom";
import CoffeeListSkeleton from "./components/CoffeeListSkeleton";
import BottomTabBar from "@/components/BottomTabBar";

export default function CoffePage() {
	const { category } = useParams<CategoryType>();

	const { data: coffee, isLoading } = useQuery<CoffeType[]>({
		queryKey: ["coffee", category],
		queryFn: () => api.get(category as string).then((res) => res.data),
	});

	return (
		<>
			<Hero />
			<section className="w-full bg-light px-4 pb-4 pt-24 sm:pt-4">
				<Categories category={category!} />

				<section className="mt-4">
					{isLoading && <CoffeeListSkeleton />}
					<CoffeeList results={coffee} category={category!} />
				</section>
			</section>

			<BottomTabBar />
		</>
	);
}
