import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	);
}
