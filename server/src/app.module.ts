import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Providers
import { AppService } from './app.service';

// Controllers
import { AppController } from './app.controller';

// Modules
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RecipeModule } from './recipe/recipe.module';

// Entitys
import { Recipe } from './recipe/recipe.entity';
import { User } from './user/user.entity';


@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST || '127.0.0.1',
			port: Number(process.env.DB_PORT),
			username: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
			entities: [User, Recipe],
			synchronize: true,
		}),
		UserModule,
		AuthModule,
		RecipeModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
