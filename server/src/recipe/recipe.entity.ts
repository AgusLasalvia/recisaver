import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ingredient } from "./ingridient/ingredient.entity"

@Entity()
export class Recipe {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@OneToMany(() => Ingredient, (ingredient) => ingredient.recipe, { cascade: true })
	ingredients: Ingredient[];
}
