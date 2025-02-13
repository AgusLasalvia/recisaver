import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../user/user.entity";


@Injectable()
export class AuthService {
	constructor(@InjectRepository(User) private userRepository: Repository<User>) {

	}


	async login(username: string, password: string): Promise<User | null
	> {
		const user = await this.userRepository.findOne({
			where: {
				username: username,
				password: password
			}
		})

		if (!user)
			throw new NotFoundException("User Not Found")

		return user;
	}

}