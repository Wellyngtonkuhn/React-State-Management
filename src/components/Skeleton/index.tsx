import { twMerge } from "tailwind-merge";

type Props = {
	width?: string;
	height?: string;
};

export default function Skeleton({ width, height }: Props) {
	return (
		<div role="status" className="animate-pulse">
			<div className={twMerge("bg-gray-200 rounded", width, height)} />
		</div>
	);
}
