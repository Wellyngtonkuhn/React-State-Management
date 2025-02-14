import { NavLink, Outlet } from "react-router-dom";

export default function DashboadLayout() {
	return (
		<section className="flex gap-4">
			<aside className="bg-red-500 py-4 px-6">
				<ul>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "text-amber-50 font-bold" : ""
							}
							to="perfil"
						>
							perfil
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "text-amber-50 font-bold" : ""
							}
							to="settings"
						>
							Setting
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "text-amber-50 font-bold" : ""
							}
							to="payments"
						>
							Payments
						</NavLink>
					</li>
				</ul>
			</aside>
			<main className="bg-amber-600">
				<h1>Bem vindo Wellyngton Kuhn</h1>
				<div>
					<Outlet />
				</div>
			</main>
		</section>
	);
}
