import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { groupsProviders } from './groups.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    GroupService,
    ...groupsProviders
  ],
  controllers: [GroupController]
})
export class GroupsModule {}
