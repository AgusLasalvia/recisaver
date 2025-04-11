import * as Interface from "@/util/interfaces"


export const submitLogin = async (apiUrl: string, form: Interface.ILogin) => {
	if (!apiUrl) {
		alert("API_URL no está definido en las variables de entorno.");
		return;
	}

	const response = await fetch(`${apiUrl}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},

		body: JSON.stringify({
			username: form.username,
			password: form.password
		})

	});

	if (response.status == 404) {
		return null;
	}

	return await response.json();


};


export const submitSignUp = async (apiUrl: string, form: Interface.IUser) => {
	const response = await fetch(`${apiUrl}/user/new`, {
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

	if (response.status == 404) {
		return null
	}
	return await response.json();
}
