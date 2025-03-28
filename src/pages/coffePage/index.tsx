import { useQuery } from "@tanstack/react-query";
import CoffeeList from "./components/CoffeeList";
import { CategoryType, CoffeType } from "@/types";
import api from "@/services/api";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import { useParams } from "react-router-dom";
import CoffeListSkeleton from "./components/CoffeListSkeleton";

export default function CoffePage() {
	const { category } = useParams<CategoryType>();

	const { data: coffee, isLoading } = useQuery<CoffeType[]>({
		queryKey: ["coffee", category],
		queryFn: () => api.get(category as string).then((res) => res.data),
	});

	return (
		<>
			<Hero />
			<section className="mt-24 mb-4 px-4 sm:my-10">
				<Categories category={category!} />
			</section>
			<section className="mb-4">
				{isLoading && <CoffeListSkeleton />}
				<CoffeeList results={coffee} category={category!} />
			</section>
		</>
	);
}
