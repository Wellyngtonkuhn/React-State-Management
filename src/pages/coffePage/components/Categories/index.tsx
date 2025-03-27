import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CategoryType } from "@/types";
import { Link } from "react-router-dom";

export default function Categories({ category: activeCategory }: CategoryType) {
	const categories = ["hot", "iced"];

	const handleCheckActiveLink = (category: string): boolean => {
		return activeCategory === category;
	};
	return (
		<ScrollArea className="max-w-6xl mx-auto rounded-md border">
			<div className="p-4">
				<h3 className="mb-4 text-sm font-medium leading-none sm:text-base">
					Categories
				</h3>
				<div className="flex items-center justify-end gap-4">
					{categories.map((category, index) => (
						<>
							<Button
								key={index}
								className="text-sm"
								asChild
								variant={"outline"}
							>
								<Link
									data-active={handleCheckActiveLink(category)}
									className="data-[active=true]:bg-brown data-[active=true]:border-brown"
									to={`/coffee/${category}`}
								>
									{category}
								</Link>
							</Button>
						</>
					))}
				</div>
			</div>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	);
}
