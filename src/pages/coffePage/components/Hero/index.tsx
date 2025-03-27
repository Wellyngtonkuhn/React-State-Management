import PromotionBanner from "@/assets/Banner.png";

export default function Hero() {
	return (
		<section className="w-full h-52 bg-radial-[at_100%_10%] from-[#111111] to-black to-100% px-4 relative">
			<div className="sm:flex sm:items-start justify-around">
				<div className="space-y-2 pt-16 pl-6">
					<p className="text-xs text-lighter">Welcome to</p>
					<h1 className="text-xl text-lighter-active font-semibold sm:text-4xl">
						Amber Roast
					</h1>
				</div>
				<div className="mt-8 flex justify-center">
					<img src={PromotionBanner} alt="Promotion Banner" />
				</div>
			</div>
		</section>
	);
}
