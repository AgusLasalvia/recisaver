// import * as Interface from "@/util/interfaces"

// export const submitNewRecipe = async (form: Interface.IRecipe) => {
// 	const formData = new FormData();
// 	formData.append('id', form.id?.toString() || '');
// 	formData.append('user_id', form.user_id.toString());
// 	formData.append('title', form.title);
// 	formData.append('description', form.description);
// 	formData.append('instructions', form.instructions);

// 	// if (form.file.imgUrl) {
// 	// 	const file = {
// 	// 		uri: form.file.imgUrl,
// 	// 		name: form.file.name || 'image.jpg',
// 	// 		type: form.file.type || 'image/jpeg',
// 	// 	};

// 	// 	formData.append('file', file as any);
// 	// }

// 	// // Verificamos todo lo que hay en formData
// 	// for (let pair of formData.entries()) {
// 	// 	console.log(`${pair[0]}: ${JSON.stringify(pair[1])}`);
// 	// }

// 	try {
// 		const response = await fetch(`${API_URL}/recipe/new`, {
// 			method: 'POST',
// 			body: formData,
// 			headers: {
// 				'Accept': 'application/json',
// 			},
// 		});

// 		if (!response.ok) {
// 			throw new Error('Failed to submit recipe');
// 		}

// 		const data = await response.json();
// 		console.log('Success:', data);
// 	} catch (error: any) {
// 		console.error('Error:', error.message);
// 	}
// };



// export const getDayRecomendationRecepie = async () => {
// 	const response = await fetch(`${API_URL}/recipe/recomendation`, {
// 		headers: { 'Accept': 'application/json' },
// 		method: "GET"
// 	})

// }
