import Skeleton from "@/components/Skeleton";

export default function CoffeeistSkeleton() {
	return (
		<div className="max-w-6xl mx-auto grid grid-cols-2 gap-3.5 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
			{Array.from({ length: 5 }).map((_, index) => (
				<div key={index} className="shadow rounded-2xl p-2 space-y-4">
					<Skeleton width="w-full" height="h-32" />
					<div className="space-y-2">
						<Skeleton width="w-24" height="h-5" />
						<Skeleton width="w-full" height="h-12" />
					</div>
					<div className="flex items-center justify-between">
						<Skeleton width="w-12" height="h-7" />
						<Skeleton width="w-10" height="h-8" />
					</div>
				</div>
			))}
		</div>
	);
}
