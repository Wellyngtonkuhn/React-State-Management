import Skeleton from "../../../../../components/Skeleton";

export default function HeroSkeleton() {
	return (
		<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center px-4">
			<Skeleton width="w-full" height="h-60 md:min-h-screen" />
			<div className="space-y-4 mt-5 md:mt-0">
				<Skeleton width="w-20" height="h-4" />
				<Skeleton width="w-full" height="h-20 md:h-24" />
				<Skeleton width="w-20" height="h-6" />
				<Skeleton width="w-full" height="h-16" />
				<Skeleton width="w-38" height="h-10 md:h-14" />
			</div>
		</div>
	);
}
