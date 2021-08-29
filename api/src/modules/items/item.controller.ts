import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Item } from 'src/modules/items/item.entity';
import { ItemService } from 'src/modules/items/item.service';

@Controller('items')
export class ItemController {
    constructor(private itemService : ItemService) {}

    @Post()
    async create(@Body() item: Item): Promise<Item> {
        return await this.itemService.create(item)
    }

    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Item> {
        return await this.itemService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() item: Item): Promise<Item> {
        const { numberOfAffectedRows, updatedItem } = await this.itemService.update(id, item);

        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Item doesn\'t exist');
        }

        return updatedItem;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        const deleted = await this.itemService.delete(id);

        if (deleted === 0) {
            throw new NotFoundException('This Item doesn\'t exist');
        }

        return 'Successfully deleted';
    }
}
