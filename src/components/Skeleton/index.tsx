import { twMerge } from "tailwind-merge";

type Props = {
	width?: string;
	height?: string;
	className?: string;
};

export default function Skeleton({ width, height, className }: Props) {
	return (
		<div role="status" className="animate-pulse">
			<div className={twMerge("bg-gray-200 rounded", width, height, className)} />
		</div>
	);
}
