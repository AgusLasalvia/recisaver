import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm"

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	username: string

	@Column()
	password: string

	@Column({ unique: true })
	email: string

}