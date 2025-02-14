import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header className="bg-white">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<Link to="/">Your Company Logo</Link>
				</div>

				<div className="hidden lg:flex lg:gap-x-12">
					<div className="relative">
						<Link
							to="/"
							className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
						>
							Home
						</Link>
					</div>

					<Link to="/about" className="text-sm/6 font-semibold text-gray-900">
						About
					</Link>
					<Link
						to="/dashboard"
						className="text-sm/6 font-semibold text-gray-900"
					>
						Dashboard
					</Link>
				</div>
			</nav>
		</header>
	);
}
