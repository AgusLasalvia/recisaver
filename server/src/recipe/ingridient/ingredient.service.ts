import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Injectable()
export class IngredientService {
	constructor(
		@InjectRepository(Ingredient)
		private ingredientRepository: Repository<Ingredient>,
	) { }

	async create(createIngredientDto: Ingredient): Promise<Ingredient> {
		const ingredient = this.ingredientRepository.create(createIngredientDto);
		return this.ingredientRepository.save(ingredient);
	}

	async findAll(): Promise<Ingredient[]> {
		return this.ingredientRepository.find({ relations: ['recipe'] });
	}

	async findOne(id: number): Promise<Ingredient> {
		const ingredient = await this.ingredientRepository.findOne({
			where: { id },
			relations: ['recipe'],
		});

		if (!ingredient) {
			throw new NotFoundException(`Ingredient with ID ${id} not found`);
		}

		return ingredient;
	}

	async update(id: number, updateIngredientDto: Ingredient): Promise<Ingredient> {
		const ingredient = await this.findOne(id);
		Object.assign(ingredient, updateIngredientDto);
		return this.ingredientRepository.save(ingredient);
	}

	async remove(id: number): Promise<void> {
		const result = await this.ingredientRepository.delete(id);
		if (result.affected === 0) {
			throw new NotFoundException(`Ingredient with ID ${id} not found`);
		}
	}
}
