import Constants from "expo-constants";
import * as Interface from "@lib/interfaces"

const { API_URL } = Constants.expoConfig?.extra as { API_URL: string }; // Aserción de tipo

export const submitLogin = async (form: Interface.ILogin) => {
	if (!API_URL) {
		alert("API_URL no está definido en las variables de entorno.");
		return;
	}

	const response = await fetch(`${API_URL}/auth/platform`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: form.username,
			password: form.password
		})
		,
	});


	return await response.json();
};


export const submitSignUp = async (form: Interface.IUser) => {
	const response = await fetch(`${API_URL}/user/new`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: form.email,
			password: form.password,
			email: form.email
		}),
	});

	if (!response.ok) {
		alert("error")
	}
}
