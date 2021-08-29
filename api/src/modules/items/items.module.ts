import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { DatabaseModule } from '../database/database.module';
import { itemsProviders } from './items.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ItemService,
    ...itemsProviders
  ],
  controllers: [ItemController]
})
export class ItemsModule {}
