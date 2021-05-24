import { BASE_URL } from "./config";
import axios from "axios";
// BASE_URL = 'http://192.168.0.9:3001

export function User(iSmultipart = false) {
	const url = BASE_URL + "/user";
	return {
		login: async (name, password) => {
			let status, data;
			await axios
				.post(
					url + "/auth/singin",
					JSON.stringify({ name, password }),
					{
						headers: {
							"Content-Type": "application/json",
							// Accept: "application/json",
						},
					}
				)
				.then((resp) => {
					status = resp.status;
					data = resp.data
					console.log('resp', resp);
				})
				.catch((err) => {
					err = err.response
					data = err.data;
					status= err.status
				});
			return { status, data };
		},
	};
}
