import Skeleton from "@/components/Skeleton";
import { Separator } from "@/components/ui/separator";

export default function CoffeeDetailSkeleton() {
	return (
		<section className="w-full h-screen bg-light">
			<div className="max-w-6xl mx-auto mt-3 pb-16 md:mt-12 md:pb-0 lg:mt-6">
				<div className="md:grid md:grid-cols-2 md:items-center">
					<div className="relative mx-4">
						<Skeleton className="w-full h-52 rounded-2xl md:h-96" />
					</div>

					<div>
						<div className="flex justify-between mt-4 px-4">
							<div>
								<Skeleton className="w-28 h-7 rounded-lg mb-1" />
								<Skeleton className="w-10 h-4 rounded-lg" />
								<div className="flex items-center gap-1 mt-3">
									<Skeleton className="w-5 h-5 rounded" />
									<Skeleton className="w-7 h-5 rounded-lg" />
									<Skeleton className="w-8 h-5 rounded-lg" />
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Skeleton className="w-8 h-8 rounded-lg" />
								<Skeleton className="w-8 h-8 rounded-lg" />
								<Skeleton className="w-8 h-8 rounded-lg" />
							</div>
						</div>

						<Separator className="max-w-10/12 mx-auto my-4 " />

						<div className="space-y-2 px-4">
							<h2 className="text-xl text-gray-normal font-semibold">
								Description
							</h2>

							<Skeleton className="w-full h-16 rounded-lg" />
						</div>

						<div className="space-y-4 mt-6 px-4">
							<h2 className="text-xl text-gray-normal font-semibold">
								Size
							</h2>
							<div className="grid grid-cols-3 gap-x-4">
								<Skeleton className=" h-10 rounded-lg" />
								<Skeleton className=" h-10 rounded-lg" />
								<Skeleton className=" h-10 rounded-lg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
