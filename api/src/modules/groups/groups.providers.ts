import { Group } from 'src/modules/groups/group.entity';

export const groupsProviders = [
  {
    provide: 'GROUPS_REPOSITORY',
    useValue: Group,
  },
];
