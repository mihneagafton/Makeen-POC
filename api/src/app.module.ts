import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { DatabaseModule } from 'src/modules/database/database.module';
import { CollectionsModule } from 'src/modules/collections/collections.module';
import { ItemsModule } from 'src/modules/items/items.module';
import { GroupsModule } from 'src/modules/groups/groups.module';
import { RolesModule } from 'src/modules/roles/roles.module';
import { UsersModule } from 'src/modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    CollectionsModule,
    ItemsModule,
    GroupsModule,
    RolesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
