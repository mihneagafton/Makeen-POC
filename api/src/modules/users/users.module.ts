import { Module } from '@nestjs/common';
import { UserService } from 'src/modules/users/user.service';
import { UserController } from 'src/modules/users/user.controller';
import { DatabaseModule } from 'src/modules/database/database.module';
import { usersProviders } from 'src/modules/users/users.providers';
import { rolesUsersProviders } from 'src/modules/users/roles-users.providers';

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
