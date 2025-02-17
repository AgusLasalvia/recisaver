import * as Interfaces from "@lib/interfaces"

export const login: Interfaces.ILogin = {
	username: "",
	password: ""
}

export const Recipe: Interfaces.IRecipe = {
	id: 0,
	user_id: 0,
	title: "",
	description: "",
	instructions: "",
	imgUrl: ""
}