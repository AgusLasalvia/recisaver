import * as Interfaces from "@lib/interfaces"

export const LoginForm: Interfaces.ILogin = {
	username: "",
	password: ""
}

export const SignInForm: Interfaces.IUser = {
	id: null,
	username: "",
	password: "",
	email: ""
}

export const RecipeForm: Interfaces.IRecipe = {
	id: 0,
	user_id: 0,
	title: "",
	description: "",
	instructions: "",
	imgUrl: ""
}