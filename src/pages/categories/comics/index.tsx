import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api";
import Hero from "../components/Hero";
import { ComicsResult, ComicsType } from "../../../types";
import HeroSkeleton from "../components/Hero/HeroSkeleton";
import ComicsList from "./components/ComicsList";

export default function ComicsPage() {
	const { data: comics, isLoading } = useQuery<ComicsType>({
		queryKey: ["comics"],
		queryFn: () => api.get("comics").then((res) => res.data),
	});

	const handleSetHeroComic = (data: Array<ComicsResult> | undefined) => {
		if (!data || data.length === 0) {
			return undefined;
		}

		const filterResults =
			comics?.data?.results.filter(
				(comic) => !comic.thumbnail.path.includes("image_not_available")
			) || [];

		if (filterResults?.length === 0) {
			return undefined;
		}
		const randomNumber = Math.floor(Math.random() * filterResults.length);

		return filterResults[randomNumber] || [];
	};
	console.log(comics?.data?.results);
	return (
		<>
			{/* Hero Skeleton */}
			{isLoading && <HeroSkeleton />}
			<Hero heroComic={handleSetHeroComic(comics?.data?.results)} />

			<ComicsList results={comics?.data?.results} />
		</>
	);
}
