import { RolesUsers } from './roles-users.entity';

export const rolesUsersProviders = [
  {
    provide: 'ROLES_USERS_REPOSITORY',
    useValue: RolesUsers,
  },
];
