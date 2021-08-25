import { Module } from '@nestjs/common';
import { CollectionService } from 'src/collections/services/collection.service';
import { CollectionController } from 'src/collections/controllers/collection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionEntity } from 'src/models/collection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionEntity])],
  providers: [CollectionService],
  controllers: [CollectionController]
})
export class CollectionModule {}
