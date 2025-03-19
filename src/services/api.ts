import axios from "axios";

const api = axios.create({
	baseURL: `http://gateway.marvel.com/v1/public/`,
	params: {
		apikey: "28af6483b44ec1d0ba8ed1332f6b0312",
	},
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
