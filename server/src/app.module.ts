import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.model';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST || '127.0.0.1',
			port: parseInt(process.env.DB_PORT as string, 10) || 3306,
			username: process.env.DB_USER || 'sorvis',
			password: process.env.DB_PASS || 'sorvis1234',
			database: process.env.DB_NAME || 'sorvis',
			entities: [User],
			synchronize: true,
		}),
		UserModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
