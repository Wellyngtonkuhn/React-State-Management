import { Link } from "react-router-dom";
import CoffeeImage from "../../assets/coffee.png";
import { CategoriesEnum } from "@/types";

export default function Home() {
	return (
		<section className="w-full h-screen bg-[#050505]">
			<div className="relative">
				<div className="w-full h-full absolute top-0 left-0 bg-linear-to-t from-0% from-[#050505] to-[#05050531] to-50%" />
				<img
					src={CoffeeImage}
					alt="Coffee Image"
					className="w-full h-screen object-contain"
				/>
				<div className="w-full mx-auto flex flex-col justify-center px-4 absolute bottom-16 left-0 sm:max-w-96 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
					<div className="space-y-2 mb-8 px-2">
						<h1 className="text-3xl text-white font-semibold text-center px-6">
							Fall in Love with Coffee in Blissful Delight!
						</h1>
						<p className="text-sm text-[#A2A2A2] text-center">
							Welcome to our cozy coffee corner, where every cup is a
							delightful for you.
						</p>
					</div>
					<Link
						to={`/coffee/${CategoriesEnum.HOT}`}
						className="w-full text-center text-white font-semibold rounded-2xl bg-brown py-2"
					>
						Get Started
					</Link>
				</div>
			</div>
		</section>
	);
}
