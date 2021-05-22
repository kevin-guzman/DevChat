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
			// await fetch(url + "/auth/singin.json", {
			// 	body: JSON.stringify({ name: "re", password: "re" }),
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 		"Accept": "application/json",
			// 	},
			// })
				.then((resp) => {
					status = resp.status;
					data = resp.data;
					return resp;
				})
				// .then((resp) => resp.json())
				// .then((resp) => {
				// 	data = resp;
				// })
				.catch((err) => console.log("Error", err));
			return { status, data };
			// return await fetch(url+'/auth/singin', {body:JSON.stringify({name, password})})
		},
	};
}
