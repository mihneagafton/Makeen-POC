import { Module } from '@nestjs/common';
import { GroupService } from 'src/modules/groups/group.service';
import { GroupController } from 'src/modules/groups/group.controller';
import { groupsProviders } from 'src/modules/groups/groups.providers';
import { DatabaseModule } from 'src/modules/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    GroupService,
    ...groupsProviders
  ],
  controllers: [GroupController]
})
export class GroupsModule {}
