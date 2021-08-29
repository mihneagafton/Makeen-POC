import { RolesUsers } from 'src/modules/users/roles-users.entity';

export const rolesUsersProviders = [
  {
    provide: 'ROLES_USERS_REPOSITORY',
    useValue: RolesUsers,
  },
];
