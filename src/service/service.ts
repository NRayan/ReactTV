import axios from "axios";

export const requester = axios.create({
	baseURL: " https://api.tvmaze.com/",
});