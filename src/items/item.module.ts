import { Module } from '@nestjs/common';
import { ItemService } from 'src/items/services/item.service';
import { ItemController } from 'src/items/controllers/item.controller';
import { ItemEntity } from 'src/models/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
