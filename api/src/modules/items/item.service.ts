import { Injectable, Inject } from '@nestjs/common';
import { Item } from './item.entity';


@Injectable()
export class ItemService {
    constructor(
        @Inject('ITEMS_REPOSITORY')
        private itemsRepository: typeof Item
    ) {}

    async create(item: Item): Promise<Item> {
        return await this.itemsRepository.create<Item>(item);
    }

    async findAll(): Promise<Item[]> {
        return await this.itemsRepository.findAll<Item>();
    }

    async findById(id: number): Promise<Item> {
        return await this.itemsRepository.findByPk<Item>(id);
    }

    async update(id: number, item: Item) {
        const [numberOfAffectedRows, [updatedItem]] = await this.itemsRepository.update({ ...item }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedItem };
    }
    
    async delete(id: number) {
        return await this.itemsRepository.destroy({ where: { id } });
    }
}
