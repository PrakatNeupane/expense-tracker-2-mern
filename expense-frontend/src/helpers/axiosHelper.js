import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userApi = rootUrl + "/users";
const loginApi = rootUrl + "/users/login";
const expAPI = rootUrl + "/expenses";

export const postRegister = formDt => {
	try {
		return axios.post(userApi, formDt);
	} catch (error) {
		const data = {
			status: "error",
			message: error.message,
		};
		return {
			data,
		};
	}
};

export const postLogin = formDt => {
	try {
		return axios.post(loginApi, formDt);
	} catch (error) {
		const data = {
			status: "error",
			message: error.message,
		};
		return {
			data,
		};
	}
};

export const postExpense = async formDt => {
	try {
		const user = JSON.parse(sessionStorage.getItem("user"))
		const { data } = await axios.post(expAPI, formDt, {
			headers: {
				Authorization: user._id,
			}
		})
		return data;
	} catch (error) {
		console.log(error);
		return {
			data: {
				status: "error",
				message: error.message,
			},
		};
	}
};
