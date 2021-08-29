import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers';
import { rolesUsersProviders } from './roles-users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    UserService,
    ...usersProviders,
    ...rolesUsersProviders
  ],
  controllers: [UserController]
})
export class UsersModule {}
