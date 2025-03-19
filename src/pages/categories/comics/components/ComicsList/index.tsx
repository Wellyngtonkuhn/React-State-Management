import { Link } from "react-router-dom";
import { ComicsResult, PriceEnum } from "../../../../../types";

type Props = {
	results: Array<ComicsResult> | undefined;
};

export default function ComicsList({ results }: Props) {
	const handleGeneretaStars = () => {
		const stars = Math.floor(Math.random() * 6);

		return stars;
	};

	const handleGeneretaRating = (): number => {
		const rating = Math.floor(Math.random() * 1000);

		return rating;
	};
	return (
		<section className="w-full  mt-20">
			<div className="w-full h-36 flex items-center justify-center mb-10 bg-amber-500">
				<h2 className="text-3xl font-medium">Latest Comics</h2>
			</div>
			<div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
				{results &&
					results?.length > 0 &&
					results.map((comic, index) => {
						const stars = handleGeneretaStars(); // Gera o número de estrelas para cada comic
						const maxStars = 5;
						return (
							<div
								className="min-h-96 flex flex-col justify-between bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all space-y-2"
								key={index}
							>
								<div className="relative">
									<img
										src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
										alt="Product"
										className="w-full h-52 object-cover"
									/>

									{comic?.prices.some(
										({ type }) =>
											type === PriceEnum.DIGITAL_PURCHASE_PRICE
									) && (
										<span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
											Sale
										</span>
									)}
								</div>
								<h3 className="text-xl font-bold text-gray-900 px-2 line-clamp-2">
									{comic.title}
								</h3>
								<div className="flex justify-between items-center px-2">
									<div className="space-y-1">
										<p className="text-xl font-bold text-gray-900">
											{comic?.prices.find(
												({ type }) =>
													type ===
													PriceEnum.DIGITAL_PURCHASE_PRICE
											)?.price
												? new Intl.NumberFormat("en-US", {
														style: "currency",
														currency: "USD",
												  }).format(
														comic?.prices.find(
															({ type }) =>
																type ===
																PriceEnum.DIGITAL_PURCHASE_PRICE
														)?.price ?? 0 // Usando `0` como valor padrão caso seja undefined
												  )
												: new Intl.NumberFormat("en-US", {
														style: "currency",
														currency: "USD",
												  }).format(
														comic?.prices.find(
															({ type }) =>
																type ===
																PriceEnum.PRINT_PRICE
														)?.price ?? 0 // Usando `0` como valor padrão caso seja undefined
												  )}
										</p>

										<p className="text-sm text-gray-500 line-through">
											{comic?.prices.some(
												({ type }) =>
													type ===
													PriceEnum.DIGITAL_PURCHASE_PRICE
											) && // Verifica se existe um preço de promoção
												comic?.prices.map(({ price, type }) => {
													if (type === PriceEnum.PRINT_PRICE) {
														return new Intl.NumberFormat(
															"en-US",
															{
																style: "currency",
																currency: "USD",
															}
														).format(price);
													}
													return null; // Retorna null para outros tipos
												})}
										</p>
									</div>

									<div className="flex items-center gap-1">
										<div className="text-yellow-400">
											{Array.from({ length: stars }, (_, index) => (
												<span key={index}>★</span>
											))}
										</div>
										<div className="text-gray-300">
											{Array.from(
												{
													length: maxStars - stars,
												},
												(_, index) => (
													<span key={index}>★</span>
												)
											)}
										</div>

										<span className="text-sm text-gray-600 ml-1">
											({handleGeneretaRating()})
										</span>
									</div>
								</div>

								<Link
									to={`product/${comic?.id}`}
									className="w-full bg-black text-center hover:bg-[#C00207] text-white font-medium px-6 py-2 rounded-lg transition-colors hover:cursor-pointer"
								>
									Add to Cart
								</Link>
							</div>
						);
					})}
			</div>
		</section>
	);
}
