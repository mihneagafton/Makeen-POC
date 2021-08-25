import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { ItemEntity } from 'src/models/item.entity';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(ItemEntity)
        private readonly itemRepository: Repository<ItemEntity>
    ) {}
    
    createItem(item: ItemEntity): Observable<ItemEntity> {
        return from(this.itemRepository.save(item));
    }

    findAllItems(): Observable<ItemEntity[]> {
        return from(this.itemRepository.find());
    }

    findItemById(id: number): Observable<ItemEntity> {
        return from(this.itemRepository.findOne(id));
    }

    updateItem(id: number, item: ItemEntity): Observable<UpdateResult> {
        return from(this.itemRepository.update(id, item));
    }

    deleteItem(id: number): Observable<DeleteResult> {
        return from(this.itemRepository.delete(id));
    }
    
}
