import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { DatabaseModule } from '../database/database.module';
import { rolesProviders } from './roles.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    RoleService,
    ...rolesProviders
  ],
  controllers: [RoleController]
})
export class RolesModule {}