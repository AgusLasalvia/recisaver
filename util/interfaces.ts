export interface ILogin {
	username: string,
	password: string
}

export interface IUser {
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
	file: {
		imgUrl: string,
		name: string,
		type: string
	}

}