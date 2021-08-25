import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CollectionEntity } from 'src/models/collection.entity';
import { CollectionService } from 'src/collections/services/collection.service';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('collections')
export class CollectionController {
    constructor(private collectionService: CollectionService) {}

    @Post()
    create(@Body() collection: CollectionEntity): Observable<CollectionEntity> {
        return this.collectionService.createCollection(collection)
    }

    @Get()
    findAll(): Observable<CollectionEntity[]> {
        return this.collectionService.findAllColections();
    }

    @Get(':id')
    findById(@Param('id') id: number): Observable<CollectionEntity> {
        return this.collectionService.findCollectionById(id);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() collection: CollectionEntity
    ): Observable<UpdateResult> {
        return this.collectionService.updateCollection(id, collection);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult> {
        return this.collectionService.deleteCollection(id);
    }
}
