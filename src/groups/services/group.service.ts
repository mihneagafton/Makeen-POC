import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { GroupEntity } from 'src/models/group.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(GroupEntity)
        private readonly groupRepository: Repository<GroupEntity>
    ) {}

    createGroup(group: GroupEntity) : Observable<GroupEntity> {
        return from(this.groupRepository.save(group));
    }

    findAllGroups() : Observable<GroupEntity[]> {
        return from(this.groupRepository.find());
    }

    findGroupById(id: number) : Observable<GroupEntity> {
        return from(this.groupRepository.findOne(id));
    }

    updateGroup(id: number, group: GroupEntity) : Observable<UpdateResult> {
        return from(this.groupRepository.update(id, group));
    }

    deleteGroup(id: number) : Observable<DeleteResult> {
        return from(this.groupRepository.delete(id));
    }
}
