import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Recipe } from "../recipe.entity";

@Entity()
export class Ingredient {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	quantity: string

	@ManyToOne(() => Recipe, (recipe) => recipe.ingredients, { onDelete: "CASCADE" })
	recipe: Recipe
}