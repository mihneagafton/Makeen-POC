import { Module } from '@nestjs/common';
import { ItemService } from 'src/modules/items/item.service';
import { ItemController } from 'src/modules/items/item.controller';
import { DatabaseModule } from 'src/modules/database/database.module';
import { itemsProviders } from 'src/modules/items/items.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ItemService,
    ...itemsProviders
  ],
  controllers: [ItemController]
})
export class ItemsModule {}
