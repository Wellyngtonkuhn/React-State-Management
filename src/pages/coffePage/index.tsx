import { useQuery } from "@tanstack/react-query";
import CoffeeList from "./components/CoffeeList";
import { CoffeType } from "@/types";
import api from "@/services/api";
import Hero from "./components/Hero";

export default function CoffePage() {
	const { data: coffee, isLoading } = useQuery<CoffeType[]>({
		queryKey: ["hot"],
		queryFn: () => api.get("hot").then((res) => res.data),
	});

	return (
		<>
			{/* Hero Skeleton */}
			{/* {isLoading && <HeroSkeleton />}
			// <Hero /> */}
			<Hero />
			<CoffeeList results={coffee} />
		</>
	);
}
