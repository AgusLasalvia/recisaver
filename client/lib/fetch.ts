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


export const submitNewRecipe = async (form: Interface.IRecipe) => {
  const formData = new FormData();
  formData.append('id', form.id?.toString() || '');
  formData.append('user_id', form.user_id.toString());
  formData.append('title', form.title);
  formData.append('description', form.description);
  formData.append('instructions', form.instructions);

  if (form.file.imgUrl) {
    const file = {
      uri: form.file.imgUrl,
      name: form.file.name || 'image.jpg',
      type: form.file.type || 'image/jpeg',
    };

    formData.append('file', file as any);
  }

  // Verificamos todo lo que hay en formData
  for (let pair of formData.entries()) {
    console.log(`${pair[0]}: ${JSON.stringify(pair[1])}`);
  }

  try {
    const response = await fetch(`${API_URL}/recipe/new`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to submit recipe');
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error: any) {
    console.error('Error:', error.message);
  }
};
