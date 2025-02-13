import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { get } from "http";


@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Post("new")
	async create(@Body() userData: User): Promise<User | null> {
		return this.userService.createUser(userData);
	}

	@Get('all')
	async findAll(): Promise<User[]> {
		return this.userService.findAll();
	}

}