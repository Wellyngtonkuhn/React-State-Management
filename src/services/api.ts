import axios from "axios";

const api = axios.create({
	baseURL: "https://api.sampleapis.com/coffee/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
