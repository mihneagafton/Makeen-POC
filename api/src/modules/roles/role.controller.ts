import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
    constructor(private roleService : RoleService) {}

    @Post()
    async create(@Body() role: Role): Promise<Role> {
        return await this.roleService.create(role)
    }

    @Get()
    async findAll(): Promise<Role[]> {
        return await this.roleService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Role> {
        return await this.roleService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() role: Role): Promise<Role> {
        const { numberOfAffectedRows, updatedRole } = await this.roleService.update(id, role);

        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Role doesn\'t exist');
        }

        return updatedRole;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        const deleted = await this.roleService.delete(id);

        if (deleted === 0) {
            throw new NotFoundException('This Role doesn\'t exist');
        }

        return 'Successfully deleted';
    }
}
