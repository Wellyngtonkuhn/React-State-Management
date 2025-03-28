import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));
const CoffeePage = lazy(() => import("@/pages/coffeePage"));
const CoffeeDetail = lazy(() => import("@/pages/coffeePage/coffeeDetail"));
const Orderpage = lazy(() => import("@/pages/order"));
const NotFound = lazy(() => import("@/pages/notFound"));

export default function AppRoutes() {
	return (
		<Routes>
			<Route index path="/" element={<Home />} />

			<Route path="/coffee/:category" element={<CoffeePage />} />
			<Route path="/coffee/:category/:id" element={<CoffeeDetail />} />
			<Route path="/coffee/order" element={<Orderpage />} />

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
