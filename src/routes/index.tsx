import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import DashboadLayout from "../layout/DashboardLayout";
import Perfil from "../components/Dasboard/Perfil";
import Settings from "../components/Dasboard/Settings";
import Payments from "../components/Dasboard/Payments";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));

export default function AppRoutes() {
	return (
		<Routes>
			<Route index path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="dashboard" element={<DashboadLayout />}>
				<Route path="perfil" element={<Perfil />} />
				<Route path="settings" element={<Settings />} />
				<Route path="payments" element={<Payments />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
