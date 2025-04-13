export const getRecipeRecomendations = async (apiUrl: string) => {
	const response = await fetch(`${apiUrl}/recipe/random`, {
		headers: {
			"Content-Type": "application/json"
		},
		method: "GET",
	})

	return await response.json();
};