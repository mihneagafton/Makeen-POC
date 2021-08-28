import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { collectionsProviders } from './collections.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    CollectionService,
    ...collectionsProviders
  ],
  controllers: [CollectionController]
})
export class CollectionsModule {}
