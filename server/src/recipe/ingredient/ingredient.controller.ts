import { Controller, Get, Post, Body } from "@nestjs/common";
import { IngredientService } from "./ingredient.service";
import { Ingredient } from "./ingredient.entity";


@Controller()
export class IngredientController {
	constructor(private readonly ingredientService: IngredientService) { }


	@Post()
	async createIngredient(@Body() body: Ingredient) {
		this.ingredientService.create(body);
	}

	// @Get()
	// async getSpecificIngredient()
}