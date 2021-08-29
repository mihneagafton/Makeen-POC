import { Injectable, Inject } from '@nestjs/common';
import { Collection } from 'src/modules/collections/collection.entity';
import { Item } from 'src/modules/items/item.entity';
import { Group } from 'src/modules/groups/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @Inject('GROUPS_REPOSITORY')
    private groupsRepository: typeof Group
  ) {}

  async create(group: Group): Promise<Group> {
    return await this.groupsRepository.create<Group>(group);
  }
  
  async findAll(): Promise<Group[]> {
    return await this.groupsRepository.findAll<Group>({
      include: [{
        model: Collection,
        include: [{
            model: Item
        }]
      }]
    });
  }

  async findById(id: number): Promise<Group> {
    return await this.groupsRepository.findByPk<Group>(id, {
        include: [{
          model: Collection,
          include: [{
              model: Item
          }]
        }]
      });
  }

  async update(id: number, group: Group) {
    const [numberOfAffectedRows, [updatedGroup]] = await this.groupsRepository.update({ ...group }, { where: { id }, returning: true });
    return { numberOfAffectedRows, updatedGroup };
  }

  async delete(id: number) {
    return await this.groupsRepository.destroy({ where: { id } });
  }
  
}
