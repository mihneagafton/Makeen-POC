import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/models/user.entity';
import { UserService } from 'src/users/services/user.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() user: UserEntity): Observable<UserEntity> {
        return this.userService.createUser(user);
    }

    @Get()
    findAll(): Observable<UserEntity[]> {
        return this.userService.findAllUsers();
    }

    @Get(':id')
    findById(@Param('id') id: number): Observable<UserEntity> {
        return this.userService.findUserById(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() user: UserEntity
    ): Observable<UpdateResult> {
        return this.userService.updateUser(id, user);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.userService.deleteUser(id);
    }
}
