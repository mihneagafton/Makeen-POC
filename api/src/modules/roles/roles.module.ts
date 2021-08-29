import { Module } from '@nestjs/common';
import { RoleService } from 'src/modules/roles/role.service';
import { RoleController } from 'src/modules/roles/role.controller';
import { DatabaseModule } from 'src/modules/database/database.module';
import { rolesProviders } from 'src/modules/roles/roles.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    RoleService,
    ...rolesProviders
  ],
  controllers: [RoleController]
})
export class RolesModule {}