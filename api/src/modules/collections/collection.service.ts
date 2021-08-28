import { Injectable, Inject } from '@nestjs/common';
import { Collection } from './collection.entity';

@Injectable()
export class CollectionService {
  constructor(
    @Inject('COLLECTIONS_REPOSITORY')
    private collectionsRepository: typeof Collection
  ) {}

  async create(collection: Collection): Promise<Collection> {
    return await this.collectionsRepository.create<Collection>(collection);
  }
  
  async findAll(): Promise<Collection[]> {
    return await this.collectionsRepository.findAll<Collection>();
  }

  async findById(id: number): Promise<Collection> {
    return await this.collectionsRepository.findByPk<Collection>(id);
  }

  async update(id: number, collection: Collection) {
    const [numberOfAffectedRows, [updatedCollection]] = await this.collectionsRepository.update({ ...collection }, { where: { id }, returning: true });
    return { numberOfAffectedRows, updatedCollection };
  }

  async delete(id: number) {
    return await this.collectionsRepository.destroy({ where: { id } });
  }
  
}
