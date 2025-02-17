export interface ILogin {
	username: string,
	password: string
}

export interface User {
	id: number,
	username: string,
	password: string
}

export interface IRecipe {
	id: number | null,
	user_id: number
	title: string,
	description: string,
	instructions: string,
	imgUrl: string
}