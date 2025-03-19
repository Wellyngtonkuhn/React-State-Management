import { Link } from "react-router-dom";
import { ComicsResult, CreatorsType } from "../../../../types";

export default function Hero({ heroComic }: { heroComic?: ComicsResult }) {
	if (!heroComic) return;
	const { id, creators, title, thumbnail, prices, description, format } = heroComic;

	const handleImageUrl = (path: string, extentiom: string): string => {
		return `${path}.${extentiom}`;
	};

	const handleListCreators = ({ items }: CreatorsType): string => {
		return items
			.map((creator, index) =>
				index === items.length - 1 ? `${creator.name}.` : `${creator.name},`
			)
			.join(" ");
	};

	return (
		<section className="w-full px-4">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
				<div>
					<img
						className="w-full h-60 object-cover md:min-h-screen"
						src={handleImageUrl(
							thumbnail?.path as string,
							thumbnail?.extension as string
						)}
					/>
				</div>
				<div className="mt-5 md:mt-0">
					<p className="text-xs text-black font-medium md:text-sm">{format}</p>
					<h1 className="text-4xl text-black text-left font-semibold mb-1 md:text-5xl">
						{title}
					</h1>
					<p className="text-[#9F9F9F] text-base mb-3.5 md:text-xl">
						{prices?.map(({ price }) =>
							new Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(price)
						)}
					</p>

					{creators && creators.items.length > 0 && (
						<p className="text-sm text-gray-700 font-medium mb-4">
							Criadores:{" "}
							<span className="font-normal">
								{handleListCreators(creators)}
							</span>
						</p>
					)}

					{description && (
						<p className="text-sx text-gray-700 mb-9">{description}</p>
					)}

					<Link
						className="text-base text-white font-semibold bg-black px-6 py-2 rounded shadow hover:text-black hover:bg-white transition delay-75 ease-in-out md:text-lg"
						to={`product/${id}`}
					>
						Comprar Agora
					</Link>
				</div>
			</div>
		</section>
	);
}
