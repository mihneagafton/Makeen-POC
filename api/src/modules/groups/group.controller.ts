import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Group } from 'src/modules/groups/group.entity';
import { GroupService } from 'src/modules/groups/group.service';

@Controller('groups')
export class GroupController {
    constructor(private groupService : GroupService) {}

    @Post()
    async create(@Body() group: Group): Promise<Group> {
        return await this.groupService.create(group)
    }

    @Get()
    async findAll(): Promise<Group[]> {
        return await this.groupService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Group> {
        return await this.groupService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() group: Group): Promise<Group> {
        const { numberOfAffectedRows, updatedGroup } = await this.groupService.update(id, group);

        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Group doesn\'t exist');
        }

        return updatedGroup;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        const deleted = await this.groupService.delete(id);

        if (deleted === 0) {
            throw new NotFoundException('This Group doesn\'t exist');
        }

        return 'Successfully deleted';
    }
}
