import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Collection } from './collection.entity';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
    constructor(private collectionService : CollectionService) {}

    @Post()
    async create(@Body() collection: Collection): Promise<Collection> {
        return await this.collectionService.create(collection)
    }

    @Get()
    async findAll(): Promise<Collection[]> {
        return await this.collectionService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Collection> {
        return await this.collectionService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() Collection: Collection): Promise<Collection> {
        const { numberOfAffectedRows, updatedCollection } = await this.collectionService.update(id, Collection);

        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Collection doesn\'t exist');
        }

        return updatedCollection;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        const deleted = await this.collectionService.delete(id);

        if (deleted === 0) {
            throw new NotFoundException('This Collection doesn\'t exist');
        }

        return 'Successfully deleted';
    }
}
