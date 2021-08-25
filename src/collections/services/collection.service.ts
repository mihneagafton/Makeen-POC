import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CollectionEntity } from 'src/models/collection.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class CollectionService {
    constructor(
        @InjectRepository(CollectionEntity)
        private readonly collectionRepository: Repository<CollectionEntity>
    ) {}
    
    createCollection(collection: CollectionEntity): Observable<CollectionEntity> {
        return from(this.collectionRepository.save(collection));
    }

    findAllColections(): Observable<CollectionEntity[]> {
        return from(this.collectionRepository.find());
    }

    findCollectionById(id: number): Observable<CollectionEntity> {
        return from(this.collectionRepository.findOne(id));
    }

    updateCollection(id: number, collection: CollectionEntity): Observable<UpdateResult> {
        return from(this.collectionRepository.update(id, collection));
    }

    deleteCollection(id: number): Observable<DeleteResult> {
        return from(this.collectionRepository.delete(id));
    }
    
}