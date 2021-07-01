import { BASE_URL } from "./config";
import axios from "axios";
// BASE_URL = 'http://192.168.0.9:3001

export function Chat(iSmultipart = false) {
	const url = BASE_URL + "/chat";
	return{

		getallforos: async () => {
			let status, data;
			await axios
				.get(
					url + "/all",
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


		createforos: async (name,description) => {
			let status, data;
			await axios
				.post(
					url,
					JSON.stringify({name , description, date: new Date()}),
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


	}
}

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



		Register: async (name, password, password2, email, photo) => {
			let status, data;
			await axios
				.post(
					url + "/auth/singup",
					JSON.stringify({ name, email, password, password2, photo }),
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



export function message(iSmultipart = false) {
	const url = BASE_URL + "/message";
	return{

		getmessageforo: async (id) => {
			let status, data;
			await axios
				.get(
					url + "?chat=" + id,
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


		sendmessageforo: async (id, message) => {
			let status, data;
			await axios
				.post(
					url,
					JSON.stringify({chat:id, message}),
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
	}
}