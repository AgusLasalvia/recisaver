export interface ILogin {
	username: string,
	password: string
}

export interface IUser {
	id: number | null | undefined,
	username: string,
	password: string,
	email: string
}

export interface IRecipe {
	id: number | null,
	user_id: number
	title: string,
	description: string,
	instructions: string,
	imgUrl: string
}