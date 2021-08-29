import { Module } from '@nestjs/common';
import { CollectionService } from 'src/modules/collections/collection.service';
import { CollectionController } from 'src/modules/collections/collection.controller';
import { collectionsProviders } from 'src/modules/collections/collections.providers';
import { DatabaseModule } from 'src/modules/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    CollectionService,
    ...collectionsProviders
  ],
  controllers: [CollectionController]
})
export class CollectionsModule {}
