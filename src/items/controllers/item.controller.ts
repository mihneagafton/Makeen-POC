import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ItemService } from 'src/items/services/item.service';
import { ItemEntity } from 'src/models/item.entity';

@Controller('items')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Post()
    create(@Body() item: ItemEntity): Observable<ItemEntity> {
        return this.itemService.createItem(item)
    }

    @Get()
    findAll(): Observable<ItemEntity[]> {
        return this.itemService.findAllItems();
    }

    @Get(':id')
    findById(@Param('id') id: number): Observable<ItemEntity> {
        return this.itemService.findItemById(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() item: ItemEntity
    ): Observable<UpdateResult> {
        return this.itemService.updateItem(id, item);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.itemService.deleteItem(id);
    }
}
