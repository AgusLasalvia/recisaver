import Constants from "expo-constants";
import * as Interface from "./interfaces"

import { submitSignUp, submitLogin } from "./fetch/userFetch"
import { GetAllCategories } from "./fetch/categoryFetch"

const { API_URL } = Constants.expoConfig?.extra as { API_URL: string }; // Aserción de tipo




// User Fetch
export const SignUpFetch = async (form: Interface.IUser) => await submitSignUp(API_URL, form);

export const LoginFetch = async (form: Interface.ILogin) => await submitLogin(API_URL, form);

// Recipe Fetch
export const newRecipeFetch = async (form: Interface.IRecipe) => { }

export const getRecipeById = async (id: number) => { }

export const getRecipeCreatedByUser = async (userId: number) => { }

export const getDayRecomendationRecepie = async () => { }

// Favorites Fetch

export const getUserFavorites = async (userId: number) => { }

// Category Fetch

export const getCategories = async () => await GetAllCategories(API_URL);