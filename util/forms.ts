import * as Interfaces from "@/util/interfaces"

export const LoginForm: Interfaces.ILogin = {
	username: "",
	password: ""
}

export const SignInForm: Interfaces.IUser = {
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
	category_id: 0,
	image: {
		imgUrl: "",
		name: "",
		type: ""
	}
}