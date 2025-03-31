import { Bell, Heart, Home, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CategoriesEnum } from "@/types";

export default function BottomTabBar() {
	return (
		<div className="w-full h-24 flex items-center fixed bottom-0 left-0 right-0 bg-white z-50">
			<nav className="w-full max-w-6xl mx-auto p-6">
				<ul className="flex items-center justify-between">
					<li>
						<Button variant={"link"} asChild>
							<Link
								to={`/coffee/${CategoriesEnum.HOT}`}
								className="bg-brown text-white"
							>
								<Home />
							</Link>
						</Button>
					</li>
					<li>
						<Button variant={"link"} asChild>
							<Link to={""}>
								<Heart />
							</Link>
						</Button>
					</li>
					<li>
						<Button variant={"link"} asChild>
							<Link to={"/coffee/order"}>
								<ShoppingBag />
							</Link>
						</Button>
					</li>
					<li>
						<Button variant={"link"} asChild>
							<Link to={""}>
								<Bell />
							</Link>
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
}
