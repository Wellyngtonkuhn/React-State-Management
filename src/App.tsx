import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
			<Footer />
		</BrowserRouter>
	);
}
