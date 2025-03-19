import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Products = lazy(() => import("../pages/categories/comics"));
const ProductDetail = lazy(() => import("../pages/categories/productdetail"));
const NotFound = lazy(() => import("../pages/notFound"));

export default function AppRoutes() {
	return (
		<Routes>
			<Route index path="/" element={<Products />} />
			<Route path="product/:id" element={<ProductDetail />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
