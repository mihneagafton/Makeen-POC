import { Module } from '@nestjs/common';
import { GroupService } from 'src/groups/services/group.service';
import { GroupController } from 'src/groups/controllers/group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from 'src/models/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  providers: [GroupService],
  controllers: [GroupController]
})
export class GroupModule {}
