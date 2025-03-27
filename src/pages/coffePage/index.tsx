import { useQuery } from "@tanstack/react-query";
import api from "../../services/api";
import CoffeeList from "./components/CoffeeList";
import { CoffeType } from "../../types";

export default function CoffePage() {
	const { data: coffee, isLoading } = useQuery<CoffeType[]>({
		queryKey: ["hot"],
		queryFn: () => api.get("hot").then((res) => res.data),
	});

	return (
		<>
			{/* Hero Skeleton */}
			{/* {isLoading && <HeroSkeleton />}
			<Hero /> */}

			<CoffeeList results={coffee} />
		</>
	);
}
