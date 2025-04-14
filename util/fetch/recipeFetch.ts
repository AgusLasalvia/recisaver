import axios from 'axios';

export const getRecipeRecomendations = async (apiUrl: string) => {
	const response = await axios.get(`${apiUrl}/recipe/random`, {
		headers: {
			"Content-Type": "application/json"
		},
	
	})

	return await response.data;
};


export const addRecipe = async (apiUrl: string, recipe: any) => {
	console.log(recipe)
	const response = await axios.post(`${apiUrl}/recipe/create`, recipe, {
		headers: {
			'Content-Type': 'multipart/form-data',
			Accept: 'application/json',
		},
	});

	return await response.data;
};




