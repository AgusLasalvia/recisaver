export const GetAllCategories = async (apiUrl: string) => {
	const response = await fetch(`${apiUrl}/category/all`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
	return await response.json();

}