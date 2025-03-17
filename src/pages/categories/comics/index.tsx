import { useQuery } from "@tanstack/react-query";
import api from "../../../services/api";

export default function ComicsPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["comics"],
		queryFn: () => api.get("comics").then((res) => res.data),
	});
	console.log(data);
	return <div>comics Page</div>;
}
