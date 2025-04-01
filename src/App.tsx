import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Toast } from "@/components/ui/toaster";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./context/CartProvider";

const queryClient = new QueryClient();
export default function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<QueryClientProvider client={queryClient}>
					<main>
						<AppRoutes />
						<Toast />
					</main>
				</QueryClientProvider>
			</CartProvider>
		</BrowserRouter>
	);
}
