import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GroupEntity } from 'src/models/group.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { GroupService } from 'src/groups/services/group.service';

@Controller('groups')
export class GroupController {
    constructor(private groupService: GroupService) {}

    @Post()
    create(@Body() group: GroupEntity) : Observable<GroupEntity> {
        return this.groupService.createGroup(group);
    }

    @Get()
    findAll() : Observable<GroupEntity[]> {
        return this.groupService.findAllGroups();
    }

    @Get(':id')
    findById(@Param('id') id: number) : Observable<GroupEntity> {
        return this.groupService.findGroupById(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() group: GroupEntity
    ) : Observable<UpdateResult> {
        return this.groupService.updateGroup(id, group)
    }

    @Delete(':id')
    delete(@Param('id') id: number) : Observable<DeleteResult> {
        return this.groupService.deleteGroup(id);
    }
}
