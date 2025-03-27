import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const CoffePage = lazy(() => import("../pages/coffePage"));
const CoffeeDetail = lazy(() => import("../pages/coffePage/coffeeDetail"));
const NotFound = lazy(() => import("../pages/notFound"));

export default function AppRoutes() {
	return (
		<Routes>
			<Route index path="/" element={<Home />} />

			<Route path="/coffee/:category" element={<CoffePage />} />
			<Route path="/coffee/:category/:id" element={<CoffeeDetail />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
