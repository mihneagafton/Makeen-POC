import { Role } from 'src/modules/roles/role.entity';

export const rolesProviders = [
  {
    provide: 'ROLES_REPOSITORY',
    useValue: Role,
  },
];
