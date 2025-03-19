import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api";
import Hero from "../components/Hero";
import { ComicsResult, ComicsType } from "../../../types";

export default function ComicsPage() {
	const { data: comics } = useQuery<ComicsType>({
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
		const randomNumber = Math.floor(Math.random() * filterResults!.length + 1);

		return filterResults![randomNumber] || [];
	};

	return (
		<>
			<Hero heroComic={handleSetHeroComic(comics?.data?.results)} />
		</>
	);
}
