import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Public } from 'src/modules/auth/public.decorator';
import { RolesUsers } from 'src/modules/users/roles-users.entity';
import { User } from 'src/modules/users/user.entity';
import { UserService } from 'src/modules/users/user.service';

@Controller('users')
export class UserController {
    constructor(private userService : UserService) {}

    @Public()
    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.userService.create(user)
    }

    @Public()
    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<User> {
        return await this.userService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User): Promise<User> {
        const { numberOfAffectedRows, updatedUser } = await this.userService.update(id, user);

        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This User doesn\'t exist');
        }

        return updatedUser;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        const deleted = await this.userService.delete(id);

        if (deleted === 0) {
            throw new NotFoundException('This User doesn\'t exist');
        }

        return 'Successfully deleted';
    }

    @Post('addRole')
    async addRole(@Body() rolesUsers: RolesUsers): Promise<RolesUsers> {
        return await this.userService.addRole(rolesUsers);
    }
}
