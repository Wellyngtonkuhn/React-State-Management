import axios from "axios";

const api = axios.create({
	baseURL: "http://gateway.marvel.com/v1/public",
	params: {
		apikey: import.meta.env.VITE_MARVEL_PUBLIC_KEY,
	},
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
