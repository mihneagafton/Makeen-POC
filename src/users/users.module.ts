import { Module } from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';
import { UserController } from 'src/users/controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UsersModule {}
