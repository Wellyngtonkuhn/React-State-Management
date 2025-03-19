import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	const [isUserActionsMenuOpen, setIsUserActionsMenuOpen] = useState<boolean>(false);

	const handeOpenUserMenu = () => {
		setIsUserActionsMenuOpen((prev) => !prev);
	};
	return (
		<header className="w-full bg-white">
			<div className="max-w-6xl mx-auto flex items-center justify-between py-6 px-4 relative">
				<div className="flex lg:flex-1">
					<Link to="/">
						<img
							src="/logo.png"
							alt="Logo da Marvel Shop"
							className="w-28 h-16 md:w-44 md:h-16"
						/>
					</Link>
				</div>
				<nav className="flex items-center gap-10 md:gap-20">
					<ul>
						<li>
							<Link to="/" className="font-medium text-black">
								Comic
							</Link>
						</li>
					</ul>
					<div className="hidden sm:flex items-center gap-x-4 md:gap-x-5">
						<button>
							<User size={18} />
						</button>
						<button>
							<Search size={18} />
						</button>
						<button>
							<Heart size={18} />
						</button>
						<button>
							<ShoppingBag size={18} />
						</button>
					</div>

					<div className="flex items-center gap-2 sm:hidden">
						<button>
							<ShoppingBag size={17} />
						</button>
						<button onClick={handeOpenUserMenu}>
							{isUserActionsMenuOpen ? <X size={18} /> : <Menu size={18} />}
						</button>
					</div>

					{/* Menu mobile */}
				</nav>
				{isUserActionsMenuOpen && (
					<div className="flex items-center gap-x-4 sm:hidden absolute top-20 right-4 shadow rounded-sm px-4 py-2">
						<button>
							<User size={18} />
						</button>
						<button>
							<Search size={18} />
						</button>
						<button>
							<Heart size={18} />
						</button>
					</div>
				)}
			</div>
		</header>
	);
}
